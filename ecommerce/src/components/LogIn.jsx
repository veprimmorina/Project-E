import React from 'react'
import { useState } from 'react'
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
function LogIn() {
  
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    function getEmail(val){
        setEmail(val.target.value)
    }
    function getPassword(val){
        setPassword(val.target.value)
    }
    function logIn(){
        if(email=="morinaveprim1@gmail.com" || email=="veprimm1@gmail.com" && password=="veprim123"){
            localStorage.setItem(8,email);
            window.location.href='http://localhost:3000';
            
        }else{
          setError('')
            setError('Username or password is incorrect!');
        }
    }
    return (
    <>
    <div>
      <div className='' style={{height: "900px"}}>
      <p className="h1 fw-bold mb-0 text-center ">Log In</p>
        <MDBContainer className="mt-5 ">
      
        <MDBCard>
          <MDBRow className='g-0 '>
  
            <MDBCol md='6 '>
              <MDBCardImage src='https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg' alt="login form" className='rounded-start w-100 h-100'/>
            </MDBCol>
  
            <MDBCol md='6'>
              <MDBCardBody className='d-flex flex-column'>
  
                <div className='d-flex flex-row mt-2'>
                  
                 
                </div>
  
                <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
  
                  <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={getEmail}/>
                  <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={getPassword}/>
                 <h4 className='text-danger'>{error}</h4>
                <Button variant='dark' onClick={()=> logIn()}>Log in</Button>
               
                <p className=" pb-lg-2 " style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}} className='pt-5'>Register here</a></p>
  
                <div className='d-flex flex-row justify-content-start'>
                  <a href="#!" className="small text-muted me-1">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
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

export default LogIn