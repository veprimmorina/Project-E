import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Test() {
    function testi(){
        axios.get("https://localhost:7103/api/Customers")
        .then(response=>{console.log(response.data)}
      );
    }
    
  return (
    <div>{
       <button onClick={()=>testi()}>Kliko</button>
    }
    </div>
  )
}

export default Test