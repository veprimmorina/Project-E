import { list } from 'postcss';
import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import Products from './Products';
import {useCart} from "react-use-cart"
const ShoppingCart = ({item})=> {
  const [productQuantity, setQuantity]=useState(1);
 

  return (
    <>
   <Card className='shadow-lg'>
    <Card.Title id="card-title" className='d-flex justify-content-between rounded' style={{background: "#e15a26"}}>
    <i className="ml-5 mr-5 mt-2 bi bi-cart4 bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong "  style={{width: "35px", height: "35px"}}></i>
    <p className='text-white mt-3 lead'>Shopping cart</p>
    <p className='text-white mt-3 lead'>0 product on cart</p>
    </Card.Title>
    <Card.Text id="cart-body" className="text-center"style={{height: "600px", overflow: "auto"}}>
      
    </Card.Text>
   </Card>
   </>
  )
}

export default ShoppingCart