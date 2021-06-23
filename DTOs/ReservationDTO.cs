using System;

namespace Server.DTOs
{
    public class ReservationDTO
    {
        public int ID {get; set;}
        public int BikeID {get; set;}
        public int UserID {get; set;}
        public DateTime DateFrom {get; set;}
        public DateTime DateTo {get; set;}
    }
}