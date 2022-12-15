using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication2;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoicesController : ControllerBase
    {
        private readonly ECommerceContext _context;

        public InvoicesController(ECommerceContext context)
        {
            _context = context;
        }

        // GET: api/Invoices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Fatura>>> Getinvoice()
        {
            return await _context.invoice.ToListAsync();
        }

        [HttpGet("date/{data}")]
        public async Task<ActionResult<IEnumerable<Fatura>>> GetInvoiceData(DateTime data)
        {
            
            string date = data.ToString("yyyy-MM-dd");
            return await _context.invoice.Where(x => x.date.Equals(date)).ToListAsync();
        }
        // GET: api/Invoices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Fatura>> GetFatura(int id)
        {
            var fatura = await _context.invoice.FindAsync(id);

            if (fatura == null)
            {
                return NotFound();
            }

            return fatura;
        }

        // PUT: api/Invoices/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFatura(int id, Fatura fatura)
        {
            if (id != fatura.InvoiceId)
            {
                return BadRequest();
            }

            _context.Entry(fatura).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FaturaExists(id))
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

        // POST: api/Invoices
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Fatura>> PostFatura(Fatura fatura)
        {
            _context.invoice.Add(fatura);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFatura", new { id = fatura.InvoiceId }, fatura);
        }

        // DELETE: api/Invoices/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFatura(int id)
        {
            var fatura = await _context.invoice.FindAsync(id);
            if (fatura == null)
            {
                return NotFound();
            }

            _context.invoice.Remove(fatura);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("count/invoice")]

        public async Task<int> Invoices()
        {
            return await _context.invoice.CountAsync();
        }

        [HttpGet("count/invoice/today")]

        public async Task<int> CountTodayInvoices()
        {
            DateTime now = DateTime.Now;
            string dateNow=now.ToString("yyyy-MM-dd");
            return await _context.invoice.Where(x=> x.date.Equals(dateNow)).CountAsync();
        }

        [HttpGet("invoice/{id}")]
        public async Task<ActionResult<Fatura>> GetInvoiceId(int id)
        {
            var invoice = _context.invoice.FindAsync(id);

            if (invoice == null)
            {
                return NotFound();
            }

            return await invoice;
        }

        [HttpGet("today/invoices")]
        public async Task<ActionResult<IEnumerable<Fatura>>> GetTodayInvoices()
        {
            DateTime now = DateTime.Now;
            string dateNow = now.ToString("yyyy-MM-dd");
            return await _context.invoice.Where(x => x.date.Equals(dateNow)).ToListAsync();

        }

        [HttpGet("searched/{search}")]
        public async Task<ActionResult<IEnumerable<Fatura>>> GetInvoiceSearch(string search)
        {
            return await _context.invoice.Where(x => x.customerName.Contains(search)).ToListAsync();
        }
        private bool FaturaExists(int id)
        {
            return _context.invoice.Any(e => e.InvoiceId == id);
        }
    }
}
