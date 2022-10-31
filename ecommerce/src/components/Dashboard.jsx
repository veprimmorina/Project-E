import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import { Menu, MenuItem, ProSidebarProvider, Sidebar, SubMenu } from 'react-pro-sidebar';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';
import Header from './Header'
import AllProductsTable from './AllProductsTable';
import MostClickedProductsTable from './MostClickedProductsTable';
import BestSoldedTable from './BestSoldedTable';
import NewestProductTable from './NewestProductTable';


function Dashboard() {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState(false);
    const [mostClickedP, setMostClicked] = useState(false);
    const [bestSoldedP, setBestSolded] = useState(false);
    const [newestP, setNewestProduct] = useState(false);
function getAll(){
   setAllProducts(true);
   setMostClicked(false);
   setBestSolded(false);
   setNewestProduct(false);
}

function mostClicked(){
  setMostClicked(true);
  setAllProducts(false);
  setBestSolded(false);
  setNewestProduct(false);
}

function bestSolded(){
  setBestSolded(true);
  setAllProducts(false);
  setMostClicked(false);
  setNewestProduct(false);
}
function newestProduct(){
setNewestProduct(true);
setAllProducts(false);
  setMostClicked(false);
  setBestSolded(false);
}
useEffect(()=>{
  
  
})
  return (
    <>
    <div className=''>
    <div className='d-flex'>
      <div>
    <ProSidebarProvider>
    <Sidebar >
  <Menu>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Nugget_Markets_logo.svg/2560px-Nugget_Markets_logo.svg.png' alt='logo' width='130px' className='ml-3 pl-3 mt-3'/>
    <SubMenu label="Products" className='mt-5'> 
      <MenuItem onClick={()=> getAll()}> <i className="bi bi-cart-fill mr-2" ></i>All Products </MenuItem>
      <MenuItem onClick={()=>bestSolded()}><i class="bi bi-award-fill"></i> Best solded products </MenuItem>
      <MenuItem onClick={()=>newestProduct()}><i class="bi bi-arrow-up-square-fill mr-2"></i>Newest products</MenuItem>
      <MenuItem onClick={()=> mostClicked()}><i class="bi bi-hand-index-fill mr-2"></i>Most clicked products</MenuItem>
    </SubMenu>
    <MenuItem> <i class="bi bi-activity mr-3"></i> Stats </MenuItem>
    <MenuItem> <i class="bi bi-person-fill mr-3"></i>Users </MenuItem>
    <MenuItem><i class="bi bi-person-heart mr-3"></i>Best customers</MenuItem>
    <MenuItem className='text-center mt-5'><Button variant='danger' >Log out</Button></MenuItem>
  </Menu>
</Sidebar>
    </ProSidebarProvider>
    </div>
    
    <div className='w-100'>
   <Header />
   { allProducts && <AllProductsTable />}
    
    { mostClickedP && <MostClickedProductsTable /> }

    { bestSoldedP && <BestSoldedTable />}
    {newestP && <NewestProductTable />}
   </div>
   </div>
   
  
    </div>
    
    </>
  )
}

export default Dashboard