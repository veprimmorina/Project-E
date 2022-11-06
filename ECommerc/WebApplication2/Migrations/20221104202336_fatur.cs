using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication2.Migrations
{
    public partial class fatur : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FaturaInvoiceId",
                table: "products",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "invoice",
                columns: table => new
                {
                    InvoiceId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_invoice", x => x.InvoiceId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_products_FaturaInvoiceId",
                table: "products",
                column: "FaturaInvoiceId");

            migrationBuilder.AddForeignKey(
                name: "FK_products_invoice_FaturaInvoiceId",
                table: "products",
                column: "FaturaInvoiceId",
                principalTable: "invoice",
                principalColumn: "InvoiceId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_products_invoice_FaturaInvoiceId",
                table: "products");

            migrationBuilder.DropTable(
                name: "invoice");

            migrationBuilder.DropIndex(
                name: "IX_products_FaturaInvoiceId",
                table: "products");

            migrationBuilder.DropColumn(
                name: "FaturaInvoiceId",
                table: "products");
        }
    }
}
