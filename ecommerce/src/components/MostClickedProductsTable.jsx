import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Button, Table } from 'react-bootstrap';


function MostClickedProductsTable() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('https://localhost:7103/api/Products/clicked').then(response=>{
    setProducts(response.data);
   }) 
    })

  return (
    <div className='dashboard-table'>
    <Table striped bordered hover size="sm">
    <thead>
      <tr>
      <th>#</th>
      <th>Photo</th>
      <th>Name</th>
      <th>Category</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Clicked</th>
      <th></th>
      <th></th>
      </tr>
    </thead>
    <tbody>
      
        {
          products.map((product) => (
            <>
            <tr>
            <td>{product.id}</td>
            <td><img src={product.photoPath} width="50px" className='mr-auto ml-auto'/></td>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>{product.clicked+" times"}</td>
            <td><Button><i className='bi bi-pen'></i></Button></td>
            <td><Button variant='danger'><i className='bi bi-trash'></i></Button></td>
            </tr>
            </>
          ))
        
}
    </tbody>
    
  </Table>
 </div>
  )
}

export default MostClickedProductsTable