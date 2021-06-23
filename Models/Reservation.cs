using System;
using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class Reservation
    {
        public int ID {get; set;}
        public int BikeID {get; set;}
        public int UserID {get; set;}
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{dd/MM/yyyy}")]
        public DateTime DateFrom {get; set;}
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{dd/MM/yyyy}")]
        public DateTime DateTo {get; set;}
    }
}