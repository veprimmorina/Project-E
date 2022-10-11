import React from 'react'
import {useCart} from "react-use-cart"

const ItemCard = (props) =>  {
    const {addItem} = useCart();
  return (
    <div >
        <div>
            <h5>{props.title}</h5>
            <h5>{props.desc}</h5>
            <h5>{props.price}</h5>
            <button onClick={()=>addItem(props.item)}></button>
        </div>
    </div>
  )
}

export default ItemCard