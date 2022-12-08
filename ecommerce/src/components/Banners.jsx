import React from 'react'
import { Card } from 'react-bootstrap'

function Banners() {
  return (
    <div className='row'>
        <div className='col-md'>
        <Card className='shadow'>
         <Card.Header>
            <Card.Img src='https://i.pinimg.com/736x/63/d7/ff/63d7ff834151ba837294c915a1e9de9f.jpg' className='img-fluid h-25'>
            </Card.Img>
         </Card.Header>
        </Card>
        </div>
        <div className='col-md'>
        <Card>
         <Card.Header>
            <Card.Img src='https://cdn1.vectorstock.com/i/1000x1000/59/60/meat-fresh-cut-of-beef-and-pork-sketch-banner-set-vector-18685960.jpg' className='img-fluid h-25'>
            </Card.Img>
         </Card.Header>
        </Card>
        </div>
        <div className='col-md'>
        <Card>
         <Card.Header>
            <Card.Img src='https://cdn1.vectorstock.com/i/1000x1000/52/85/fresh-fruit-cartoon-banner-for-food-drink-design-vector-15025285.jpg' className='img-fluid h-25'>
            </Card.Img>
         </Card.Header>
        </Card>
        </div>

    </div>
  )
}

export default Banners