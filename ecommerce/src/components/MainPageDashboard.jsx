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
    const [feedbacks, setFeedbacks] = useState();
    const [comments, setComments] = useState();
    const [customers, setCustomers] = useState()
    const [incomes, setIncomes] = useState()
    const [outOfStock, setOutOfStock] = useState()

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
        axios.get("https://localhost:7103/api/Contacs/all/feedbacks").then(response=>{
            setFeedbacks(response.data)
        })
        axios.get("https://localhost:7103/api/Contacs/count/unchecked/comments").then(response=>{
            setComments(response.data)
        })
        axios.get("https://localhost:7103/api/Customers/get/total/incomes").then(response=>{
            setIncomes(response.data)
        })
        axios.get("https://localhost:7103/api/Customers/get/customers").then(response=>{
            setCustomers(response.data)
        })
        axios.get("https://localhost:7103/api/Products/product/out").then(response=>{
            setOutOfStock(response.data)
        })
    },[])
  return (
    <>
    <div className='row mt-5'>
        <div className='col-md'>
            <DashboardCard key={products} title={"Products"} quantity={products}/>
        </div>
        <div className='col-md'>
            <DashboardCard key={invoice}  title={"Total Invoices"} quantity={invoice}/>
        </div>
        <div className='col-md'>
            <DashboardCard key={todayInvoice} title={"Today Invoices"} quantity={todayInvoice}/>
        </div>
    </div>
    <div className='row mt-5'>
        <div className='col-md'>
            <DashboardCard key={invoice}  title={"Total orders"} quantity={invoice}/>
        </div>
        <div className='col-md'>
            <DashboardCard key={feedbacks}  title={"Feedbacks"} quantity={feedbacks}/>
        </div>
        <div className='col-md'>
            <DashboardCard key={comments}  title='Notification' quantity={comments}/>
        </div>
    </div>
    <div className='row mt-5'>
        <div className='col-md'>
            <DashboardCard key={incomes}  title={"Total Incomes"} quantity={incomes}/>
        </div>
        <div className='col-md'>
            <DashboardCard key={customers}  title={"Customers"} quantity={customers}/>
        </div>
        <div className='col-md'>
            <DashboardCard key={outOfStock}  title='Out Of Stock' quantity={outOfStock}/>
        </div>
    </div>
    
    </>
    
  )
}

export default MainPageDashboard