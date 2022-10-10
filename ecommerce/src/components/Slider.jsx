import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Slider() {
  return (
    <Carousel variant='dark' className='mr-5 row d-none d-lg-flex'>
        <Carousel.Item className='fotografia-slider'>
        <img
          className="img-fluid" id="syreti"
          src="https://management.begmart.com/wp-content/uploads/2022/10/Tetori_per_Gruan.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
            <h5>Hello</h5>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="https://management.begmart.com/wp-content/uploads/2022/05/Web_Fitomejogobella.jpg" alt="" />
        </Carousel.Item>
        <Carousel.Item>
            <img src="https://management.begmart.com/wp-content/uploads/2021/05/HIGJENA.jpg" alt="" />
        </Carousel.Item>
        <Carousel.Item>
            <img src="https://management.begmart.com/wp-content/uploads/2022/05/Web_Banner_Bylmeti.jpg" alt="" />
        </Carousel.Item>
    </Carousel>
  )
}

export default Slider