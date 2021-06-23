using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using Server.Authentication;
using Server.Database;
using Server.DTOs;

namespace Server.Services
{
    public class UserService : IUserService
    {
        private readonly DataCtx _context;
        private readonly IJwtAuthenticationManager ajwtAuthenticationManage;

        public UserService(DataCtx context, IJwtAuthenticationManager ajwtAuthenticationManage)
        {
            this.ajwtAuthenticationManage = ajwtAuthenticationManage;
            _context = context;
        }

        public async Task<UserToLoginDTO> LoginAsync(UserToLoginDTO userDTO)
        {
            var usr = await _context.Users.FirstOrDefaultAsync(x => (x.Name == userDTO.Name && x.Password == userDTO.Password));
            var token = ajwtAuthenticationManage.Authenticate(userDTO.Name, userDTO.Password);
            if (token == null)
            {
                return null;
            }
            return new UserToLoginDTO {
                ID = usr.ID,
                Name = usr.Name,
                Email = usr.Email,
                Password = "",
                Type = usr.Type,
                Token = token
            };
        }

        public async Task<UserToLoginDTO> RegisterAsync(UserToLoginDTO userDTO)
        {
            var token = ajwtAuthenticationManage.Authenticate(userDTO.Name, userDTO.Password);
            if (token == null)
                return null;
            User user = new User
            {
                Name = userDTO.Name,
                Password = userDTO.Password,
                Email = userDTO.Email,
                Type = "USER"
            };
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            int ID = _context.Users.First(x => x.Name == user.Name).ID;
            return new UserToLoginDTO {
                ID = ID,
                Name = user.Name,
                Email = user.Email,
                Password = "",
                Type = user.Type,
                Token = token
            };
        }
    }
}