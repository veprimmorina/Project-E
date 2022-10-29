import React, { useState, useEffect } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import axios from "axios";
import $ from 'jquery'
import { Link } from "react-router-dom";


const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [product,setProduct]=useState(4);
  const [showM, setShowM] = useState(false);
  const [errorMessage, setErrorMessage]=useState('');
  const [email, setEmail]=useState();
  const [name, setName]= useState();
  const [surname, setSurname]= useState();
  const [address, setAdress]= useState();
  const handleClose = () => setShowM(false);
  const handleShow = () => setShowM(true);
  
  const [data,setData]=useState([]);

  function validateQuantity(item,amount,quantity){
    if(amount>quantity){
      setErrorMessage('Maxium of order for '+item.name+' is '+quantity)
      handleChange(item, -1)
    }else{
      setErrorMessage('')
    }
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
    cart.map((item) => (ans += item.amount * item.price));
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
    axios.post('https://localhost:7103/api/Products/send/'+email+"/"+product+"/"+name+"/"+surname+"/"+address+"/"+price.toFixed(2), cart).then(response=>{
      console.log(response.data);
      console.log(cart)
    }) 
   
    /*
    $.ajax({
      url: "http://localhost:9000/api/reservation/regjistro/produktin",
      type: "post",
    contentType: "application/json; charset=utf-8",
    //dataType: "json",
    data: JSON.stringify(cart),
      //data: JSON.stringify(user),
      success: function (data) {
          console.log("success")
      },
      error: function (request, status, error) {
          console.log(error);
          console.log(status);
      },
  });
  */
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

  return (
    
    <article>
        <>
        
        <Card className='shadow-lg mt-lg-3'>
    <Card.Title id="card-title" className='d-flex justify-content-between rounded' style={{background: "#e15a26"}}>
    <i className="ml-5 mr-5 mt-2 bi bi-cart4 bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong "  style={{width: "35px", height: "35px"}}></i>
    <p className='text-white mt-3 lead'>Shopping cart</p>
    <p className='text-white mt-3 lead'></p>
    </Card.Title>
    <Card.Text id="cart-body" className="text-center"style={{height: "600px", overflow: "auto"}}>
    <table width="100%">
     {
     price!=0 ?
     <tr>
        <th></th>
        <th>Product</th>
        <th>Product name</th>
        <th>Product price</th>
        <th>Quantity</th>
        <th>Total price</th>
      </tr>
      : <p>0 Products on cart</p>
      }
      {cart.map((item) => (
        <tr className='border shadow-sm' id={item.id}>
          <td className="clickable" onClick={() => handleRemove(item.id)}>x</td>
        <td><img src={item.photoPath} className='img-fluid' alt='product' width="45px" heigth="40px"/> </td>
       <td>{item.name}</td>
       <td>{item.price+" €"}</td>
       <td> <span className='quantity'>
                <button ><i class="bi bi-dash-circle " onClick={() => {handleChange(item, -1); setError();}} ></i></button>
               <input id="quantity" min="1" type="number" max="1" value={item.amount} className='text-center'  />
               <button><i class="bi bi-plus-circle" onClick={() => {handleChange(item, 1); validateQuantity(item,item.amount,item.quantity)}}></i></button>
               </span></td>
      <td>{(item.price*item.amount).toFixed(2)}€</td>
       </tr>
             

       ))}
      </table>
      <p className="text-center text-danger h5 mt-3 mb-3">{errorMessage}</p>
         {price>0 ?<> <span className="">Total price: {price.toFixed(2)} €</span> <Button variant="primary" onClick={handleShow}> <h5>Order</h5>  </Button> </>: ""}
       
   
    </Card.Text>
   </Card>
  
        <Modal show={showM} onHide={handleClose} className='text-center'>
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
            <Form.Control type="email" onChange={getEmail}></Form.Control>
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
            <Link to='/success' >
            <Button variant="primary" onClick={()=>getProducts()}>
              Save Changes
            </Button>
            </Link>
          </Modal.Footer>
        </Modal>
        </>
    </article>
  );
};

export default Cart;
