import React from 'react'
import Card from 'react-bootstrap/Card';

function ShoppingCart() {
  return (
   <Card className=''>
    <Card.Title id="card-title" className='d-flex justify-content-between rounded'>
    <i className="ml-5 mr-5 mt-2 bi bi-cart4 bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong "  style={{width: "35px", height: "35px"}}></i>
    <p className='text-white mt-3 lead'>Shopping cart</p>
    <p className='text-white mt-3 lead'>0 product on cart</p>
    </Card.Title>
    <Card.Text id="cart-body">
    </Card.Text>
   </Card>
  )
}

export default ShoppingCart