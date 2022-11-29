import React from 'react'

function CartTableBody({item}) {
  return (
    <>
    <tbody>
    <tr className='border shadow-sm' id={item.id}><td className="clickable " onClick={() => handleRemove(item.id)}><b>x</b></td>
    <td><img src={item.photoPath} className='img-fluid' alt='product' width="45px" heigth="40px"/> </td>
   <td>{item.name}</td>
   <td>{item.discount!=0 ? (item.price-(item.discount*item.price/100)).toFixed(2)+" €": item.price}</td>
  
   <td> <span className='quantity'>
            <button ><i className="bi bi-dash-circle " onClick={() => {handleChange(item, -1); setError();}} ></i></button>
           <input id="quantity" min="1" type="number" max="1" value={item.amount} className='text-center'  />
           <button><i className="bi bi-plus-circle" 
           onClick={() => {handleChange(item, 1); validateQuantity(item,item.amount,item.quantity)}}></i></button>
           </span></td>
  <td>{((item.price-(item.discount*item.price/100))*item.amount).toFixed(2)}€</td>
   </tr>
   </tbody>
   <tbody>
    <tr className='border shadow-sm' id={item.id}><td className="clickable " onClick={() => 
      handleRemove(item.id)}><b>x</b></td>
    <td><img src={item.photoPath} className='img-fluid' alt='product' width="45px" heigth="40px"/> </td>
   <td>{item.name}</td>
   <td>{item.discount!=0 ? (item.price-(item.discount*item.price/100)).toFixed(2)+" €": item.price}</td>
  
   <td> <span className='quantity'>
            <button ><i className="bi bi-dash-circle " onClick={() => {handleChange(item, -1); setError();}} ></i></button>
           <input id="quantity" min="1" type="number" max="1" value={item.amount} className='text-center'  />
           <button><i className="bi bi-plus-circle" onClick={() => {handleChange(item, 1); validateQuantity(item,item.amount,item.quantity)}}></i></button>
           </span></td>
  <td>{((item.price-(item.discount*item.price/100))*item.amount).toFixed(2)}€</td>
   </tr>
   </tbody>
   </>
  )
}

export default CartTableBody