using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Server.DTOs;
using Server.Services;

namespace Server.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/shop/")]
    public class ShopController : ControllerBase
    {
        private readonly IShopService _shopService;
        public ShopController(IShopService shopService)
        {
            _shopService = shopService;
        }

        [HttpGet("getAll")]
        public async Task<IActionResult> GetAllShopsAsync()
        {
            return Ok(await _shopService.GetAllShopsAsync());
        }
        
        [HttpPost("add")]
        public async Task<IActionResult> AddShopAsync([FromBody] ShopDTO shopDTO)
        {
            return Ok(await _shopService.AddShopAsync(shopDTO));
        }
        
    }
}