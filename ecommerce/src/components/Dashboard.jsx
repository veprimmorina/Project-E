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
import {CanvasJSChart} from 'canvasjs-react-charts'
import InvoicesTable from './InvoicesTable';
import ContactsTable from './ContactsTable';



function Dashboard() {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState(false);
    const [mostClickedP, setMostClicked] = useState(false);
    const [bestSoldedP, setBestSolded] = useState(false);
    const [newestP, setNewestProduct] = useState(false);
    const [stats, setStats] = useState(false);
    const [invoices, setInvoices] = useState(false);
    const [contact, setContact] = useState(false);
function getAll(){
   setAllProducts(true);
   setMostClicked(false);
   setBestSolded(false);
   setNewestProduct(false);
   setStats(false);
   setInvoices(false);
   setContact(false);
}

function mostClicked(){
  setMostClicked(true);
  setAllProducts(false);
  setBestSolded(false);
  setNewestProduct(false);
  setStats(false);
  setInvoices(false);
  setContact(false);
}

function bestSolded(){
  setBestSolded(true);
  setAllProducts(false);
  setMostClicked(false);
  setNewestProduct(false);
  setStats(false);
  setInvoices(false);
  setContact(false);
}
function newestProduct(){
setNewestProduct(true);
setAllProducts(false);
  setMostClicked(false);
  setBestSolded(false);
  setStats(false);
  setInvoices(false);
  setContact(false);
}
function showStats(){
  setStats(true);
  setNewestProduct(false);
setAllProducts(false);
  setMostClicked(false);
  setBestSolded(false);
  setInvoices(false);
  setContact(false);
}

function showInvoices(){
  setInvoices(true);
  setStats(false);
  setNewestProduct(false);
setAllProducts(false);
  setMostClicked(false);
  setBestSolded(false);
  setContact(false);
}

function showContacts(){
  setContact(true);
  setInvoices(false);
  setStats(false);
  setNewestProduct(false);
setAllProducts(false);
  setMostClicked(false);
  setBestSolded(false);
}
useEffect(()=>{
  
  
})
const options = {
  exportEnabled: true,
  animationEnabled: true,
  title: {
    text: "Website Traffic Sources"
  },
  data: [{
    type: "pie",
    startAngle: 75,
    toolTipContent: "<b>{label}</b>: {y}%",
    showInLegend: "true",
    legendText: "{label}",
    indexLabelFontSize: 16,
    indexLabel: "{label} - {y}%",
    dataPoints: [
      { y: 18, label: "Direct" },
      { y: 49, label: "Organic Search" },
      { y: 9, label: "Paid Search" },
      { y: 5, label: "Referral" },
      { y: 19, label: "Social" }
    ]
  }]}
  const options1 = {
    animationEnabled: true,
    theme: "light2",
    title:{
      text: "Most Popular Social Networking Sites"
    },
    axisX: {
      title: "Social Network",
      reversed: true,
    },
    axisY: {
      title: "Monthly Active Users",
      includeZero: true,
      labelFormatter: '',
    },
    data: [{
      type: "bar",
      dataPoints: [
        { y:  2200000000, label: "Facebook" },
        { y:  1800000000, label: "YouTube" },
        { y:  800000000, label: "Instagram" },
        { y:  563000000, label: "Qzone" },
        { y:  376000000, label: "Weibo" },
        { y:  336000000, label: "Twitter" },
        { y:  330000000, label: "Reddit" }
      ]
    }]
  }
  const options2 = {
    animationEnabled: true,
    title:{
      text: "Monthly Sales - 2017"
    },
    axisX: {
      valueFormatString: "MMM"
    },
    axisY: {
      title: "Sales (in USD)",
      prefix: "$"
    },
    data: [{
      yValueFormatString: "$#,###",
      xValueFormatString: "MMMM",
      type: "spline",
      dataPoints: [
        { x: new Date(2017, 0), y: 25060 },
        { x: new Date(2017, 1), y: 27980 },
        { x: new Date(2017, 2), y: 42800 },
        { x: new Date(2017, 3), y: 32400 },
        { x: new Date(2017, 4), y: 35260 },
        { x: new Date(2017, 5), y: 33900 },
        { x: new Date(2017, 6), y: 40000 },
        { x: new Date(2017, 7), y: 52500 },
        { x: new Date(2017, 8), y: 32300 },
        { x: new Date(2017, 9), y: 42000 },
        { x: new Date(2017, 10), y: 37160 },
        { x: new Date(2017, 11), y: 38400 }
      ]
    }]
  }
  const options3 = {
    theme: "light2",
    animationEnabled: true,
    exportEnabled: true,
    title:{
      text: "Stock Movement"
    },
    axisY:{
      title: "Stock In Hand"
    },
    data: [{
      type: "stepLine",
      xValueFormatString: "MMM YYYY",
      markerSize: 5,
      dataPoints: [
        { x: new Date("2017- 01- 01"), y: 1792 },
        { x: new Date("2017- 02- 20"), y: 1526 },
        { x: new Date("2017- 03- 11"), y: 1955 },
        { x: new Date("2017- 04- 05"), y: 1727 },
        { x: new Date("2017- 05- 04"), y: 1523 },
        { x: new Date("2017- 06- 21"), y: 1257 },
        { x: new Date("2017- 07- 05"), y: 1520 },
        { x: new Date("2017- 08- 03"), y: 1853 },
        { x: new Date("2017- 09- 11"), y: 1738 },
        { x: new Date("2017- 10- 03"), y: 1754 }
      ]
    }]
  }
  return (
    <>
    <div className='' style={{height: "800px"}}>
    <div className='d-flex'>
      <div>
    <ProSidebarProvider>
    <Sidebar style={{height: "800px"}}>
  <Menu>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Nugget_Markets_logo.svg/2560px-Nugget_Markets_logo.svg.png' alt='logo' width='130px' className='ml-3 pl-3 mt-3'/>
    <SubMenu label="Products" className='mt-5'> 
      <MenuItem onClick={()=> getAll()}> <i className="bi bi-cart-fill mr-2" ></i>All Products </MenuItem>
      <MenuItem onClick={()=>bestSolded()}><i class="bi bi-award-fill"></i> Best solded products </MenuItem>
      <MenuItem onClick={()=>newestProduct()}><i class="bi bi-arrow-up-square-fill mr-2"></i>Newest products</MenuItem>
      <MenuItem onClick={()=> mostClicked()}><i class="bi bi-hand-index-fill mr-2"></i>Most clicked products</MenuItem>
    </SubMenu>
    <MenuItem onClick={()=> showStats()}> <i class="bi bi-activity mr-3"></i> Stats </MenuItem>
    <MenuItem> <i class="bi bi-person-fill mr-3"></i>Users </MenuItem>
    <MenuItem><i class="bi bi-person-heart mr-3"></i>Best customers</MenuItem>
    <MenuItem onClick={()=> showInvoices()}><i class="bi bi-receipt mr-2"></i>Invoices</MenuItem>
    <MenuItem onClick={()=> showContacts()}><i class="bi bi-receipt mr-2"></i>Contacs</MenuItem>
    <MenuItem className='text-center mt-5'><Button variant='danger' >Log out</Button></MenuItem>
  </Menu>
</Sidebar>
    </ProSidebarProvider>
    </div>
    
    <div className='w-100'>
   <Header />
   { stats&&
   <>
   <div className='d-flex'>
   <CanvasJSChart options = {options} />

   </div>
  <div className='d-flex'>

  <CanvasJSChart options = {options3}/>
  </div>
  </>
}
   { allProducts && <AllProductsTable />}
    
    { mostClickedP && <MostClickedProductsTable /> }

    { bestSoldedP && <BestSoldedTable />}
    {newestP && <NewestProductTable />}
    {invoices && <InvoicesTable />}
    {contact && <ContactsTable />}
   </div>
   </div>
   
  
    </div>
    
    </>
  )
}

export default Dashboard