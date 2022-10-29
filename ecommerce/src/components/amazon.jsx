import React, { useEffect, useState } from "react";
import list from "./data";
import Cards from "./card";
import axios from "axios";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";



const Amazon = ({ handleClick, searchi, category }) => {

  const [product, setProducts]=useState([])
  const [search, setSearch] = useState()
  const [isSet, setIsSet] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [kids, setKids] = useState(false);
  const [error, setError] = useState();
  const [find, setFind] = useState();
  
  useEffect(()=>{
    /*isSet==false ? vegan==false ? kids== false ?
       axios.get("https://localhost:7103/api/Products").then(response=>{
         setProducts(response.data);
       }) : kidsProducts() : veganProducts() : getProducts();
       */
       searchi=="" ?  category=="" ?
       axios.get("https://localhost:7103/api/Products").then(response=>{
         setProducts(response.data);
         setError("");
       })  : category=="" ? axios.get("https://localhost:7103/api/Products").then(response=>{
        setProducts(response.data);
        setError("");
      }) :
       axios.get("https://localhost:7103/api/Products/category/"+category).then(response=>{
        setProducts(response.data);
      }) :
       axios.get("https://localhost:7103/api/Products/get/"+searchi).then(response=>{
           setProducts(response.data);
           if(response.data==""){
            setError("No Product with "+searchi+" name founded")
            setFind(false);
          }else{
            setError("");
            setFind(true);
          }
       })
   })
  
  function getData(val){
     setSearch(val.target.value);
  }
  function getProducts(){
    if(searchi!=""){
    setIsSet(true);
    axios.get("https://localhost:7103/api/Products/get/"+searchi).then(response=>{
      setProducts(response.data);
      if(response.data==""){
        setError("No Product with "+searchi+" name founded")
        setFind(false);
      }else{
        setError("");
        setFind(true);
      }
    })
  }else{
    axios.get("https://localhost:7103/api/Products").then(response=>{
      setProducts(response.data);
      setError("")
    }) 
  }
  }

  

  function kidsProducts(){
    setKids(true);
    setVegan(false);
    axios.get("https://localhost:7103/api/Products/category/kids").then(response=>{
      setProducts(response.data);
    })
  }
   

  return (
    <>
    <section style={{backgroundColor: "#eee", width: "900px"}}>
       <div className="container py-5">
    <div className="row">
      <p className="text-center text-danger">{error}</p>
      {product.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
      </div>
      </div>
      
    </section>
    </>
  );
};

export default Amazon;
