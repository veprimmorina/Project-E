import React, { useState } from "react";
import list from "./data";
import Cards from "./card";


const Amazon = ({ handleClick }) => {
  return (
    <section style={{backgroundColor: "#eee", width: "900px"}}>
       <div className="container py-5">
    <div className="row">
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
      </div>
      </div>
      
    </section>
  );
};

export default Amazon;
