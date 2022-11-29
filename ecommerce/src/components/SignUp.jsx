import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
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
import { Button } from 'react-bootstrap';

//import  '../Css/SignUp.css'

function SignUp() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [phone, setPhone] = useState();
    const [code, setCode] = useState();
    const [userCode, setUserCode] = useState();
    const [signUpForm, setSignUpForm] = useState(true);
    const [user, setUser] = useState();
    const [validUser, setValidUser]=useState();
    const [error, setError] = useState();

    
    function getEmail(val){
        setEmail(val.target.value)
    }
    
    function getPassword(val){
        setPassword(val.target.value)
    }
    function getName(val){
        setName(val.target.value)
    }
    function getSurname(val){
        setSurname(val.target.value)
    }
    function getPhone(val){
        setPhone(val.target.value)
    }
    function sendCode(){
        //setCode(Math.random() * (99999 - 11111) + 11111);
            setSignUpForm(false)
            axios.get('https://localhost:7103/api/Customers/send/confirm/'+email+"/"+password+"/"+name+"/"+surname+"/"+phone+"/"+code).then(response=>{
            console.log(response.data)
            })
        
           
    }
    
    function getCode(val){
       setUserCode(val.target.value);
    }
    function validate(){
        alert(userCode)
        user.map(us=>{
            var uc=us.Code;
            alert(uc)
            if(userCode==uc){
                window.location.href='http://localhost:3000/';
            }else{
                alert('pasakt')
            }
        })
        
    }
  return (
    <>
    <div>
      <div className='' style={{height: "900px"}}>
      <p className="h1 fw-bold mb-0 text-center ">Sign up</p>
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
  
                <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign up with your account</h5>
  
                  <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={getEmail}/>
                  <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={getPassword}/>
                 <h4 className='text-danger'>{error}</h4>
                <Button variant='dark'>Sign up</Button>
               
                <p className=" pb-lg-2 " style={{color: '#393f81'}}>Alredy have an account?  <a href="#!" style={{color: '#393f81'}} className='pt-5'>Login here</a></p>
  
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

export default SignUp