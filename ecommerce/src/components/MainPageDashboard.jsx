import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import DashboardCard from './DashboardCard'

function MainPageDashboard() {

    const [products, setProducts] = useState();
    const [invoice, setInvoice] = useState();
    const [todayInvoice, setTodayInvoice] = useState();
    useEffect(()=>{
        axios.get("https://localhost:7103/api/Products/count/products").then(response=>{
            setProducts(response.data)
        })
        axios.get("https://localhost:7103/api/Invoices/count/invoice").then(response=>{
            setInvoice(response.data)
        })
        axios.get("https://localhost:7103/api/Invoices/count/invoice/today").then(response=>{
            setTodayInvoice(response.data)
        })
    },[])
  return (
    <div className='row'>
        <div className='col-md'>
            <DashboardCard key={"item"} title={"Products"} quantity={products}/>
        </div>
        <div className='col-md'>
            <DashboardCard key={"item"} title={"Total Invoices"} quantity={invoice}/>
        </div>
        <div className='col-md'>
            <DashboardCard key={"item"} title={"Today Invoices"} quantity={todayInvoice}/>
        </div>
    </div>
  )
}

export default MainPageDashboard