import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage";
import ProductId from "./components/ProductId";
import AmazonVeganProducts from './components/amazonVeganProducts'
import Success from "./components/Success";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";


const App = () => {



  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/success" element={<Success />}></Route>
      <Route path="/product" element={<ProductId />}></Route>
      <Route path="/products/:id" element={<ProductId />}></Route>
      <Route path="/vegan/products" element={<AmazonVeganProducts />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/about/us" element={<AboutUs />}></Route>
    </Routes>
   </BrowserRouter>
    </>
  );
};

export default App;

