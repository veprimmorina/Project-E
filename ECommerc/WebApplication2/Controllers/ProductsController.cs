using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using iTextSharp.text;
using iTextSharp.text.pdf;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using Org.BouncyCastle.Utilities;
using WebApplication2;
using WebApplication2.Models;
using static iTextSharp.text.pdf.AcroFields;
using SmtpClient = System.Net.Mail.SmtpClient;


namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ECommerceContext _context;
        int product1;

        public ProductsController(ECommerceContext context)
        {
            _context = context;
        }

        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> Getproducts()
        {
            var firstProducts = await _context.products.Where(x => x.Category.Equals("Vegan")).Take(3).ToListAsync();
            var secondProducts = await _context.products.Where(x => x.Category.Equals("Diary Products")).Take(3).ToListAsync();
            var thirdProducts = await _context.products.Where(x => x.Category.Equals("Kids")).Take(3).ToListAsync();
            return  await _context.products.OrderByDescending(x=> x.Id).Take(12).ToListAsync();
        }
        [HttpGet("clicked")]
        public async Task<ActionResult<IEnumerable<Product>>> GetMostClckedProducts()
        {
            return await _context.products.OrderByDescending(x => x.clicked).ToListAsync();
        }
        [HttpGet("all")]

        public async Task<ActionResult<IEnumerable<Product>>> GetAllProducts()
        {
            return await _context.products.ToListAsync();
        }
        [HttpGet("get/{search}")]

        public async Task<ActionResult<IEnumerable<Product>>> GetSearchedProducts(string search)
        {
            return await _context.products.Where(x => x.Name.Contains(search)).ToListAsync();
        }
        [HttpGet("category/vegan")]
        public async Task<ActionResult<IEnumerable<Product>>> GetVeganProducts()
        {
            string emri = "Vegane";
            return await _context.products.Where(x => x.Category.Equals(emri)).ToListAsync();
        }

        [HttpGet("category/dairy/products")]

        public async Task<ActionResult<IEnumerable<Product>>> GetDairyProducts()
        {
            return await _context.products.Where(x => x.Category.Equals("Produkte Qumeshti")).ToListAsync();
        }

        [HttpGet("category/{pCategory}")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProductCategory(string pCategory)
        {
            return await _context.products.Where(x => x.Category.Equals(pCategory)).ToListAsync();
        }

        [HttpGet("top/products")]
        public async Task<ActionResult<IEnumerable<Product>>> GetTopProducts()
        {
           return await _context.products.OrderByDescending(x => x.sold).Take(5).ToListAsync();
            
           
        }

        [HttpGet("all/top/products")]
        public async Task<ActionResult<IEnumerable<Product>>> GetAllTopProducts()
        {
            return await _context.products.OrderByDescending(x => x.sold).ToListAsync();


        }
        [HttpGet("clicked/{id}")]

        public  void setClicked(int id)
        {
            var product =  _context.products.Find(id);
            product.clicked = product.clicked + 1;
            _context.Update(product);
            _context.SaveChanges();
           

        }
        
        [HttpPost("generate/pdf")]
        public IActionResult PDF()
        {
            using (MemoryStream ms = new MemoryStream())
            {
                Document doc = new Document(PageSize.A4, 25,25,30,30);
                PdfWriter pdfWriter = PdfWriter.GetInstance(doc, ms);

               // var image= iTextSharp.text.Image.GetInstance()

                Paragraph para = new Paragraph("This is para", new Font(Font.FontFamily.HELVETICA,20));
                para.Alignment = Element.ALIGN_CENTER;
                doc.Open();
                doc.Add(para);
                doc.Close();
                var constant = ms.ToArray();
                return File(constant, "application/vnd", "First.pdf");


            }
        }
        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.products.FindAsync(id);
            
            if (product == null)
            {
                return NotFound();
            }

            return product;
        }
        
        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        
        [HttpPost("get/cart")]

        public async void GetCart(Product[] product)
        {

            for(int i=0; i<product.Length; i++)
            {
                product1=product[0].Id;
            }
            
        }
        
        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        
        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        /*
        [HttpGet("minus/{product}")]

        public async Task<ActionResult<Product>> MinusQuantity(int product)
        {
            var pr = await _context.products.FindAsync(product);
            pr.Quantity = pr.Quantity - 1;
            _context.products.Update(pr);
            _context.SaveChanges();
            return pr;
        }
        */
        [HttpPost]
        public async Task<ActionResult<Product>> Post(Product product)
        {
            _context.products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        }

        [HttpGet("/get/products")]

        public async Task<ActionResult<IEnumerable<Product>>> GetProductsToShow()
        {
            return await _context.products.Take(3).ToListAsync();
        }

        [HttpPost("send/{email}/{product}/{name}/{surname}/{adress}/{totalPrice}")]

        public  void SendEmail(Product [] prod,string email, int product, string name, string surname, string adress, double totalPrice)
        {
            int productId=0;
            List<int> lista= new List<int>();
            Product firstProduct= new Product();
            string pName=" ";
            string pPrice = "";
            string pAmount = "";
            double pTotalPrice = 0;
            string pTotal = "";
            string totalMessage = "";
            
            
            for (int i=0; i<prod.Length; i++)
            {
                productId = prod[0].Id;
                lista.Add(prod[i].Id);
                firstProduct = prod[i];
                var producti = _context.products.Find(firstProduct.Id);
                producti.Quantity = producti.Quantity - firstProduct.amount;
                producti.sold = producti.sold+producti.amount;
                _context.Update(producti);
                _context.SaveChanges();
                pName =pName+" \n"+prod[i].Name;
                pPrice = pPrice + " "+prod[i].Price;
                pAmount = pAmount + " "+ prod[i].amount;
                pTotalPrice = firstProduct.amount * firstProduct.Price;
                pTotal =pTotal+" "+ Convert.ToString(pTotalPrice);
                totalMessage = totalMessage + "<tr><td>"+ firstProduct.Name+"</td>"+"<td>"+Math.Round((firstProduct.Price-((firstProduct.discount*firstProduct.Price/100))),2)+"</td><td>"+firstProduct.amount+"</td><td>"+ Math.Round(((firstProduct.Price - (firstProduct.discount * firstProduct.Price / 100)) * firstProduct.amount),2) + "</td></tr>";
            }
            Fatura invoice = new Fatura();
            DateTime date=DateTime.Now;
            string finalDate=date.ToString("yyyy-MM-dd");
            string finalTime = date.ToString("hh:mm:ss");
            invoice.customerName = name + " " + surname;
            invoice.customerEmail = email;
            invoice.date=finalDate;
            invoice.time=finalTime;
            _context.Add(invoice);
            _context.SaveChanges();
            string photoPath = "https://img.freepik.com/premium-vector/street-market-business-company-logo_23-2148462526.jpg?w=2000";
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("veprimm1@gmail.com");
            mailMessage.To.Add(email);
                mailMessage.Subject = "Order Confirmation";
                mailMessage.Body = 
                    "Dear " + name + " " + surname + ", <br> By this email we are confirming your order <br>" +
                    "<table><tr><td> Product Name</td> <td> Product Price </td> <td> Product Quantity</td><td>Total Product Price</td></tr> " +
                    totalMessage +
                    "<tr><td></td><td></td><td>Total Price: </td><td>"+totalPrice+ " € </td></tr></table>" +
                    "<br>Adress: " + adress + 
                    "  <br>Thanks for choosing us <h1>Nugget Market </h1>";
                mailMessage.IsBodyHtml = true;

                var smtpClient = new SmtpClient("smtp.gmail.com")
                {
                    Port = 587,
                    Credentials = new NetworkCredential("veprimm1@gmail.com", "wppdhyddblkwswte"),
                    EnableSsl = true,

                };
                smtpClient.Send(mailMessage);
            

        }

        [HttpGet("count/products")]

        public async Task<int> CountProducts()
        {
            return await _context.products.CountAsync();
        }
        private bool ProductExists(int id)
        {
            return _context.products.Any(e => e.Id == id);
        }
    }
}
