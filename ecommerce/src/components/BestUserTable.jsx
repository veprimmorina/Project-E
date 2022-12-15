import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';


function BestUserTable() {

    const [users, setUser]=useState();

    useEffect(()=>{
        axios.get('https://localhost:7103/get/best/customers').then(response=>{
            setUser(response.data)
        })
    },[])   
  return (
    <>
    <div >
    <Table striped bordered hover size="sm" style={{overflow: "scroll"}}>
    <thead>
      <tr>
      <th>#</th>
      <th>Email</th>
      <th>Has Bought</th>
      <th>Total in Euro</th>
      </tr>
    </thead>
    <tbody>
      
        {
          users!=undefined ?  
          users.map((user) => (
            <>
            <tr>
            <td>{user.customerId}</td>
            <td>{user.customerEmail}</td>  
            <td>{user.bought+" times"}</td> 
            <td>{user.code+"€"}</td>
            </tr>
            </>
            
          ))
          
        : ""
}
    </tbody>
    
  </Table>
  </div>
  </>
  )
}

export default BestUserTable