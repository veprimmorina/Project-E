import React from 'react'

function ProductsTable({item}) {

  return (
    <>
 <table width="100%">
      <tr>
        <th>Product</th>
        <th>Product name</th>
        <th>Product price</th>
        <th>Product category</th>
        <th>Quantity</th>
        <th>Total price</th>
      </tr>

        <tr className='border shadow-sm'>
        <td><img src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp' className='img-fluid' alt='product' width="45px" heigth="40px"/> </td>
       <td>Laptop</td>
       <td>250$</td>
       <td>Vegan</td>
       <td> <span className='quantity'>
                <button ><i className="bi bi-dash-circle mr-2" ></i></button>
               <input id="quantity" min="1" type="number" max="1" value='1' className='text-center' />
               <button><i className="bi bi-plus-circle"></i></button>
               </span></td>
               
      <td>250$</td>
       </tr>
      </table>
      <button className='btn btn-primary mt-2' >Order</button>
   
    </>
  )
}

export default ProductsTable