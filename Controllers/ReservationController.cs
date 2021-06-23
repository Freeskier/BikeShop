using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Server.DTOs;
using Server.Services;

namespace Server.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/reservation/")]
    public class ReservationController : ControllerBase
    {
        private readonly IReservationService _reservationService;
        public ReservationController(IReservationService reservationService)
        {
            _reservationService = reservationService;
        }

        [HttpGet("getAll")]
        public async Task<IActionResult> GetAllReservationsAsync()
        {
            return Ok(await _reservationService.GetAllReservationsAsync());
        }
        
        [HttpPost("add")]
        public async Task<IActionResult> AddReservationAsync([FromBody] ReservationDTO reservationDTO)
        {
            return Ok(await _reservationService.AddReservationAsync(reservationDTO));
        }
        
    }
}