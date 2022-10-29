import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage";
import ProductId from "./components/ProductId";
import AmazonVeganProducts from './components/amazonVeganProducts'
import Success from "./components/Success";


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
    </Routes>
   </BrowserRouter>
    </>
  );
};

export default App;

