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
import { Box } from 'react-bootstrap-icons'
import { Modal } from 'react-bootstrap'
import Header from './Header'
import { Link } from 'react-router-dom'
import AmazonDiscountProducts from './amazonDiscountProducts'
import { MDBSwitch } from 'mdb-react-ui-kit'
function HomePage() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [topProducts,setTopProducts] = useState([])
  const [showM, setShowM] = useState(false);
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [pCategory, setCategory] = useState("");
  const [consEmail, setConsEmail]=useState(localStorage.getItem(8));
  const current = new Date();

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
    setCategory("Kids")
  }
  function logOut(){
    localStorage.setItem(8,"");
    window.location.href="http://localhost:3000";
  }
  function logIn(){
    window.location.href="http://localhost:3000/log/in";
  }
 
  return (
    <>
  <Navbar expand="lg"  className='header'>
          <Container>
            <Navbar.Brand href="#home"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Nugget_Markets_logo.svg/2560px-Nugget_Markets_logo.svg.png' width="75" height="50" className='d-inline-block align-top'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                
                <Link to={''} style={{textDecoration: "none", color: "white", fontSize: "", fontFamily: "fantasy"}} className='costum-hover mt-2'>Home</Link>
                
                <Nav.Link href="#link" style={{textDecoration: "none", color: "white", fontSize: "", fontFamily: "fantasy"}}>Contact us</Nav.Link>
                <NavDropdown title="Products" id="basic-nav-dropdown" style={{textDecoration: "none", color: "white", fontSize: "",fontFamily: "fantasy"}}>
                 
                  <NavDropdown.Item onClick={()=> veganProducts()}>Vegan</NavDropdown.Item>
                  
                  <NavDropdown.Item onClick={()=> kidsProducts()}>
                    Kids Products
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Other Products</NavDropdown.Item>
                  <NavDropdown.Divider />
                 
                </NavDropdown>
                <Link to={"/about/us"} style={{textDecoration: "none", color: "white", fontSize: "",fontFamily: "fantasy", marginRight: "20px", marginLeft: "11px"}} className='mt-2 '>About us</Link>
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
   <div className='row content' style={{backgroundColor: "rgb(238, 238, 238)"}} >
    <div className='col-lg '>
    
   <Amazon handleClick={handleClick} searchi={search} category={pCategory}/>
   </div>
   <div className='col-md mt-5 '>
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
       <Carousel className='mt-4 d-none d-lg-flex'>
        <Carousel.Item>
          <img src='https://marketplace.canva.com/EAFLWg7g6TA/1/0/1131w/canva-blue-modern-fashion-sale-poster-pCRtyeCl2eY.jpg'/>
        </Carousel.Item>
        <Carousel.Item>
        <img src='https://edit.org/photos/img/blog/tvs-sales-promotion-template-free-edit.jpg-840.jpg'/>
        </Carousel.Item>
       </Carousel>
    </div>
   </div>
   <div className='mt-5 '>
    <Banners />
   </div>
   <h2 className='text-center heading-title'>Top Products</h2>
   <div className='row bg-dark mb-5'>
    <div className='col'>
    <AmazonTopProducts handleClick={handleClick} />
   </div>
   </div>
   <h2 className='text-center'>DIscount Products</h2>
   <div className='row mb-5'>
    <div className='col'>
      <AmazonDiscountProducts handleClick={handleClick} />
   </div>

   </div>
   <Footer />
   
   </>
  )
}

export default HomePage