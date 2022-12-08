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
    },[])
  return (
    <>
    <div className='row mt-5'>
        <div className='col-md'>
            <DashboardCard key={"5"} title={"Products"} quantity={products}/>
        </div>
        <div className='col-md'>
            <DashboardCard key={"5"} title={"Total Invoices"} quantity={invoice}/>
        </div>
        <div className='col-md'>
            <DashboardCard key={"5"} title={"Today Invoices"} quantity={todayInvoice}/>
        </div>
    </div>
    <div className='row mt-5'>
        <div className='col-md'>
            <DashboardCard key={"5"} title={"Total orders"} quantity={invoice}/>
        </div>
        <div className='col-md'>
            <DashboardCard key={"5"} title={"Feedbacks"} quantity={feedbacks}/>
        </div>
        <div className='col-md'>
            <DashboardCard key={"5"} title='Notification' quantity={comments}/>
        </div>
        </div>
    
    </>
    
  )
}

export default MainPageDashboard