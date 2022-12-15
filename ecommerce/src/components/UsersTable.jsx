import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Table } from 'react-bootstrap';

function UsersTable() {
    const [users, setUser]=useState();

    useEffect(()=>{
        axios.get('https://localhost:7103/api/Customers').then(response=>{
            setUser(response.data)
        })
    },[])
  return (
    <>
      <div className='dashboard-table'>
    <Table striped bordered hover size="sm" style={{overflow: "scroll"}}>
    <thead>
      <tr>
      <th>#</th>
      <th>Email</th>
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

export default UsersTable