import React from 'react'

function Success() {
  setTimeout(function() {
    window.location.href='http://localhost:3000/';
  }, 5000);
  return (
    <div>Success</div>
  )
}

export default Success