import React, { useEffect, useRef, useState } from "react";
import list from "./data";
import Cards from "./card";
import axios from "axios";
import TopProducts from "./TopProducts";


const AmazonTopProducts = ({ handleClick }) => {

  const [product, setProducts]=useState([])
  const carousel = useRef(null);
  useEffect(()=>{
    axios.get("https://localhost:7103/api/Products/top/products").then(response=>{
      setProducts(response.data);
    })
  },[])
  const handleLeftClick = (e) =>{
    e.preventDefault();
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft+= carousel.current.offsetWidth;
   }
   const handleRightClick = (e) =>{
    e.preventDefault();
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft-= carousel.current.offsetWidth;
   }

  return (
    <>
    <div className='container'>
    <div className='logo'>
      <img src='' />
      <div className='carousel' ref={carousel}>
      {product.map((item) => (
        <TopProducts key={item.id} item={item} handleClick={handleClick} />
      ))}
     
    </div>
    </div>
    </div>
    <div className="text-center">
      <button className="left" onClick={handleRightClick}><h1><i className="bi bi-chevron-left bg-light"></i></h1>
</button>
          <button className="right" onClick={handleLeftClick}><h1><i className="bi bi-chevron-right bg-light mt-3"></i></h1>
</button>
</div>
    </>
  );
};

export default AmazonTopProducts;
