import React, { useEffect, useState } from "react";
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

  return (
    <section>
       <div className="container py-5">
    <div className="row bg-dark">
      {product.map((item) => (
        <TopProducts key={item.id} item={item} handleClick={handleClick} />
      ))}
      </div>
      </div>
      
    </section>
  );
};

export default AmazonTopProducts;
