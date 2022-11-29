using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Stripe;
using System.Net.Mail;
using System.Net;
using WebApplication2.Services;
using WebApplication2.Stripe;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StripeController : ControllerBase
    {
        private readonly IStripeAppService _stripeService;

        public StripeController(IStripeAppService stripeService)
        {
            _stripeService = stripeService;
        }

        [HttpPost("customer/add")]
        public async Task<ActionResult<StripeCustomer>> AddStripeCustomer(
            [FromBody] AddStripeCustomer customer,
            CancellationToken ct)
        {
            StripeCustomer createdCustomer = await _stripeService.AddStripeCustomerAsync(
                customer,
                ct);
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("veprimm1@gmail.com");
            mailMessage.To.Add(createdCustomer.Email);
            mailMessage.Subject = "Your stripe account";
            mailMessage.Body =
                "Dear "+createdCustomer.Name+"<br> You have set a new Stripe Account. <br><br> Id of your" +
                " account: "+createdCustomer.CustomerId+"<br><b>*Note: Please consider saving this id on " +
                " your important notes and than deletion of that e-mail.</b><br><br> Thank you!";
            mailMessage.IsBodyHtml = true;

            var smtpClient = new SmtpClient("smtp.gmail.com")
            {
                Port = 587,
                Credentials = new NetworkCredential("veprimm1@gmail.com", "wppdhyddblkwswte"),
                EnableSsl = true,

            };
            smtpClient.Send(mailMessage);
            return StatusCode(StatusCodes.Status200OK, createdCustomer);
        }


        [HttpPost("payment/add")]
        public async Task<ActionResult<StripePayment>> AddStripePayment(
            [FromBody] AddStripePayment payment,
            CancellationToken ct)
        {
            StripePayment createdPayment = await _stripeService.AddStripePaymentAsync(
                payment,
                ct);

            return StatusCode(StatusCodes.Status200OK, createdPayment);
        }
       // [HttpGet("customer/{id}")]
        //public async Task<ActionResult<StripeCustomer>> GetCustomer(String id)
        //{
            //return await _stripeService.;
        //}
    }
}

