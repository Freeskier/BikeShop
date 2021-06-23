using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Server.DTOs;
using Server.Models;

namespace Server.Services
{
    public interface IShopService
    {
        Task<IAsyncResult> AddShopAsync(ShopDTO shop);
        Task<IEnumerable<Shop>> GetAllShopsAsync();
    }
}