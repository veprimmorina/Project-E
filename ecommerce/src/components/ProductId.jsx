import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header'
import { useParams } from "react-router-dom";
import axios from 'axios';

function ProductId() {
   const {id} = useParams();
   const [product, setProduct]=useState({});

   useEffect(()=>{
     axios.get("https://localhost:7103/api/Products/"+id).then(response=>{
      setProduct(response.data);
     });
   })
  return (
    <>
    <Header />
    <div className='container' id='bg'>
    <div className='row'>
        <div className='col-md mt-5 mb-5'>
            <Card>
                <Card.Img src={product.photoPath} className='img-fluid '>

                </Card.Img>
          </Card>
        </div>
        <div className='col-md mt-auto mb-auto text-center'>
            <div className='title product-title'>
    <h3>{product.name}</h3>
                </div>
            <p>{product.category}</p>
            <p>{product.price+" €"}</p>
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default ProductId