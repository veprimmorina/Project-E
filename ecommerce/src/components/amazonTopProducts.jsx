import React, { useEffect, useRef, useState } from "react";
import list from "./data";
import Cards from "./card";
import axios from "axios";
import TopProducts from "./TopProducts";


const AmazonTopProducts = ({ handleClick }) => {

  const [product, setProducts]=useState([])
  useEffect(()=>{
    axios.get("https://localhost:7103/api/Products/top/products").then(response=>{
      setProducts(response.data);
    })
  })
  const carousel = useRef(null);
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
    <section>
       <div className="container py-5">
    <div className="row bg-dark carousel" ref={carousel}>
      {product.map((item) => (
        <TopProducts key={item.id} item={item} handleClick={handleClick} />
      ))}
     
      </div>
      <button className="left" onClick={handleRightClick}><h1><i class="bi bi-chevron-left bg-light"></i></h1>
</button>
          <button className="right" onClick={handleLeftClick}><h1><i class="bi bi-chevron-right bg-light"></i></h1>
</button>
      </div>
      
          
        
     
      
    </section>
  );
};

export default AmazonTopProducts;
