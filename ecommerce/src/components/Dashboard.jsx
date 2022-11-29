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
import { useParams } from 'react-router-dom';
import UsersTable from './UsersTable';
import BestUserTable from './BestUserTable';
import MainPageDashboard from './MainPageDashboard';




function Dashboard() {
    const [products, setProducts] = useState([]);
    const [notification, setNotification] = useState();
    const [allProducts, setAllProducts] = useState(false);
    const [mostClickedP, setMostClicked] = useState(false);
    const [bestSoldedP, setBestSolded] = useState(false);
    const [newestP, setNewestProduct] = useState(false);
    const [stats, setStats] = useState(false);
    const [invoices, setInvoices] = useState(false);
    const [contact, setContact] = useState(false);
    const [users, setUsers] = useState(false);
    const [bestUsers, setBestUsers] = useState(false);
    const [stock, setStock] = useState();
    const {id}= useParams();
function getAll(){
   setAllProducts(true);
   setMostClicked(false);
   setBestSolded(false);
   setNewestProduct(false);
   setStats(false);
   setInvoices(false);
   setContact(false);
   setUsers(false);
   setBestUsers(false);
}

function mostClicked(){
  setMostClicked(true);
  setAllProducts(false);
  setBestSolded(false);
  setNewestProduct(false);
  setStats(false);
  setInvoices(false);
  setContact(false);
  setUsers(false);
  setBestUsers(false);
}

function bestSolded(){
  setBestSolded(true);
  setAllProducts(false);
  setMostClicked(false);
  setNewestProduct(false);
  setStats(false);
  setInvoices(false);
  setContact(false);
  setUsers(false);
  setBestUsers(false);
}
function newestProduct(){
setNewestProduct(true);
setAllProducts(false);
  setMostClicked(false);
  setBestSolded(false);
  setStats(false);
  setInvoices(false);
  setContact(false);
  setUsers(false);
  setBestUsers(false);
}
function showStats(){
  setStats(true);
  setNewestProduct(false);
setAllProducts(false);
  setMostClicked(false);
  setBestSolded(false);
  setInvoices(false);
  setContact(false);
  setUsers(false);
  setBestUsers(false);
}

function showInvoices(){
  setInvoices(true);
  setStats(false);
  setNewestProduct(false);
setAllProducts(false);
  setMostClicked(false);
  setBestSolded(false);
  setContact(false);
  setUsers(false);
  setBestUsers(false);
}

function showContacts(){
  setContact(true);
  setInvoices(false);
  setStats(false);
  setNewestProduct(false);
setAllProducts(false);
  setMostClicked(false);
  setBestSolded(false);
  setUsers(false);
  setBestUsers(false);
}
function doSomething(){

}
function showUsers(){
  setUsers(true);
  setContact(false);
  setInvoices(false);
  setStats(false);
  setNewestProduct(false);
setAllProducts(false);
  setMostClicked(false);
  setBestSolded(false);
  setBestUsers(false);
}
function showBestUsers(){
  setBestUsers(true);
  setUsers(false);
  setContact(false);
  setInvoices(false);
  setStats(false);
  setNewestProduct(false);
setAllProducts(false);
  setMostClicked(false);
  setBestSolded(false);
}
function logOut(){
  localStorage.setItem(9,"")
  window.location.href="http://localhost:3000/";
}
useEffect(()=>{
  axios.get('https://localhost:7103/api/Contacs/unchecked').then(response=>{
    setNotification(response.data);
    axios.get('https://localhost:7103/api/Invoices').then(response=>{
      setStock(response.data);
     })    
  });
  id!=undefined ? setContact(true) : doSomething()
})
const options = {
  exportEnabled: true,
  animationEnabled: true,
  title: {
    text: "Products in stock"
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
      { y: 18, label: "Protein Vegane" },
      { y: 49, label: "Virshlle vegane" },
      { y: 9, label: "Qumesht soja" },
      { y: 5, label: "Zott Monte" },
      { y: 19, label: "Biskota misri me djath" }
    ]
  }]}
  const options1 = {
    animationEnabled: true,
    theme: "light2",
    title:{
      text: "Products in stock"
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
        { y:  2200000000, label: "Virshlle Vegane" },
        { y:  1800000000, label: "Protein Vegane" },
        { y:  800000000, label: "Qumesht Soja" },
        { y:  563000000, label: "Biskota me djath" },
     
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
        { x: new Date(2022, 10), y: 15 },
        { x: new Date(2017, 11), y: 46 },
       
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
        { x: new Date("2022- 09- 20"), y: 0 },
        { x: new Date("2022- 10- 20"), y: 25 },
        { x: new Date("2022- 11- 10"), y: 46 },
        { x: new Date("2022- 12- 10"), y: 52 },        
      ]
    }]
  }
  return (
    
    <>
    {
      localStorage.getItem(9)!="" ? 
    
    <div className='' style={{height: "800px"}}>
    <div className='d-flex'>
      <div>
    <ProSidebarProvider>
    <Sidebar style={{height: "800px"}}>
  <Menu>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Nugget_Markets_logo.svg/2560px-Nugget_Markets_logo.svg.png' alt='logo' width='130px' className='ml-3 pl-3 mt-3'/>
    <SubMenu label="Products" className='mt-5'> 
      <MenuItem onClick={()=> getAll()}> <i className="bi bi-cart-fill mr-2" ></i>All Products </MenuItem>
      <MenuItem onClick={()=>bestSolded()}><i className="bi bi-award-fill"></i> Best solded products </MenuItem>
      <MenuItem onClick={()=>newestProduct()}><i className="bi bi-arrow-up-square-fill mr-2"></i>Newest products</MenuItem>
      <MenuItem onClick={()=> mostClicked()}><i className="bi bi-hand-index-fill mr-2"></i>Most clicked products</MenuItem>
    </SubMenu>
    <MenuItem onClick={()=> showStats()}> <i className="bi bi-activity mr-3"></i> Stats </MenuItem>
    <MenuItem onClick={()=> showUsers()}> <i className="bi bi-person-fill mr-3"></i>Users </MenuItem>
    <MenuItem onClick={()=> showBestUsers()}><i className="bi bi-person-heart mr-3"></i>Best customers</MenuItem>
    <MenuItem onClick={()=> showInvoices()}><i className="bi bi-receipt mr-2"></i>Invoices</MenuItem>
    <MenuItem onClick={()=> showContacts()}><i className="bi bi-envelope mr-2"></i>Contacs</MenuItem>
    <MenuItem className='text-center mt-5'><Button variant='danger' onClick={()=> logOut()}>Log out</Button></MenuItem>
  </Menu>
</Sidebar>
    </ProSidebarProvider>
    </div>
    
    <div className='w-100'>
   <Header news={notification}/>
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
<MainPageDashboard />
   { allProducts && <AllProductsTable />}
    { mostClickedP && <MostClickedProductsTable /> }
    { bestSoldedP && <BestSoldedTable />}
    {newestP && <NewestProductTable />}
    {invoices && <InvoicesTable />}
    {contact && <ContactsTable commentId={id}/>}
    {users && <UsersTable />}
    {bestUsers && <BestUserTable />}
   </div>
   </div>
   
  
    </div>
 : <p>You are not authorize for this part!</p> }
    </>
    
  )

}


export default Dashboard