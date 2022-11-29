using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Models
{
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }
        [Column(TypeName = "nvarchar (100)")]
        public string CustomerName { get; set; }
        [Column(TypeName = "nvarchar (100)")]
        public string CustomerSurname { get; set; }

        [Column(TypeName ="nvarchar(100)")]
        public string CustomerEmail { get; set; }

        [Column (TypeName ="nvarchar(100)")]
        public string CustomerPassword { get; set; }

        [Column (TypeName="nvarchar(100)")]
        public string CustomerPhone { get; set; }

        [Column (TypeName ="nvarchar(100)")]
        public string CustomerAdress { get; set; }
        [Column]
        public int Code { get; set; }

        [Column]
        public int bought { get; set; }
        
        public ICollection<Customer> Customers { get; set; }

    }
}
