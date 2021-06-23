using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Server.DTOs;
using Server.Services;

namespace Server.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/bike/")]
    public class BikeController : ControllerBase
    {
        private readonly IBikeService _bikeService;
        public BikeController(IBikeService bikeService)
        {
            _bikeService = bikeService;
        }

        [HttpGet("getAll")]
        public async Task<IActionResult> GetAllBikesAsync()
        {
            return Ok(await _bikeService.GetAllBikesAsync());
        }
        
        [HttpPost("add")]
        public async Task<IActionResult> AddBikeAsync([FromBody] BikeDTO bikeDTO)
        {
            return Ok(await _bikeService.AddBikeAsync(bikeDTO));
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> AddBikeAsync(int id)
        {
            return Ok(await _bikeService.RemoveBikeAsync(id));
        }
        
    }
}