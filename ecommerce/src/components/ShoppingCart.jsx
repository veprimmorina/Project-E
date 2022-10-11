import { list } from 'postcss';
import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import Products from './Products';
import {useCart} from "react-use-cart"
const ShoppingCart = ()=> {
  const [productQuantity, setQuantity]=useState(1);
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
   <Card className='shadow-lg'>
    <Card.Title id="card-title" className='d-flex justify-content-between rounded'>
    <i className="ml-5 mr-5 mt-2 bi bi-cart4 bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong "  style={{width: "35px", height: "35px"}}></i>
    <p className='text-white mt-3 lead'>Shopping cart</p>
    <p className='text-white mt-3 lead'>0 product on cart</p>
    </Card.Title>
    <Card.Text id="cart-body" className="text-center"style={{height: "600px", overflow: "auto"}}>
      <table width="100%">
      <tr>
        <th>Product</th>
        <th>Product name</th>
        <th>Product price</th>
        <th>Product category</th>
        <th>Quantity</th>
        <th>Total price</th>
      </tr>

        <tr className='border shadow-sm'>
        <td><img src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp' className='img-fluid' alt='product' width="45px" heigth="40px"/> </td>
       <td>Laptop</td>
       <td>250$</td>
       <td>Vegan</td>
       <td> <span className='quantity'>
                <button ><i class="bi bi-dash-circle mr-2" ></i></button>
               <input id="quantity" min="1" type="number" max="1" value={productQuantity} className='text-center' />
               <button><i class="bi bi-plus-circle"></i></button>
               </span></td>
      <td>250$</td>
       </tr>
      </table>
      <button className='btn btn-primary mt-2' >Order</button>
    </Card.Text>
   </Card>
  )
}

export default ShoppingCart