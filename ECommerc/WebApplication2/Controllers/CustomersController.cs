using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication2;
using WebApplication2.Models;
namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly ECommerceContext _context;

        public CustomersController(ECommerceContext context)
        {
            _context = context;
        }

        // GET: api/Customers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> Getcustomers()
        {
            return await _context.customers.ToListAsync();
        }

        // GET: api/Customers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> GetCustomer(int id)
        {
            var customer = await _context.customers.FindAsync(id);
           
            if (customer == null)
            {
                return NotFound();
            }

            return customer;
        }

        [HttpGet("{emri:alpha}")]

        public async Task<ActionResult<IEnumerable<Customer>>> GetEmri(string emri)
        {
            return await _context.customers.Where(x => x.CustomerName.Contains(emri)).ToListAsync();

        }

        [HttpGet("Subjects")]

        public async Task<ActionResult<IEnumerable<Customer>>> GetSubject()
        {
            return await _context.customers.ToListAsync();
        }
        // PUT: api/Customers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomer(int id, Customer customer)
        {
            if (id != customer.CustomerId)
            {
                return BadRequest();
            }

            _context.Entry(customer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerExists(id))
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

        // POST: api/Customers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Customer>> PostCustomer(Customer customer)
        {
            _context.customers.Add(customer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCustomer", new { id = customer.CustomerId }, customer);
        }

        // DELETE: api/Customers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            var customer = await _context.customers.FindAsync(id);
            if (customer == null)
            {
                return NotFound();
            }

            _context.customers.Remove(customer);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CustomerExists(int id)
        {
            return _context.customers.Any(e => e.CustomerId == id);
        }
        [HttpGet("/verify/{code}/{email}")]
        public void sendEmailVerification(long code, string email)
        {
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("order.onlinemarket@gmail.com");
            mailMessage.To.Add(email);
            mailMessage.Subject = "Confirmation Code";
            mailMessage.Body = "Your confirmation code is: " + code;
            mailMessage.IsBodyHtml = true;
            var smtpClient = new SmtpClient("smtp.gmail.com")
            {
                Port = 587,
                Credentials = new NetworkCredential("order.onlinemarket@gmail.com", "swurrvbphqijsnco"),
                EnableSsl = true,

            };
            smtpClient.Send(mailMessage);
        }
        [HttpGet("send/confirm/{email}/{password}/{name}/{surname}/{phone}/{code}")]
        public void sendEmail(string email, string password, string name, string surname, string phone)

        {
            Random random = new Random();
            int code = random.Next(999999);

            Customer customer = new Customer();
            customer.CustomerName = name;
            customer.CustomerAdress = "N/A";
            customer.CustomerEmail = email;
            customer.CustomerPassword = password;
            customer.CustomerPhone = phone;
            customer.CustomerSurname = surname;
            customer.Code = code;
            _context.Add(customer);
            _context.SaveChanges();
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("veprimm1@gmail.com");
            mailMessage.To.Add(email);
            mailMessage.Subject = "Confirmation Code";
            mailMessage.Body = "Your confirmation code is: " + code;
            mailMessage.IsBodyHtml = true;

            var smtpClient = new SmtpClient("smtp.gmail.com")
            {
                Port = 587,
                Credentials = new NetworkCredential("veprimm1@gmail.com", "wppdhyddblkwswte"),
                EnableSsl = true,

            };
            smtpClient.Send(mailMessage);


        }
        [HttpGet("/get/best/customers")]
        public async Task<ActionResult<IEnumerable<Customer>>> GetBestCustomers()
        {
            return await _context.customers.OrderByDescending(x => x.bought).ToListAsync();
        }
        [HttpGet("customer/by/email/{getemail}")]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomerByEmail(string getemail, Customer c)
        {
           var customer = await _context.customers.Where(x=> x.CustomerEmail.Equals(getemail)).ToListAsync();
            return customer;
        }
        [HttpGet("new/order/{email}/{price}")]
        public async Task<ActionResult<Customer>> NewOrder(string email, int price)
        {
            var customer = await _context.customers.Where(x => x.CustomerEmail.Equals(email)).FirstOrDefaultAsync();

            if (customer == null)
            {
                Customer c = new Customer();
                c.CustomerSurname = "";
                c.CustomerPhone = "";
                c.CustomerEmail = email;
                c.CustomerName = "";
                c.Code = price;
                c.CustomerPassword = "";
                c.CustomerAdress = "";
                c.bought = 1;
                _context.customers.AddAsync(c);
                await _context.SaveChangesAsync();
                return customer;
            }
            else
            {
                customer.bought = customer.bought + 1;
                customer.Code = customer.Code + price;
                await _context.SaveChangesAsync();
                return customer;
            }
        }

        [HttpGet("get/customers")]
        public async Task<int> GetCustomersNumber()
        {
            return await _context.customers.CountAsync();
        }

        [HttpGet("get/total/incomes")]
        public async Task<int> GetTotalIncomes()
        {
            var customers = await _context.customers.ToListAsync();
            int incomes = 0;
            foreach (var customer in customers)
            {
                incomes += customer.Code;
            }

            return incomes;
        }
    }
    }
