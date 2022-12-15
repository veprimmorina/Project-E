import axios from 'axios';
import { Input } from 'postcss';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import { format } from 'date-fns'
import { Link } from 'react-router-dom';


function InvoicesTable() {
  const [photoPath, setPhotoPath] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [date, setDate] = useState('');
  const [dateInvoice, setDateInvoice]= useState(false);
  const [price, setPrice] = useState();
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
         axios.get('https://localhost:7103/api/Invoices').then(response=>{
    setProducts(response.data);
   })
},[])



    function dateInvoices(){
      axios.get('https://localhost:7103/api/Invoices/date/'+date).then(response=>{
    setProducts(response.data);
    })
    }
    function getPhotoPath(val){
      setPhotoPath(val.target.value);
    }
    function getName(val){
      setName(val.target.value);
    }
    function getCategory(val){
      setCategory(val.target.value);
    }
    
    function getPrice(val){
      setPrice(val.target.value);
    }
    function productAdd(){
      setAddProduct(!addProduct);
    }

    function addNewProduct(){
      var Product = {
        photoPath: photoPath,
        name: name,
        category: category,
        
        price: price,
        amount: 1,
        clicked: 0,
        sold: 0
      }
      axios.post('https://localhost:7103/api/Products',Product).then(response=>{
        console.log(response.data);
       }) 
       setName('');
       setCategory('')
       setPhotoPath('');
       setPrice('');
       
       setAddProduct(false);
    }
    function getSearch(val){
     setSearched(val.target.value);
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

    function getDate(val){
        setDate(val.target.value)
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
    function saveProduct(id){
      setShowM(false);
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
     alert('Succesfully edited')
    }
     const todayInvoices = () => {
      axios.get("https://localhost:7103/api/Invoices/today/invoices").then(response=>{
        setProducts(response.data)
      })
     }
     const getSearchedInvoices = () => {
      axios.get("https://localhost:7103/api/Invoices/searched/"+searched).then(response=>{
        setProducts(response.data)
      })
     }
    
  return (
  <>
  <div className='d-flex justify-content-between'>
       <div>
        <input type='search' onChange={getSearch} />
        <Button variant='primary' className='ml-2' onClick={()=> getSearchedInvoices()}><i className='bi bi-search'></i></Button>
       </div>
       <div>
        <Button variant='warning' onClick={()=>todayInvoices()}>Today Invoices</Button>
       </div>
       <div>
       <input type='date' onChange={getDate}/>
       <Button onClick={()=>dateInvoices()}>Find</Button>
       </div>
  </div>
  <div className='dashboard-table'>
    {
      products=="" ? 
      <div className='text-center mt-5'>
        <b>0 invoices</b>
      </div> :
    <Table striped bordered hover size="sm">
    <thead>
      <tr>
      <th>#</th>
      <th>Customer Name and Surname</th>
      <th>Customer Email</th>
      <th>Date</th>
      <th>Time</th>
      <th></th>
      </tr>
    </thead>
    <tbody>
      
        {
          products.map((product) => (
            <>
            <tr>
            <td>{product.invoiceId}</td>
            <td>{product.customerName}</td>
            <td>{product.customerEmail}</td>
            <td>{product.date}</td>
            <td>{product.time}</td>
            <td>
              <Link to={'get/invoice/'+product.invoiceId} target="_blank">
              <Button><i className='bi bi-ticket-detailed'></i></Button>
              </Link>
            </td>
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
    <td><input type='text' placeholder='Category' onChange={getCategory} /></td>
    <td><input type='text' placeholder='Quantity'/></td>
    <td><input type='text' placeholder='Price' onChange={getPrice}/></td>
    <td><Button variant='success' onClick={()=> addNewProduct()}>Add</Button></td>
  </tr>
}
    </tbody>
    
  </Table>
}
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

export default InvoicesTable