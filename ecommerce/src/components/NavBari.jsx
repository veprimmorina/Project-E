import React from 'react'
import { useState } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function NavBari() {
  const [consEmail, setConsEmail]=useState(localStorage.getItem(8));
  function logOut(){
    localStorage.setItem(8,"");
    window.location.href="http://localhost:3000";
  }
  function logIn(){
    window.location.href="http://localhost:3000/log/in";
  }
  return (
    <Navbar expand="lg"  className='header'>
          <Container>
            <Navbar.Brand href="#home"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Nugget_Markets_logo.svg/2560px-Nugget_Markets_logo.svg.png' width="75" height="50" className='d-inline-block align-top'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                
                <Nav.Link>Home</Nav.Link>
                <Link to={"/about/us"} style={{textDecoration: "none", color: "black"}} className='mt-2'>About us</Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Products" id="basic-nav-dropdown">
                  
                  <NavDropdown.Item>Vegan</NavDropdown.Item>
                  
                  <NavDropdown.Item>
                    Kids Products
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Other Products</NavDropdown.Item>
                  <NavDropdown.Divider />
                 
                </NavDropdown>
              </Nav>
              <Form className='d-flex'>
                 <Form.Control type='search' placeholder='Search Product' >

                 </Form.Control>
                 <Button variant='primary'><i className='bi bi-search'></i></Button>
              </Form>
              { consEmail!="" ? <Button className='ml-5 ' variant='danger' onClick={()=> logOut()}><i className=" bi bi-box-arrow-left mr-1"></i>Log Out</Button>: <Button className='ml-5' onClick={()=> logIn()}><i className="bi bi-box-arrow-in-right mr-1"></i>Log in</Button>}
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}

export default NavBari