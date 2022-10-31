import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {

  
    return (
        <Navbar expand="lg"  className='header' style={{background: "#e5e7eb"}}>
          <Container>
            <Navbar.Brand href="#home"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Nugget_Markets_logo.svg/2560px-Nugget_Markets_logo.svg.png' width="75" height="50" className='d-inline-block align-top'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Products" id="basic-nav-dropdown">
                  <NavDropdown.Item>Vegan</NavDropdown.Item>
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
              
              <i className="bi bi-person-circle h3 mr-3"></i>User
            
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header