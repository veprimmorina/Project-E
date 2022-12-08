import React from 'react'
import {
    MDBContainer,
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit';

function Collage() {
  return (
    <div className='container text-center'>
        <h2>Gallery</h2>
    <MDBRow>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <img
          src='https://www.nuggetmarket.com/media/images/07/03/ext-store-10-3.jpg'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Market'
        />

        <img
          src='https://www.villagelife.com/files/2020/02/NuggetWEB.jpg'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Market'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVoJXbCqwkfV6fK8HdL-OWVTbWM3r9mQju9Os3gVr6zi2k2qj5IOImxoqBSkHJHdP2l5Y&usqp=CAU'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Market'
        />

        <img
          src='https://www.davisenterprise.com/files/2021/03/NuggetMarkets2021W.jpg'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Market'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VwZXJtYXJrZXR8ZW58MHx8MHx8&w=1000&q=80'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Market'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Market'
        />
      </MDBCol>
    </MDBRow>
    </div>
  )
}

export default Collage