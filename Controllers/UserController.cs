using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Server.Services;
using Server.DTOs;

namespace Server.Controllers
{
    [ApiController]
    [Route("api/user/")]
    public class UserController : ControllerBase
    {

        private IUserService _userService;

        public UserController(IUserService userService)
        {
            this._userService = userService;            
        }

        
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]UserToLoginDTO userGet)
        {
            return Ok(await _userService.RegisterAsync(userGet));
        }


        [HttpPost("login")]
        public async Task <IActionResult> Login([FromBody] UserToLoginDTO userCredentials)
        {
            return Ok(await _userService.LoginAsync(userCredentials));
        }
    }
}