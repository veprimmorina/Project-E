import React from 'react'
import { Card } from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header'


function ProductId() {
  return (
    <>
    <Header />
    <div className='container' id='bg'>
    <div className='row'>
        <div className='col-md'>
            <Card>
                <Card.Img src='https://management.begmart.com/wp-content/uploads/2022/08/Kupiec-chili-min-1024x1024.png' className='img-fluid'>

                </Card.Img>
          </Card>
        </div>
        <div className='col-md mt-auto mb-auto'>
            <div className='title'>
    <h3>Sallam</h3>
                </div>
            <p>20E</p>
            <p>200gr</p>
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default ProductId