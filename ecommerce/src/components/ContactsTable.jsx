import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button, Form, Modal, Table } from 'react-bootstrap';
import { Textarea } from 'react-bootstrap-icons';

function ContactsTable({commentId}) {
    const [contacts,setContact]=useState();
    const [cStatus, setStatus] = useState();
    const [contactId, setContactId] = useState();
    const [subject, setSubject] = useState();
    const [body, setBody] = useState();
    const [replyContact, setReplyContact] = useState();
    const [message, setMessage] = useState('*Please confirm twice the change of status');
    const [showM, setShowM] = useState(false);
    const handleClose = () => setShowM(false);
    const handleShow = (id) => {setShowM(true); 
      axios.get('https://localhost:7103/api/Contacs/'+id).then(response=>{
        setReplyContact(response.data);
       }) 
    };
    useEffect(()=>{
        axios.get('https://localhost:7103/api/Contacs').then(response=>{
            setContact(response.data);
           }) 
    },[])
    function getSubject(val){
         setSubject(val.target.value);
    }
    function getBody(val){
        setBody(val.target.value);
    }
    const reply = (id) => {
        setShowM(false)
        axios.get('https://localhost:7103/api/Contacs/send/'+replyContact.email+"/"+subject+"/"+body).then(response=>{
            console.log(response.data);
           }) 
    
    }
    function getStatus(val){
        setStatus(val.target.value);
    }
    function editContact(id){
        
        axios.get('https://localhost:7103/api/Contacs/'+id).then(response=>{
            setContactId(response.data);
           }) 
           alert(cStatus)
     var Contacs = {
       contactsId: contactId.contactsId,
        name: contactId.name,
        email: contactId.email,
        comment: contactId.comment,
        status: cStatus,
        date: contactId.date,
        isChecked: true
     }
     console.log(Contacs)
     axios.put('https://localhost:7103/api/Contacs/'+id, Contacs).then(response=>{
        console.log(response.data);
     })
    }
  return (
    <>
    <div className='dashboard-table'>
    <div style={{overflow: "auto"}}>
    <p className='lead text-center text-danger'>{message}</p>
    <Table striped bordered hover size="sm" style={{overflow: "scroll"}}>
      
    <thead>
      <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Comment</th>
      <th>Date</th>
      <th>Status</th>
      <th>Checked</th>
      </tr>
    </thead>
    <tbody>
      
        {
          contacts!=undefined ?  
          contacts.map((contact) => (
            <>
            <tr className={contact.contactsId==commentId ? "  opacity-50 shadow bg-dark contact" : ""}>
            <td>{contact.contactsId}</td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td><textarea value={contact.comment} rows='5' disabled></textarea></td>
            <td>{contact.date}</td>
            <td>{contact.status}<select onChange={getStatus}>{contact.status=="" ?<><option></option> <option value='Positive'>Positive</option><option value='Neutral'>Neutral</option> </>: contact.status=="Neutral" ? <><option value='Neutral'>Neutral</option> <option value='Positive'>Positive</option></>: <><option value='Positive'>Positive</option><option value='Neutral'>Neutral</option></> }</select></td>
            <td>{contact.isChecked==false ? <input type='checkbox' />: <input type='checkbox' checked />}</td>
            <td><Button variant='success' onClick={()=> editContact(contact.contactsId)}>Submit</Button></td>
            <td><Button variant='primary' onClick={()=> handleShow(contact.contactsId)}><i className="bi bi-reply-fill"></i>Reply</Button></td>
            </tr>
            </>
            
          ))
          
        : ""
}
    </tbody>
    
  </Table>
  </div>
  </div>
  <Modal show={showM} onHide={handleClose} className='text-center mt-5'>
  <Modal.Header closeButton>
    <Modal.Title className='text-center'>Reply</Modal.Title>
  </Modal.Header>
  <Modal.Body>
   <Form>

    <Form.Label>Contact email:</Form.Label>
    <Form.Control type="text" disabled value={replyContact!=null ? replyContact.email : "N/A"}></Form.Control>
    <Form.Label>Subject: </Form.Label>
    <Form.Control type='text' onChange={getSubject}></Form.Control>
    <Form.Label>Body Text: </Form.Label>
    <textarea className='form-control' rows='5' onChange={getBody}></textarea>
   </Form>
  </Modal.Body>
  <Modal.Footer className='text-center'>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={()=> reply(replyContact.id)}>
      Send
    </Button>
  </Modal.Footer>
</Modal>
</>
  )
}

export default ContactsTable