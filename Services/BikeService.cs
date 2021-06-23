using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Server.Database;
using Server.DTOs;
using Server.Models;

namespace Server.Services
{
    public class BikeService : IBikeService
    {
        private readonly DataCtx _context;

        public BikeService(DataCtx context)
        {
            _context = context;
        }

        public async Task<IAsyncResult> AddBikeAsync(BikeDTO bikeDTO)
        {
            var bike = new Bike
            {
                Name = bikeDTO.Name,
                Type = bikeDTO.Type,
                ShopID = bikeDTO.ShopID
            };
            await _context.Bikes.AddAsync(bike);
            await _context.SaveChangesAsync();
            return Task.CompletedTask;
        }

        public async Task<IEnumerable<Bike>> GetAllBikesAsync()
        {
            return await _context.Bikes.ToListAsync();
        }

        public async Task<IAsyncResult> RemoveBikeAsync(int bikeID)
        {
            var bike = await _context.Bikes.FirstOrDefaultAsync(x => x.ID == bikeID);
            if(bike == null)
                return null;
            _context.Bikes.Remove(bike);
            await _context.SaveChangesAsync();
            return Task.CompletedTask;
        }
    }
}