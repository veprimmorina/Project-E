import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage";
import ProductId from "./components/ProductId";
const App = () => {



  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/product" element={<ProductId />}></Route>
    </Routes>
   </BrowserRouter>
    </>
  );
};

export default App;

