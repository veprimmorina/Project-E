import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';



function SideBar() {
  const [products, setProducts] = useState("");
  function getAll(){
      setProducts("All");
  }
  return (
    <Sidebar>
  <Menu>
    <SubMenu label="Products"> 
      <MenuItem> <i class="bi bi-cart-fill mr-2" onClick={()=> getAll()}></i>All Products </MenuItem>
      <MenuItem><i class="bi bi-award-fill"></i> Best solded products </MenuItem>
      <MenuItem><i class="bi bi-arrow-up-square-fill mr-2"></i>Newest products</MenuItem>
      <MenuItem><i class="bi bi-hand-index-fill mr-2"></i>Most clicked products</MenuItem>
    </SubMenu>
    <MenuItem> <i class="bi bi-activity mr-3"></i> Stats </MenuItem>
    <MenuItem> <i class="bi bi-person-fill mr-3"></i>Users </MenuItem>
    <MenuItem><i class="bi bi-person-heart mr-3"></i>Best customers</MenuItem>
  </Menu>
</Sidebar>
  )
}

export default SideBar