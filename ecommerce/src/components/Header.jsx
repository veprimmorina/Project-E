import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header({news}) {

const [comments, setComments]=useState();
const [userName, setUserName]=useState(localStorage.getItem(9));
  useEffect(()=>{
    axios.get('https://localhost:7103/api/Contacs/unchecked/comments').then(response=>{
     setComments(response.data);
  })
})
    return (
        <Navbar expand="lg"  className='header' style={{background: "#e5e7eb"}}>
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <i className="bi bi-bell-fill mt-2"></i><NavDropdown title={news} id="basic-nav-dropdown" >
                 {
                  comments!=undefined ?
                  comments.map((comment) => (
                    <>
                    <Link to={"/dashboard/"+comment.contactsId} target='_blank' style={{textDecoration: "none"}}>
                    <NavDropdown.Item>{comment.name}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <p className='ml-3' style={{color: "black"}}><p>{comment.comment.slice(0,20)}</p></p>
                    <NavDropdown.Divider />
                    </Link>
                    </>
                    )) : ""
                 }
                  
                </NavDropdown>
              </Nav>
              <i className="bi bi-person-circle h3 mr-3"></i>{userName}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header