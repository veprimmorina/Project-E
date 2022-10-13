import React from 'react'

function ProductTest(props) {
    const {product} = props;
  return (
    <>
    <h3>{product.name}</h3>
    <h3>{product.price}</h3>
    </>
  )
}

export default ProductTest