import axios from 'axios';
import { Input } from 'postcss';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';

function AllProductsTable() {
  const [photoPath, setPhotoPath] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [madeIn, setMadeIn]=useState();
  const [discount, setDiscount]=useState();
  const [ingredients, setIngredients] = useState();
  const [barcode, setBarCode]= useState();
    const [products, setProducts] = useState([]);
    const [searched, setSearched] = useState([]);
    const [hasSearch, setHasSearch]= useState(false);
    const [productData, setProductData] = useState();
    const [addProduct,setAddProduct] = useState(false);
    const [showM, setShowM] = useState(false);
    const handleClose = () => setShowM(false);
  const handleShow = (id) => {setShowM(true); 
    axios.get('https://localhost:7103/api/Products/'+id).then(response=>{
      setProductData(response.data);
     }) 
  };
  


    useEffect(()=>{
      hasSearch==true? searched=="" ?  axios.get('https://localhost:7103/api/Products/all').then(response=>{
        setProducts(response.data);
       }) : axios.get('https://localhost:7103/api/Products/get/'+searched).then(response=>{
        setProducts(response.data);
       }) :
        axios.get('https://localhost:7103/api/Products/all').then(response=>{
    setProducts(response.data);
   }) 
    })

    function getPhotoPath(val){
      setPhotoPath(val.target.value);
    }
    function getName(val){
      setName(val.target.value);
    }
    function getCategory(val){
      setCategory(val.target.value);
    }
    function gQuantity(val){
      setQuantity(val.target.value);
    }
    function gMadeIn(val){
      setMadeIn(val.target.value);
    }
    function gDiscount(val){
      setDiscount(val.target.value);
    }
    function getPrice(val){
      setPrice(val.target.value);
    }
    function productAdd(){
      setAddProduct(!addProduct);
    }
    function getIngredients(val){
      setIngredients(val.target.value)
    }
    function getBarCode(val){
      setBarCode(val.target.value)
    }
    function getDiscount(val){
      setIngredients(val.target.value)
    }

    function addNewProduct(){
      var Product = {
        photoPath: photoPath,
        name: name,
        category: category,
        quantity: quantity,
        price: price,
        amount: 1,
        clicked: 0,
        sold: 0,
        madeInPhoto: madeIn,
        discount: discount,
        ingredients: ingredients,
        barcode: barcode,
      }
      axios.post('https://localhost:7103/api/Products',Product).then(response=>{
        console.log(response.data);
       }) 
       setName('');
       setCategory('')
       setPhotoPath('');
       setPrice('');
       setQuantity('');
       setBarCode('');
       setIngredients('');
       setAddProduct(false);
    }
    function getSearch(val){
     setSearched(val.target.value);
     setHasSearch(true);
    }
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

    function gPhotoPath(val){
      productData.photoPath=val.target.value;
    }
    function gCategory(val){
      productData.category=val.target.value;
    }
    function gPrice(val){
      productData.price=val.target.value;
    }
    function getQuantity(val){
      productData.quantity=val.target.value;
    }
    function getMadeIn(val){
      productData.madeInPhoto=val.target.value;
    }
    function getDiscount(val){
      productData.discount=val.target.value;
    }
    function gIngredients(val){
      productData.ingredients=val.target.value;
    }
    function gBarCode(val){
      productData.barcode=val.target.value;
    }
    function saveProduct(id){
      setShowM(false);
    var Product = {
        id: productData.id,
        photoPath: productData.photoPath,
        name: productData.name,
        category: productData.category,
        quantity: productData.quantity,
        amount : 1,
        price: productData.price,
        madeInPhoto: productData.madeInPhoto,
        discount: productData.discount,
        ingredients: productData.ingredients,
        barcode: productData.barcode
      }
      axios.put('https://localhost:7103/api/Products/'+productData.id, Product).then(response=>{
        console.log(response.data)
      })
     alert('Succesfully edited')
    }
    function deleteProduct(id){
      axios.delete('https://localhost:7103/api/Products/'+id).then(response=>{
        console.log(response.data);
       }) 
    }
  return (
  <>
  <div className='d-flex justify-content-between'>
       <div>
        <input type='search' onChange={getSearch} />
        <Button variant='primary' className='ml-2'><i className='bi bi-search'></i></Button>
       </div>
       <div>
        <Button variant='success' onClick={()=>{productAdd()}}>Add Product</Button>
       </div>
  </div>
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
      <th>Made In</th>
      <th>Discount</th>
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
            <td><img src={product.madeInPhoto} width="50px" className='mr-auto ml-auto'/></td>
            <td>{product.discount+" %"}</td>
            <td><Button onClick={()=>handleShow(product.id)}><i className='bi bi-pen'></i></Button></td>
            <td><Button variant='danger' onClick={()=> deleteProduct(product.id)}><i className='bi bi-trash'></i></Button></td>
            </tr>
            </>
            
          ))
        
}
{
  addProduct &&
  <tr>
    <td></td>
    <td><input type='text' placeholder='Photo Path' onChange={getPhotoPath}/></td>
    <td><input type='text' placeholder='Name' onChange={getName}/></td>
    <td><input type='text' placeholder='Category' size='5' onChange={getCategory} /></td>
    <td><input type='text' placeholder='Quantity' size='3'onChange={gQuantity}/></td>
    <td><input type='text' placeholder='Price' size='3' onChange={getPrice}/></td>
    <td><input type='text' placeholder='Made In' onChange={gMadeIn}/></td>
    <td><input type='text' placeholder='Discount' size='3' onChange={gDiscount}/></td>
    <td><input type='text' placeholder='Ingredients' onChange={getIngredients}/></td>
    <td><input type='text' placeholder='Bar Code' size='8' onChange={getBarCode}/></td>
    <td><Button variant='success' onClick={()=> addNewProduct()}>Add</Button></td>
  </tr>
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
    <Form.Control type="text" value={productData!=null ? productData.photoPath : "N/A"} onChange={gPhotoPath}></Form.Control>
    <Form.Label>Id:</Form.Label>
    <Form.Control type="text" value={productData!=null ? productData.id : "N/A"} disabled='disabled'></Form.Control>
    <Form.Label>Name:</Form.Label>
    <Form.Control type="text"  value={productData!=null ? productData.name : "N/A"} onChange={getData}></Form.Control>
    <Form.Label>Category</Form.Label>
    <Form.Control type="text" value={productData!=null ? productData.category : "N/A" } onChange={gCategory}></Form.Control>
    <Form.Label>Quantity:</Form.Label>
    <Form.Control type="text" value={productData!=null ? productData.quantity : "N/A"} onChange={getQuantity}></Form.Control>
    <Form.Label>Price: </Form.Label>
    <Form.Control type='text' value={productData!=null ? productData.price : "N/A"} onChange={gPrice}></Form.Control>
    <Form.Label>Made In: </Form.Label>
    <Form.Control type='text' value={productData!=null ? productData.madeInPhoto : "N/A"} onChange={getMadeIn}></Form.Control>
    <Form.Label>Discount: </Form.Label>
    <Form.Control type='text' value={productData!=null ? productData.discount : "N/A"} onChange={getDiscount}></Form.Control>
    <Form.Label>Ingredients: </Form.Label>
    <Form.Control type='text' value={productData!=null ? productData.discount : "N/A"} onChange={gIngredients}></Form.Control>
    <Form.Label>Barcode: </Form.Label>
    <Form.Control type='text' value={productData!=null ? productData.discount : "N/A"} onChange={gBarCode}></Form.Control>
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

export default AllProductsTable