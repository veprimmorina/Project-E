import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import InvoiceDetails from './InvoiceDetails';


function InvoiceIdTable() {

    const {id} = useParams();
    const [invoice,setInvoice] = useState("");
    const [invoiceArray, setInvoiceArray] = useState([]);
    useEffect(()=>{
        axios.get("https://localhost:7103/api/Invoices/invoice/"+id).then(response=>{
            setInvoice(response.data)
            setInvoiceArray((response.data.productsList).split(";"))
        })
    },[])
    
    
  return (
    <>
    <div className='d-flex invoice invoice-details container'>
      <div className='invoice-details mt-5'>
          <div className='d-flex justify-content-between'>
              <img src='https://dojiw2m9tvv09.cloudfront.net/13191/brand/nugget-logo.png' />
              <div className='mt-5'>
                <b>Nugget Market</b>
                <p>771 Pleasant Grove Blvd </p>
                <p> Roseville, CA 95678, </p>
                <p>United States</p>
                <p>+345 255 56 5458</p>
              </div>
              
          </div>
          <div className='d-flex justify-content-between pb-5'>
            <div className='d-flex mt-4'>
            <b className='invoice-title'>Invoice code: </b><p>{invoice.invoiceId}</p>
            <b className='ml-3 invoice-title'>Time: </b><p>{invoice.time}</p>
            <b className='ml-3 invoice-title'>Date: </b><p>{invoice.date}</p>
            </div>
            
            <div className='border border-dark rounded'>
              <p>Name: {invoice.customerName}</p>
              <p>Email: {invoice.customerEmail}</p>
            </div>
          </div>
          
          <div className='invoice-border'>
          {
            
            invoiceArray.map((invoice) => (
                <InvoiceDetails key={invoice} invoice={invoice} />
              ))
          }
          </div>
        <div className='text-center'>
          <div>
            <b>Thank you for choosing Us! </b>
          </div>
          <b>Nugget Market</b>
        </div>     
      </div>
      
      <div className=''>
        <p></p>
      </div>
    </div>
    
   </>
  )
}

export default InvoiceIdTable