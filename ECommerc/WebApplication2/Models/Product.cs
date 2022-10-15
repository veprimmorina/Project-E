using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WebApplication2;

namespace WebApplication2.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName ="nvarchar(100)")]
        public string Name { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public double Price { get; set; }
        public string Category { get; set; }
        public int Quantity { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string PhotoPath { get; set; }

        public int amount { get; set; }

    }


public static class ProductEndpoints
{
	public static void MapProductEndpoints (this IEndpointRouteBuilder routes)
    {
        routes.MapGet("/api/Product", async (ECommerceContext db) =>
        {
            return await db.products.ToListAsync();
        })
        .WithName("GetAllProducts");

        routes.MapGet("/api/Product/{id}", async (int Id, ECommerceContext db) =>
        {
            return await db.products.FindAsync(Id)
                is Product model
                    ? Results.Ok(model)
                    : Results.NotFound();
        })
        .WithName("GetProductById");

        routes.MapPut("/api/Product/{id}", async (int Id, Product product, ECommerceContext db) =>
        {
            var foundModel = await db.products.FindAsync(Id);

            if (foundModel is null)
            {
                return Results.NotFound();
            }
            //update model properties here

            await db.SaveChangesAsync();

            return Results.NoContent();
        })   
        .WithName("UpdateProduct");

        routes.MapPost("/api/Product/", async (Product product, ECommerceContext db) =>
        {
            db.products.Add(product);
            await db.SaveChangesAsync();
            return Results.Created($"/Products/{product.Id}", product);
        })
        .WithName("CreateProduct");


        routes.MapDelete("/api/Product/{id}", async (int Id, ECommerceContext db) =>
        {
            if (await db.products.FindAsync(Id) is Product product)
            {
                db.products.Remove(product);
                await db.SaveChangesAsync();
                return Results.Ok(product);
            }

            return Results.NotFound();
        })
        .WithName("DeleteProduct");
    }
}}
