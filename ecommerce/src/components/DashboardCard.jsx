import React from 'react'
import { Card } from 'react-bootstrap'

function DashboardCard({title,quantity}) {
  return (
    <Card  key={quantity} className={'dashboard-card shadow text-white '+ title=="Products" ? "bg-warning" : title=="Total Invoices" ? "bg-danger" : title=="Today Invoices" ? "bg-success" : title=="Total orders" ? "bg-primary" : title=="Feedbacks" ? "bg-warning" : title=="Notification" ? "bg-secondary" : title=="Customers" ? "bg-info" : title=="Out Of Stock" ? "bg-warning" :"bg-dark"}>
          <div className='d-flex justify-content-center'>
            <div>
            {title=="Products" ? <i className="bi bi-bag-fill mr-5 mt-3 h1 text-white"></i> : title=="Total Invoices" ? <i className="bi bi-card-text h1 mr-5 mt-3"></i> : title=="Today Invoices" ? <i className="bi bi-file-text h1 mr-5"></i> : title=="Total orders" ? <h1 className='bi bi-list-ul h1 mr-3'></h1>: title=="Feedbacks" ? <i className='bi bi-chat-left-text h1 mr-3'></i> : title=='Notification' ? <i className='bi bi-bell h1 mr-3'></i> : title=='Total Incomes' ? <i className='bi bi-coin text-white h1 mr-3'></i>: title=="Customers" ? <i className='h1 mr-3 bi bi-person-square text-white'></i>: title=="Out Of Stock" ? <i className='h1 mr-3 bi bi-slash-square text-white'></i> : ""}
            </div>
            <div className='text-white'>
            <p className='dashboard-title'>{title}</p>
            <p className='dashboard-description'>{quantity+(title=="Total Incomes" ? " €" : title=="Out Of Stock" ? " products ": "")}</p>
          </div>
          </div>
        <Card.Body>
        </Card.Body>
    </Card>
  )
}

export default DashboardCard