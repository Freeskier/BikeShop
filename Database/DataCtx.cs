using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Database
{
    public class DataCtx : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Shop> Shops { get; set; }
        public DbSet<Bike> Bikes { get; set; }
        public DbSet<Reservation> Reservations { get; set; }

        public DataCtx(DbContextOptions<DataCtx> options) : base (options) 
        {}
    }
}