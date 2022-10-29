using Microsoft.EntityFrameworkCore;
using WebApplication2.Models;

namespace WebApplication2
{


    public class ECommerceContext: DbContext
    {

        public ECommerceContext(DbContextOptions<ECommerceContext> options) : base(options)
        {

        }

        public DbSet<Customer> customers { get; set; }

        public DbSet<Product> products { get; set; }

        public DbSet<Invoice> invoices { get; set; }

        internal Task FindAsync(int productId)
        {
            throw new NotImplementedException();
        }
    }
}
