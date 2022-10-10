import React from 'react'
import Footer from './Footer'
import Navbar from './NavBar'
import Products from './Products'
import Productss from './Productss'
import Slider from './Slider'
import Card from 'react-bootstrap/Card';
import ShoppingCart from './ShoppingCart'

function HomePage() {
  return (
    <>
   <Navbar />
   <Slider />
   <div className='row' style={{backgroundColor: "rgb(238, 238, 238)"}}>
    <div className='col'>
   <Products />
   <Products />
   </div>
   <div className='col mt-5'>
    <ShoppingCart />
    </div>
   </div>
   <Footer />
   </>
  )
}

export default HomePage