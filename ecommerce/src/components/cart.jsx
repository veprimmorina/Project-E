import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";


const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [product,setProduct]=useState([]);
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  
  useEffect(() => {
    handlePrice();
  });

  function getProducts (){
    cart.map((item)=> setProduct([product, {id: item.id, amount: item.amount}]))
  }

  return (
    <article>
        <>
        <Card className='shadow-lg'>
    <Card.Title id="card-title" className='d-flex justify-content-between rounded' style={{background: "#e15a26"}}>
    <i className="ml-5 mr-5 mt-2 bi bi-cart4 bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong "  style={{width: "35px", height: "35px"}}></i>
    <p className='text-white mt-3 lead'>Shopping cart</p>
    <p className='text-white mt-3 lead'></p>
    </Card.Title>
    <Card.Text id="cart-body" className="text-center"style={{height: "600px", overflow: "auto"}}>
    <table width="100%">
      <tr>
        <th></th>
        <th>Product</th>
        <th>Product name</th>
        <th>Product price</th>
        <th>Quantity</th>
        <th>Total price</th>
      </tr>
      {cart.map((item) => (
        <tr className='border shadow-sm' id={item.id}>
          <td className="clickable" onClick={() => handleRemove(item.id)}>x</td>
        <td><img src={item.img} className='img-fluid' alt='product' width="45px" heigth="40px"/> </td>
       <td>{item.title}</td>
       <td>{item.price}$</td>
       <td> <span className='quantity'>
                <button ><i class="bi bi-dash-circle " onClick={() => handleChange(item, -1)} ></i></button>
               <input id="quantity" min="1" type="number" max="1" value={item.amount} className='text-center' />
               <button><i class="bi bi-plus-circle" onClick={() => handleChange(item, 1)}></i></button>
               </span></td>
      <td>{item.price*item.amount}$</td>
       </tr>
       ))}
      </table>
      <span className="">Total price: {price} $</span>
      <button className='btn btn-primary mt-2' onClick={()=>getProducts()}>Order</button>
   
    </Card.Text>
   </Card>
        </>
    </article>
  );
};

export default Cart;
