using Server.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Server.DTOs;

namespace Server.Services
{
    public interface IUserService
    {
        Task<UserToLoginDTO> RegisterAsync(UserToLoginDTO user);
        Task<UserToLoginDTO> LoginAsync(UserToLoginDTO user);
    }
}