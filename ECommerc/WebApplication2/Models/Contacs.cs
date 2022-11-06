using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace WebApplication2.Models
{
    public class Contacs
    {

        [Key]
        public int contactsId { get; set; }

        [Column]
        public string name { get; set; }

        [Column]

        public string email { get; set; }

        [Column]
        public string comment { get; set; }

        [Column]
        public string status { get; set; }

        [Column]
        public string date { get; set; }

        [Column]
        public Boolean isChecked { get; set; }
    }
}
