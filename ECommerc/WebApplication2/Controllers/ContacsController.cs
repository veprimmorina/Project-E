using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Net;
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
    public class ContacsController : ControllerBase
    {
        private readonly ECommerceContext _context;

        public ContacsController(ECommerceContext context)
        {
            _context = context;
        }

        // GET: api/Contacs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contacs>>> Getcontacts()
        {
            return await _context.contacts.ToListAsync();
        }

        // GET: api/Contacs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Contacs>> GetContacs(int id)
        {
            var contacs = await _context.contacts.FindAsync(id);

            if (contacs == null)
            {
                return NotFound();
            }

            return contacs;
        }

        // PUT: api/Contacs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContacs(int id, Contacs contacs)
        {
            if (id != contacs.contactsId)
            {
                return BadRequest();
            }

            _context.Entry(contacs).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContacsExists(id))
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

        // POST: api/Contacs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Contacs>> PostContacs(Contacs contacs)
        {
            _context.contacts.Add(contacs);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContacs", new { id = contacs.contactsId }, contacs);
        }

        // DELETE: api/Contacs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContacs(int id)
        {
            var contacs = await _context.contacts.FindAsync(id);
            if (contacs == null)
            {
                return NotFound();
            }

            _context.contacts.Remove(contacs);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContacsExists(int id)
        {
            return _context.contacts.Any(e => e.contactsId == id);
        }

        [HttpGet("send/{email}/{subject}/{text}")]
        public void sendEmail(string email, string subject, string text)
        {
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("veprimm1@gmail.com");
            mailMessage.To.Add(email);
            mailMessage.Subject = subject;
            mailMessage.Body = text;
            mailMessage.IsBodyHtml = true;

            var smtpClient = new SmtpClient("smtp.gmail.com")
            {
                Port = 587,
                Credentials = new NetworkCredential("veprimm1@gmail.com", "wppdhyddblkwswte"),
                EnableSsl = true,

            };
            smtpClient.Send(mailMessage);

        }
        [HttpGet("positive/status")]
        public async Task<ActionResult<IEnumerable<Contacs>>> GetPositiveReviews()
        {
            return await _context.contacts.Where(x => x.status.Equals("Positive")).Take(10).ToListAsync();
        }
    }
    
}
