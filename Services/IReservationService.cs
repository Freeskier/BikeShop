using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Server.DTOs;
using Server.Models;

namespace Server.Services
{
    public interface IReservationService
    {
        Task<IAsyncResult> AddReservationAsync(ReservationDTO reservationDTO);
        Task<IEnumerable<Reservation>> GetAllReservationsAsync();
    }
}