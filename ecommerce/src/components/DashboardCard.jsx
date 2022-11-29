import React from 'react'
import { Card } from 'react-bootstrap'

function DashboardCard({title,quantity}) {
  return (
    <Card className={'shadow border border-warning card-hover '+title=="Products" ? "bg-warning" : title=="Total Invoices" ? "bg-danger" : title=="Today Invoices" ? "bg-success" : ""}>
        <Card.Header>
          <div className='d-flex justify-content-center'>
            {title=="Products" ? <i className="bi bi-bag-fill mr-5 h3"></i> : title=="Total Invoices" ? <i class="bi bi-card-text mr-5"></i> : title=="Today Invoices" ? <i class="bi bi-file-text mr-5"></i> : ""}
            <p>{title}</p>
          </div>
        </Card.Header>
        <Card.Body>
            <p>{quantity}</p>
        </Card.Body>
    </Card>
  )
}

export default DashboardCard