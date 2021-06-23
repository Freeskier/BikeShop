using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Server.Database;
using Server.DTOs;
using Server.Models;

namespace Server.Services
{
    public class ReservationService : IReservationService
    {
        private readonly DataCtx _context;

        public ReservationService(DataCtx context)
        {
            _context = context;
        }

        public async Task<IAsyncResult> AddReservationAsync(ReservationDTO reservationDTO)
        {
            var reservation = new Reservation
            {
                BikeID = reservationDTO.BikeID,
                UserID = reservationDTO.UserID,
                DateFrom = reservationDTO.DateFrom,
                DateTo = reservationDTO.DateTo
            };
            await _context.Reservations.AddAsync(reservation);
            await _context.SaveChangesAsync();
            return Task.CompletedTask;
        }

        public async Task<IEnumerable<Reservation>> GetAllReservationsAsync()
        {
            return await _context.Reservations.ToListAsync();
        }
    }
}