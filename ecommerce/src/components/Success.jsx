import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Success() {
 
  setTimeout(function() {
    window.location.href='http://localhost:3000/';
  }, 5000);
  
  return (
    <>
    <div>Success</div>
    </>
  )
}

export default Success