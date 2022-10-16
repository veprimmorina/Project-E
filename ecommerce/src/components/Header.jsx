import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Header() {
    const [data,setData]=useState(null);
    function getData(val){
        setData(val.target.value)
    }
    function getProducts(){
        alert(data)
        localStorage.setItem(10,data)
    }
    return (
        <Navbar expand="lg"  className='header'>
          <Container>
            <Navbar.Brand href="#home"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Nugget_Markets_logo.svg/2560px-Nugget_Markets_logo.svg.png' width="75" height="50" className='d-inline-block align-top'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
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
      );
}

export default Header