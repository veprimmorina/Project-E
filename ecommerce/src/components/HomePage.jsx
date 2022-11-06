import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Products from './Products'
import Productss from './Productss'
import Slider from './Slider'
import Card from 'react-bootstrap/Card';
import ShoppingCart from './ShoppingCart'
import { Button, Carousel, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Amazon from './amazon'
import Cart from './cart'
import Banners from './Banners'
import axios from 'axios'
import TopProducts from './TopProducts'
import AmazonTopProducts from './amazonTopProducts'
import AmazonVeganProducts from './amazonVeganProducts'
import { Box } from 'react-bootstrap-icons'
import { Modal } from 'react-bootstrap'
import Header from './Header'
import { Link } from 'react-router-dom'
function HomePage() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [topProducts,setTopProducts] = useState([])
  const [showM, setShowM] = useState(false);
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [pCategory, setCategory] = useState("");

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

  function gjenero(){
    return axios.post("https://localhost:7103/api/Products/generate/pdf").then(response=>{
      console.log(response.data)
    })
  }
  function getData(val){
    setData(val.target.value);
  }
  function getProducts(){
   setSearch(data);
  }

  function veganProducts(){
     setCategory("Vegane")
  }
  function kidsProducts(){
    setCategory("Per Femije")
  }
  return (
    <>
  <Navbar expand="lg"  className='header'>
          <Container>
            <Navbar.Brand href="#home"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Nugget_Markets_logo.svg/2560px-Nugget_Markets_logo.svg.png' width="75" height="50" className='d-inline-block align-top'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                
                <Nav.Link>Home</Nav.Link>
                <Link to={"/about/us"}>About us</Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Products" id="basic-nav-dropdown">
                  <Link to={'/vegan/products'}>
                  <NavDropdown.Item onClick={()=> veganProducts()}>Vegan</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Item onClick={()=> kidsProducts()}>
                    Kids Products
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className='d-flex'>
                 <Form.Control type='search' placeholder='Search Product' onChange={getData}>

                 </Form.Control>
                 <Button variant='primary' onClick={()=>getProducts()}><i className='bi bi-search'></i></Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
   <Slider />
   <div className='row' style={{backgroundColor: "rgb(238, 238, 238)"}}>
    <div className='col'>
   <Amazon handleClick={handleClick} searchi={search} category={pCategory}/>
   </div>
   <div className='col mt-5'>
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
       <Carousel className='mt-4'>
        <Carousel.Item>
          <img src='https://marketplace.canva.com/EAFLWg7g6TA/1/0/1131w/canva-blue-modern-fashion-sale-poster-pCRtyeCl2eY.jpg'/>
        </Carousel.Item>
        <Carousel.Item>
        <img src='https://edit.org/photos/img/blog/tvs-sales-promotion-template-free-edit.jpg-840.jpg'/>
        </Carousel.Item>
       </Carousel>
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