using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Server.DTOs;
using Server.Models;

namespace Server.Services
{
    public interface IBikeService
    {
        Task<IAsyncResult> AddBikeAsync(BikeDTO bikeDTO);
        Task<IAsyncResult> RemoveBikeAsync(int bikeID);
        Task<IEnumerable<Bike>> GetAllBikesAsync();
    }
}