using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication2.Migrations
{
    public partial class products : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "InvoiceId1",
                table: "products",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_products_InvoiceId1",
                table: "products",
                column: "InvoiceId1");

            migrationBuilder.AddForeignKey(
                name: "FK_products_invoices_InvoiceId1",
                table: "products",
                column: "InvoiceId1",
                principalTable: "invoices",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_products_invoices_InvoiceId1",
                table: "products");

            migrationBuilder.DropIndex(
                name: "IX_products_InvoiceId1",
                table: "products");

            migrationBuilder.DropColumn(
                name: "InvoiceId1",
                table: "products");
        }
    }
}
