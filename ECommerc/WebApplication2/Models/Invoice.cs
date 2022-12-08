using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication2.Models
{
    public class Invoice
    {

        [Key]
        public int Id { get; set; }
        
        public int? CustomerId { get; set; }
        [ForeignKey("CustomerId")]

        public Customer Customer { get; set; }

        public ICollection<Product> Products { get; set; }

        public List<Product> Productet { get; set; }

        public string Product { get; set; }


    }
}
