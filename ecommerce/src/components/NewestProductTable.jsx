import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';

function NewestProductTable() {
    const [products, setProducts] = useState([]);
    const [productData, setProductData] = useState();
    const [showM, setShowM] = useState(false);
    const handleClose = () => setShowM(false);
  const handleShow = (id) => {setShowM(true); 
    axios.get('https://localhost:7103/api/Products/'+id).then(response=>{
      setProductData(response.data);
     }) 
  };
  


    useEffect(()=>{
        axios.get('https://localhost:7103/api/Products').then(response=>{
    setProducts(response.data);
   }) 
    })

    function getData(val){
      productData.name=val.target.value;
     /* Product = {
        id: productData.id,
        name: productData.name,
        category: productData.category,
        quantity: productData.quantity,
        price: productData.price
      }
      */
    }

    function getQuantity(val){
      productData.quantity=val.target.value;
    }
    function saveProduct(id){
    
    var Product = {
        id: productData.id,
        photoPath: productData.photoPath,
        name: productData.name,
        category: productData.category,
        quantity: productData.quantity,
        amount : 1,
        price: productData.price
      }
      axios.put('https://localhost:7103/api/Products/'+id, Product).then(response=>{
      console.log(response.data);
     }) 
    }
  return (
  <>
    <div className='dashboard-table'>
    <Table striped bordered hover size="sm">
    <thead>
      <tr>
      <th>#</th>
      <th>Photo</th>
      <th>Name</th>
      <th>Category</th>
      <th>Quantity</th>
      <th>Price</th>
      <th></th>
      <th></th>
      </tr>
    </thead>
    <tbody>
      
        {
          products.map((product) => (
            <>
            <tr>
            <td>{product.id}</td>
            <td><img src={product.photoPath} width="50px" className='mr-auto ml-auto'/></td>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td><Button onClick={()=>handleShow(product.id)}><i className='bi bi-pen'></i></Button></td>
            <td><Button variant='danger'><i className='bi bi-trash'></i></Button></td>
            </tr>
            </>
            
          ))
        
}

    </tbody>
    
  </Table>
  </div>
  <Modal show={showM} onHide={handleClose} className='text-center'>
  <Modal.Header closeButton>
    <Modal.Title className='text-center'>Product Details</Modal.Title>
  </Modal.Header>
  <Modal.Body>
   <Form>

    <Form.Label>Photo Path:</Form.Label>
    <Form.Control type="text" value={productData!=null ? productData.photoPath : "N/A"}></Form.Control>
    <Form.Label>Id:</Form.Label>
    <Form.Control type="text" value={productData!=null ? productData.id : "N/A"} disabled='disabled'></Form.Control>
    <Form.Label>Name:</Form.Label>
    <Form.Control type="text"  value={productData!=null ? productData.name : "N/A"} onChange={getData}></Form.Control>
    <Form.Label>Category</Form.Label>
    <Form.Control type="text" value={productData!=null ? productData.category : "N/A"}></Form.Control>
    <Form.Label>Quantity:</Form.Label>
    <Form.Control type="text" value={productData!=null ? productData.quantity : "N/A"} onChange={getQuantity}></Form.Control>
    <Form.Label>Price: </Form.Label>
    <Form.Control type='text' value={productData!=null ? productData.price : "N/A"}></Form.Control>
   </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={()=> saveProduct(productData.id)}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>
</>
  )
}

export default NewestProductTable