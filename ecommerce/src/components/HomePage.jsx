import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Products from './Products'
import Productss from './Productss'
import Slider from './Slider'
import Card from 'react-bootstrap/Card';
import ShoppingCart from './ShoppingCart'
import { Button, Navbar } from 'react-bootstrap'
import Amazon from './amazon'
import Cart from './cart'
import Banners from './Banners'
import axios from 'axios'
import TopProducts from './TopProducts'
import AmazonTopProducts from './amazonTopProducts'
import { Box } from 'react-bootstrap-icons'
import { Modal } from 'react-bootstrap'
import Header from './Header'
function HomePage() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [topProducts,setTopProducts] = useState([])
  const [showM, setShowM] = useState(false);

  const handleClose = () => setShowM(false);
  const handleShow = () => setShowM(true);
  
 
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <>
   <Header />
   <Slider />
   <div className='row' style={{backgroundColor: "rgb(238, 238, 238)"}}>
    <div className='col'>
   <Amazon handleClick={handleClick} />
   </div>
   <div className='col mt-5'>
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
    </div>
   </div>
   <div>
    <Banners />
   </div>
   <h2 className='text-center'>Top Products</h2>
   <div className='row bg-dark '>
    <div className='col'>
    <AmazonTopProducts handleClick={handleClick} />
   </div>
   </div>
   <Footer />
   </>
  )
}

export default HomePage