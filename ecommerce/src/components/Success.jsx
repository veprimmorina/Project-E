import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import NavBari from './NavBari';
import Footer from './Footer';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Success() {
 
  setTimeout(function() {
    window.location.href='http://localhost:3000/';
  }, 5000);

  const {email} = useParams();
  
  return (
    <>
    <div>
      <div className='' style={{height: "900px"}}>
      <p className="h1 fw-bold mb-0 text-center ">Success</p>
        <MDBContainer className="mt-5 ">
      
        <MDBCard>
          <MDBRow className='g-0 '>
  
            <MDBCol md='6 '>
              <MDBCardImage src='https://www.loudcr.com/wp-content/uploads/2017/07/ecommerce-post-1024x1024.png' alt="login form" className='rounded-start w-100 h-100'/>
            </MDBCol>
  
            <MDBCol md='6'>
              <MDBCardBody className='d-flex flex-column'>
  
                <div className='d-flex flex-row mt-2'>
                  
                 
                </div>
  
                <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Successfully Order</h5>
   
   <p>We Confirm your succesfully order. Now you will get a confirmation email in {email}. Thank you for choosing and beleving in us!</p>
                  
                 <h4 className='text-danger'></h4>
                
               
                <p className=" pb-lg-2 " style={{color: '#393f81'}}> <a href="#!" style={{color: '#393f81'}} className='pt-5'></a></p>
  
                <div className='d-flex flex-row justify-content-start'>
                  <a href="#!" className="small text-muted me-1">Thank you .</a>
                  <a href="#!" className="small text-muted">Market Nugget</a>
                </div>
  
              </MDBCardBody>
            </MDBCol>
  
          </MDBRow>
        </MDBCard>
  
      </MDBContainer>
      </div>
      </div>
      </> 
  )
}

export default Success