import React from 'react'
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
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { error } from 'jquery';

function Payment() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [cardHolderName, setCardHolderName] = useState();
    const [cardNumber, setCardNumber] = useState ();
    const [CVC, setCVC] = useState ("");
    const [expiration,setExpiration] = useState("");
    const [confirmationCode, setConfirmationCode] = useState();
    const [registerForm, setRegisterForm] = useState(true);
    const [confirmationForm, setConfirmationForm] = useState(false);
    const [userCode, setUserCode] = useState();
    const [successForm, setSuccessForm] = useState(false);
    const [verifyButton, setVerifyButton] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const date=new Date();
    var month=date.getMonth()+1;
    var year=date.getFullYear();
  
    const register = () => {
      if(cardNumber!="4242424242424242"){
        setErrorMessage('Invalid Card Number!')
      }else if(cardHolderName==""){
        setErrorMessage('Card holder name can not be blank!')
      }else if(expiration==""||parseInt(expiration.substring(3,7))<parseInt(year)||parseInt(expiration.substring(0,2))<parseInt(month)||parseInt(expiration.substring(0,2))>12){
        setErrorMessage('Expiration card!')
      }else if(CVC.length<3){
        setErrorMessage('Your CVC should be exactly 3 digits!')
      }else{
        setErrorMessage('')
      const randomCode = 111111 + Math.random() * (999999-111111);
      setConfirmationCode(parseInt(randomCode));
      axios.get('https://localhost:7103/verify/'+parseInt(randomCode)+"/"+email).then(response=>{
        console.log(response.data);
      })
     setRegisterForm(false);
     setConfirmationForm(true)
    }
    }

    const verifyCode = ()=> {
      if(userCode==confirmationCode){
        var AddStripeCustomer = {
          email: email,
          name: name,
          creditCard: {
            name: cardHolderName,
            cardNumber: cardNumber,
            expirationYear: expiration.substring(3,7),
            expirationMonth: expiration.substring(0,2),
            cvc: CVC
        }
      }
        axios.post('https://localhost:7103/api/Stripe/customer/add',AddStripeCustomer).then(response=>{
          console.log(response.data);
        }).catch(error=>{
          setErrorMessage('Bad Credentials!');
        })
       setSuccessForm(true);
       setConfirmationCode(false);
       setVerifyButton(false);
       setErrorMessage('')
      }else{
        alert('pasakt')
      }
    }
    return (
        <>
        <div>
          <div className='' style={{height: "900px"}}>
          <p className="h1 fw-bold mb-0 text-center ">Create Stripe Account</p>
            <MDBContainer className="mt-5 shadow">
          
            <MDBCard>
              <MDBRow className='g-0 '>
      
                <MDBCol md='6 '>
                  <MDBCardImage src='https://www.foxnetsoft.com/images/thumbs/0006077_stripe-payment-element.png' alt="login form" className='rounded-start w-100 h-100'/>
                </MDBCol>
      
                <MDBCol md='6'>
                  <MDBCardBody className='d-flex flex-column'>
      
                    <div className='d-flex flex-row mt-2'>
                    </div>
                          <div className="row justify-content-center mb-4 radio-group">
                        <div className="col-sm-3 col-5">
                            <div className='radio selected mx-auto' data-value="dk"> <img className="fit-image" src="https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-1992.png" width="105px" height="55px"/> </div>
                        </div>
                        <div className="col-sm-3 col-5">
                            <div className='radio mx-auto' data-value="visa"> <img className="fit-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" width="105px" height="55px"/> </div>
                        </div>
                        
                        <div className="col-sm-3 col-5">
                            <div className='radio mx-auto' data-value="master"> <img className="fit-image" src="https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2018/04/10121846/am_amex_06.jpg" width="80px" height="45px"/> </div>
                        </div>
                        <div className="col-sm-3 col-5">
                            <div className='radio mx-auto' data-value="paypal"> <img className="fit-image" src="https://1000logos.net/wp-content/uploads/2021/04/Paypal-logo.png" width="105px" height="55px"/> </div>
                        </div> 
                    </div>
                    {  registerForm && <>
                    <div className='d-flex  justify-content-between'>
                      <MDBInput wrapperClass='mb-4' label='Name' id='formControlLg' type='text' size="lg" onChange={(e) => setName(e.target.value)}/>
                      <MDBInput wrapperClass='mb-4' label='Email' id='formControlLg' type='email' size="lg" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                      <MDBInput wrapperClass='mb-4' label='Card Number' data-value="visa" id='formControlLg' onChange={(e)=> setCardNumber(e.target.value)} type='text' size="lg"/>
                      <div className='d-flex'>
                      <MDBInput wrapperClass='mb-4' label='Card Holder Name' id='formControlLg' onChange={(e)=> setCardHolderName(e.target.value)} type='text' size="lg"/>
                      <MDBInput wrapperClass='mb-4' className='mr-5' label='Expiration' placeholder='MM/YY' id='formControlLg' type='email' size="lg" onChange={(e)=> setExpiration(e.target.value)}/>
                      <MDBInput wrapperClass='mb-4' className='mr-5' label='CVC' id='formControlLg' placeholder='CVC' type='email' size="lg" onChange={(e)=> setCVC(e.target.value)}/>
                      </div>
                      <p className='text-danger'>{errorMessage}</p>  
                     <h4 className='text-danger'></h4>
                    <Button variant='dark' onClick={()=> register()}>Register</Button>      
                    <div className='d-flex flex-row text-center'>
                      <a className="small text-muted me-1 text-center">Terms of use.</a>
                      <a className="small text-muted">Privacy policy</a>
                    </div>
                   </> }
                   {confirmationForm && 
                   <>
                    {  verifyButton && <>
                        <p className='text-center'>Write code send to {email}</p> 
                        <MDBInput wrapperClass='mb-4' label='Confirmation Code' id='formControlLg' type='text' size="lg" onChange={(e) => setUserCode(e.target.value)}/>
                        <Button variant='dark' onClick={()=> verifyCode()}>Verify Code</Button> 
                        <p className='text-danger'>{errorMessage}</p> </>}
                   </>}
                   {
                    successForm&& 
                    <p>You have succesfully created an account. Now check again {email} to get your ID.</p>
                   }
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

export default Payment