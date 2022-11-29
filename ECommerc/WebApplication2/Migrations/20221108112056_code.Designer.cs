﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApplication2;

#nullable disable

namespace WebApplication2.Migrations
{
    [DbContext(typeof(ECommerceContext))]
    [Migration("20221108112056_code")]
    partial class code
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("WebApplication2.Models.Contacs", b =>
                {
                    b.Property<int>("contactsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("contactsId"), 1L, 1);

                    b.Property<string>("comment")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("date")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("isChecked")
                        .HasColumnType("bit");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("contactsId");

                    b.ToTable("contacts");
                });

            modelBuilder.Entity("WebApplication2.Models.Customer", b =>
                {
                    b.Property<int>("CustomerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CustomerId"), 1L, 1);

                    b.Property<int>("Code")
                        .HasColumnType("int");

                    b.Property<string>("CustomerAdress")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("CustomerEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("CustomerId1")
                        .HasColumnType("int");

                    b.Property<string>("CustomerName")
                        .IsRequired()
                        .HasColumnType("nvarchar (100)");

                    b.Property<string>("CustomerPassword")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("CustomerPhone")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("CustomerSurname")
                        .IsRequired()
                        .HasColumnType("nvarchar (100)");

                    b.HasKey("CustomerId");

                    b.HasIndex("CustomerId1");

                    b.ToTable("customers");
                });

            modelBuilder.Entity("WebApplication2.Models.Fatura", b =>
                {
                    b.Property<int>("InvoiceId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("InvoiceId"), 1L, 1);

                    b.Property<string>("customerEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("customerName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("date")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("time")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("InvoiceId");

                    b.ToTable("invoice");
                });

            modelBuilder.Entity("WebApplication2.Models.Invoice", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int?>("CustomerId")
                        .IsRequired()
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CustomerId");

                    b.ToTable("invoices");
                });

            modelBuilder.Entity("WebApplication2.Models.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Category")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("FaturaInvoiceId")
                        .HasColumnType("int");

                    b.Property<int?>("InvoiceId")
                        .HasColumnType("int");

                    b.Property<int?>("InvoiceId1")
                        .HasColumnType("int");

                    b.Property<string>("MadeInPhoto")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("PhotoPath")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Price")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.Property<int>("amount")
                        .HasColumnType("int");

                    b.Property<int>("clicked")
                        .HasColumnType("int");

                    b.Property<double>("discount")
                        .HasColumnType("float");

                    b.Property<int>("sold")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("FaturaInvoiceId");

                    b.HasIndex("InvoiceId");

                    b.HasIndex("InvoiceId1");

                    b.ToTable("products");
                });

            modelBuilder.Entity("WebApplication2.Models.Customer", b =>
                {
                    b.HasOne("WebApplication2.Models.Customer", null)
                        .WithMany("Customers")
                        .HasForeignKey("CustomerId1");
                });

            modelBuilder.Entity("WebApplication2.Models.Invoice", b =>
                {
                    b.HasOne("WebApplication2.Models.Customer", "Customer")
                        .WithMany()
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Customer");
                });

            modelBuilder.Entity("WebApplication2.Models.Product", b =>
                {
                    b.HasOne("WebApplication2.Models.Fatura", null)
                        .WithMany("Products")
                        .HasForeignKey("FaturaInvoiceId");

                    b.HasOne("WebApplication2.Models.Invoice", null)
                        .WithMany("Productet")
                        .HasForeignKey("InvoiceId");

                    b.HasOne("WebApplication2.Models.Invoice", null)
                        .WithMany("Products")
                        .HasForeignKey("InvoiceId1");
                });

            modelBuilder.Entity("WebApplication2.Models.Customer", b =>
                {
                    b.Navigation("Customers");
                });

            modelBuilder.Entity("WebApplication2.Models.Fatura", b =>
                {
                    b.Navigation("Products");
                });

            modelBuilder.Entity("WebApplication2.Models.Invoice", b =>
                {
                    b.Navigation("Productet");

                    b.Navigation("Products");
                });
#pragma warning restore 612, 618
        }
    }
}
