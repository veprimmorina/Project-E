import React, { useState } from 'react'
import Footer from './Footer'
import Products from './Products'
import Productss from './Productss'
import Slider from './Slider'
import Card from 'react-bootstrap/Card';
import ShoppingCart from './ShoppingCart'
import { Navbar } from 'react-bootstrap'
import Amazon from './amazon'
import Cart from './cart'
import Banners from './Banners'
import axios from 'axios'

function HomePage() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  function getG(){
    return axios.get("https://localhost:7103/api/Customers").then(response=>{
      console.log(response.data)
    });
  }
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
   <Navbar />
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
    <button onClick={()=>getG()}>kliko</button>
   </div>
   <Footer />
   
   </>
  )
}

export default HomePage