namespace WebApplication2.Stripe
{
    public record StripeCustomer(
         string Name,
         string Email,
         string CustomerId);
}
