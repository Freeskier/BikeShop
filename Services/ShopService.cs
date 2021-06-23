using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Server.Database;
using Server.DTOs;
using Server.Models;

namespace Server.Services
{
    public class ShopService : IShopService
    {
        private readonly DataCtx _context;

        public ShopService(DataCtx context)
        {
            _context = context;
        }

        public async Task<IAsyncResult> AddShopAsync(ShopDTO shopDTO)
        {
            var shop = new Shop
            {
                Name = shopDTO.Name,
                Adress = shopDTO.Adress,
                Latitude = shopDTO.Latitude,
                Longitude = shopDTO.Longitude
            };
            await _context.Shops.AddAsync(shop);
            await _context.SaveChangesAsync();
            return Task.CompletedTask;
        }

        public async Task<IEnumerable<Shop>> GetAllShopsAsync()
        {
            return await _context.Shops.ToListAsync();
        }
    }
}