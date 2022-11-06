
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace WebApplication2.Models
{
    public class Fatura
    {

        [Key]
        public int InvoiceId { get; set; }
        
        [Column]
        public string customerName { get; set; }
        [Column]
        public string customerEmail { get; set; }
        [Column]
        public string date { get; set; }
        [Column]
        public string time { get; set; }
        [Column]
        public ICollection<Product> Products { get; set; }



    }
}
