import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import { Menu, MenuItem, ProSidebarProvider, Sidebar, SubMenu } from 'react-pro-sidebar';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';


function Dashboard() {
    const [products, setProducts] = useState([]);
function getAll(){
   axios.get('https://localhost:7103/api/Products/all').then(response=>{
    setProducts(response.data);
   })
}

useEffect(()=>{
  axios.get('https://localhost:7103/api/Products/all').then(response=>{
    setProducts(response.data);
   })
})
  return (
    <>
    <div className='d-flex'>
    
    <ProSidebarProvider>
    <Sidebar>
  <Menu>
    <SubMenu label="Products"> 
      <MenuItem onClick={()=> getAll()}> <i className="bi bi-cart-fill mr-2" ></i>All Products </MenuItem>
      <MenuItem><i class="bi bi-award-fill"></i> Best solded products </MenuItem>
      <MenuItem><i class="bi bi-arrow-up-square-fill mr-2"></i>Newest products</MenuItem>
      <MenuItem><i class="bi bi-hand-index-fill mr-2"></i>Most clicked products</MenuItem>
    </SubMenu>
    <MenuItem> <i class="bi bi-activity mr-3"></i> Stats </MenuItem>
    <MenuItem> <i class="bi bi-person-fill mr-3"></i>Users </MenuItem>
    <MenuItem><i class="bi bi-person-heart mr-3"></i>Best customers</MenuItem>
  </Menu>
</Sidebar>
    </ProSidebarProvider>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
        <th>#</th>
        <th>Photo</th>
        <th>Name</th>
        <th>Category</th>
        <th>Quantity</th>
        <th>Price</th>
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
              <td><Button><i className='bi bi-pen'></i></Button></td>
              <td><Button variant='danger'><i className='bi bi-trash'></i></Button></td>
              </tr>
              </>
            ))
          
}
      </tbody>
      
    </Table>
    </div>
    
    </>
  )
}

export default Dashboard