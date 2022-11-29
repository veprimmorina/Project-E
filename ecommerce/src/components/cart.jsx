import React, { useState, useEffect } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import axios from "axios";
import $ from 'jquery'
import { Link } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";


const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [stripeId, setStripeId] = useState();
  const [product,setProduct]=useState(4);
  const [showM, setShowM] = useState(false);
  const [errorMessage, setErrorMessage]=useState('');
  const [paymentError, setPaymentError]=useState('');
  const [email, setEmail]=useState();
  const [name, setName]= useState();
  const [surname, setSurname]= useState();
  const [address, setAdress]= useState();
  const handleClose = () => setShowM(false);
  const handleShow = () => setShowM(true);
  const [showOrder, setShowOrder] = useState(true);
  const [showPayment, setShowPayment] = useState(false);
  
  const [data,setData]=useState([]);

  function validateQuantity(item,amount,quantity){
    if(amount>quantity){
      setErrorMessage('Maxium of order for '+item.name+' is '+quantity)
      handleChange(item, -1)
    }else{
      setErrorMessage('')
    }
  }
  function back(){
    setShowOrder(true);
    setShowPayment(false);
  }
  function setError(){
    setErrorMessage('')
  }
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
    setErrorMessage('')
  };
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += (item.price -(item.discount*item.price/100)).toFixed(2)* item.amount).toFixed(2));
    //((item.price-(item.discount*item.price/100).toFixed(1))*item.amount).toFixed(2)
    setPrice(ans);
  };
 

  function seeData(){
    console.log(data)
  }
  
  useEffect(() => {
    handlePrice();
    
  });

  function getProducts (){
   /* axios.post('https://localhost:7103/api/Products/get/cart',cart).then(response=>{
      console.log('success');
    })  
    */
   setShowOrder(false)
   setShowPayment(true)
   // axios.post('https://localhost:7103/api/Products/send/'+localStorage.getItem(8)+"/"+product+"/"+name+"/"+surname+"/"+address+"/"+price.toFixed(2), cart).then(response=>{
     // console.log(response.data);
      //console.log(cart)
    //}) 
   
  }
  function getName(val){
    setName(val.target.value)
  }
  function getSurname(val){
    setSurname(val.target.value)
  }
  function getAdress(val){
    setAdress(val.target.value)
  }

  function getEmail(val){
    setEmail(val.target.value)
  }
  const orderAndPay = () => {
    var AddStripePayment = {
      customerId: stripeId,
      receiptEmail: email,
      description: "Payment for order",
      currency: "EUR",
      amount: (parseInt(price)+1)*100,
    } 
    
    axios.post('https://localhost:7103/api/Stripe/payment/add',AddStripePayment).then(response=>{
        if(response.data!=""){
          axios.post('https://localhost:7103/api/Products/send/'+email+"/"+product+"/"+name+"/"+surname+"/"+address+"/"+price.toFixed(2), cart).then(response=>{
      console.log(response.data);
      console.log(cart)
    })
          window.location.href="http://localhost:3000/success/"+email;
        }
        console.log(response.data)
      })
      .catch(error=>{
         setPaymentError('Invalid credentials! Please check again')
      })
  }
  return (
    
    <article>
        <>
        
        <Card className='shadow-lg mt-lg-3'>
    <Card.Title id="card-title" className='d-flex justify-content-between rounded' style={{background: "#e15a26"}}>
    <i className="ml-5 mr-5 mt-2 bi bi-cart4 bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong "  style={{width: "35px", height: "35px"}}></i>
    <p className='text-white mt-3 lead'>Shopping cart</p>
    <p className='text-white mt-3 lead'></p>
    </Card.Title>
    <div className="text-center card-text" style={{height: "600px", overflow: "auto"}}>
    <p className="text-center text-danger h5 mt-3 mb-3">{""+errorMessage}</p> 
    <table width="100%">
     {
     price!=0 ?
     <tbody>
     <tr>
        <th></th>
        <th>Product</th>
        <th>Product name</th>
        <th>Product price</th>
        <th>Quantity</th>
        <th>Total price</th>
      </tr>
      </tbody>
      : 
      <tbody>
      <tr>
      <td>0 Products on cart</td>
      </tr>
      </tbody>
      }
      {cart.map((item) => (
        <tbody>
        <tr key={item.id} className='border shadow-sm' id={item.id}><td className="clickable " onClick={() => handleRemove(item.id)}><b>x</b></td>
        <td><img src={item.photoPath} className='img-fluid' alt='product' width="45px" heigth="40px"/> </td>
       <td>{item.name}</td>
       <td>{item.discount!=0 ? (item.price-(item.discount*item.price/100)).toFixed(2)+" €": item.price}</td>
      
       <td> <span className='quantity'>
                <button ><i className="bi bi-dash-circle " onClick={() => {handleChange(item, -1); setError();}} ></i></button>
               <input id="quantity" min="1" type="number" max="1" value={item.amount} className='text-center'  />
               <button><i className="bi bi-plus-circle" onClick={() => {handleChange(item, 1); validateQuantity(item,item.amount,item.quantity)}}></i></button>
               </span></td>
      <td>{((item.price-(item.discount*item.price/100))*item.amount).toFixed(2)}€</td>
       </tr>
       </tbody>

       ))}
      </table>
      <table>
        <tbody>
          <tr>
            
         </tr>
         {price>0 ?<> <tr><td className="invisible">-------------------------------------------</td><td className="">Total price: {price.toFixed(2)} €</td><td><Button variant="primary" onClick={handleShow}> <h5>Order</h5>  </Button></td></tr> </>: <td></td>}
         </tbody>
      </table>
   
    </div>
   </Card>
  
        <Modal show={showM} onHide={handleClose} className='text-center mt-5'>
         
        { showOrder&& <> 
        <Modal.Header closeButton>
            <Modal.Title className='text-center'>Order Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
           <Form>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" onChange={getName}></Form.Control>
            </Form.Group>
            <Form.Label>Surname:</Form.Label>
            <Form.Control type="text"onChange={getSurname}></Form.Control>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" onChange={getEmail} ></Form.Control>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"></Form.Control>
            <Form.Label>Adress:</Form.Label>
            <Form.Control type="text" onChange={getAdress}></Form.Control>
           </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
       
            <Button variant="primary" onClick={()=>getProducts()}>
              Procces and pay
            </Button>
           
          </Modal.Footer></>} 
          {
            showPayment && 
            <>
             <Modal.Header className="stripe">
            <Modal.Title className='text-center invisible'>Order Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
           <Form>
            <Form.Group>
              <Form.Label>Stripe Id:</Form.Label>
              <Form.Control type="text" onChange={(e)=> setStripeId(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" onChange={getEmail} disabled value={email}></Form.Control>
            <MDBInput wrapperClass='mb-4' className='mr-5 mt-4' label='Card Number'  id='formControlLg' type='email' size="sm"/>
            <div className='d-flex'>
              <MDBInput wrapperClass='mb-4' className='mr-5' label='Expiration' placeholder='MM/YY' id='formControlLg' type='email' size="sm"/>
              <MDBInput wrapperClass='mb-4' className='mr-5' label='CVC' id='formControlLg' placeholder='CVC' type='email' size="sm" />
              <MDBInput wrapperClass='mb-4' className='mr-5' label='Amount' id='formControlLg' type='email' size="sm" value={parseInt(price)+1+".00 €"} disabled/>
            </div>
            <p className=" pb-lg-2 " style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}} className='pt-5'>Register here</a></p>
           </Form>
           <p className="text-danger">{paymentError}</p>
          </Modal.Body>
          <Modal.Footer className="payment">
            <Button variant="secondary" onClick={()=>back()}>
            <i className="bi bi-arrow-left"></i>
            </Button>
       
            <Button variant="primary" onClick={()=>orderAndPay()}>
              Order
            </Button>
           
          </Modal.Footer>
            </>
          }
        </Modal>
        </>
    </article>
  );
};

export default Cart;
