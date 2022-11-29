import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header'
import { useParams } from "react-router-dom";
import axios from 'axios';
import NavBari from './NavBari';

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
    <NavBari />
    <div className='container' id='bg'>
    <div className='row'>
        <div className='col-md mt-auto mb-auto pt-5'>
            <Card className='shadow'>
                <Card.Img src={product.photoPath} className='img-fluid' width="20">

                </Card.Img>
          </Card>
        </div>
        <div className='col-md mt-5 pt-2 text-center'>
            <div className='title product-title mt-5' style={{fontSize : "35px", fontWeight: "bold"}}>
              <img src={product.madeInPhoto} width='80' alt='madein' className='mb-5 ml-auto mr-auto mt-'/>
    <p className='mt-3'>{product.name}</p>
                </div>
            <b className='mt-5'>Category: <p className=" " style={{color: '#393f81'}}>{product.category}</p></b>
            <b>Price: <p className=" " style={{color: '#393f81'}}>{product.price+" €"}</p></b>
            {product.discount!=0 ?<><b className='text-danger'>Discount: </b><p className=" pb-lg-2 text-danger" style={{color: '#393f81'}}>{product.discount+" %"}</p> </>: <p></p>}
            {product.discount!=0 ?<><b className=''>Discount Price: </b><p className=" pb-lg-2 " style={{color: '#393f81'}}>{(product.price -(product.discount*product.price/100)).toFixed(2)+" €"}</p> </>: <p></p>}
            <b>Quantity: <p className=" " style={{color: '#393f81'}}>{product.quantity}</p></b>
            <b>Ingridients: </b><p>{product.ingredients}</p>
            <div className='d-flex justify-content-center'>
            <img src='https://www.freepnglogos.com/uploads/barcode-png/barcode-laser-code-vector-graphic-pixabay-3.png' alt='barcode' width='170'/>
            </div>
            <p>{product.barcode}</p>
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default ProductId