import React, { useEffect, useState } from "react";
import list from "./data";
import Cards from "./card";
import axios from "axios";


const Amazon = ({ handleClick }) => {

  const [product, setProducts]=useState([])
  useEffect(()=>{
    axios.get("https://localhost:7103/api/Products").then(response=>{
      setProducts(response.data);
    })
  })

  return (
    <section style={{backgroundColor: "#eee", width: "900px"}}>
       <div className="container py-5">
    <div className="row">
      {product.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
      </div>
      </div>
      
    </section>
  );
};

export default Amazon;
