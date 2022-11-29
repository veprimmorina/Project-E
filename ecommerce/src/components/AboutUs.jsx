
import React from 'react'
import { Carousel } from 'react-bootstrap'
import  '../Css/AboutUs.css'
import Footer from './Footer'
import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import { comment } from 'postcss';
import axios from 'axios';
import NavBari from './NavBari';



function AboutUs() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [comments, setComments] = useState();
  const [positive, setPositive] = useState();
  const [succesText, setSuccesText] = useState();
  const [currentDate, setCurrentDate] = useState();
  function getName(val){
    setName(val.target.value)
  }
  function getEmail(val){
    setEmail(val.target.value)
  }
  function getComment(val){
    setComments(val.target.value)
  }
  function sendComment(){
    var newDate = new Date();
    var date=newDate.getDate().toString();
    var month=newDate.getMonth();
    var updatedMonth= month+1;
    var year = newDate.getFullYear().toString();
    setCurrentDate(date + "/"+ updatedMonth.toString()+ "/" + year);
    var Contacts = {
       name: name,
       email: email,
       comment: comments,
       status: "",
       date: currentDate,
       isChecked: false
    }
    axios.post('https://localhost:7103/api/Contacs',Contacts).then(response=>{
      console.log(response.data);
    })
    setSuccesText('We have get succesfully your comment! ')
  }

  useState(()=>{
    axios.get('https://localhost:7103/api/Contacs/positive/status').then(response=>{
      setPositive(response.data);
    })
  })
  return (
    <div id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">

    <NavBari />
    
    <div className="jumbotron text-center">
      <h1>Nugget Market</h1> 
      <p>Online food Market</p> 
      
    </div>
    
    <div id="about" className="container-fluid">
      <div className="row">
        <div className="col-sm-8">
          <h2 className='text-center'>About Company Page</h2>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button className="btn btn-default btn-lg">Get in Touch</button>
        </div>
        <div className="col-sm-4">
          <img src='https://thebigmarket.in/static/media/fruits.7a0c69a7.jpeg' alt='photo'/>
        </div>
      </div>
    </div>
    
    <div className="container-fluid bg-grey">
      <div className="row">
        <div className="col-md-4 backg">
          <img src='https://static.vecteezy.com/system/resources/previews/003/819/588/original/mission-vision-values-web-page-template-free-vector.jpg' className='mt-5' />
        </div>
        <div className="col-md-8 backg">
          <h2 className='text-center'>Our Values</h2>
          <h4><strong className='colored'>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
          <p><strong className='colored'>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
    
    <div id="services" className="container-fluid text-center">
      <h2>SERVICES</h2>
      <h4>What we offer</h4>
      <div className="row ">
        <div className="col-sm-4">
          <i className='bi bi-truck h2' style={{color: "#008B8B"}}></i>
          
          <h4>Secure Transport</h4>
          <p>We deliver secure transport to your home</p>
        </div>
        <div className="col-sm-4">
        <i className="bi bi-balloon-heart-fill h2" style={{color: "red"}}></i>
          <h4>LOVE</h4>
         
          <p>We take care to deliver products with love</p>
        </div>
        <div className="col-sm-4">
        <i className="bi bi-emoji-laughing-fill h2" style={{color: "##D2691E"}}></i>
          <h4>Fresh products</h4>
          <p>Fresh products are our first priority</p>
        </div>
        <div className="col-sm-4 mt-5">
        <i className="bi bi-emoji-smile-fill h2" style={{color: "#FFD700"}}></i>
          <h4>Happines</h4>
          <p>Together with products, we also bring happines</p>
        </div>
        <div className="col-sm-4 mt-5">
        <i className="bi bi-check-square-fill h2" style={{color: "green"}}></i>
          <h4>Correctnes</h4>
          <p>We are always correct with our clients</p>
        </div>
        <div className="col-sm-4 mt-5">
        <i className="bi bi-lightning-charge-fill h2" style={{color: "blue"}}></i>
          <h4>Fast delivery</h4>
          <p>Fast delivery to your home address</p>
        </div>
      </div>
   
      <div className="row slideanim">
        <div className="col-sm-4">
          <span className="glyphicon glyphicon-leaf logo-small"></span>
          <h4>GREEN</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div className="col-sm-4">
          <span className="glyphicon glyphicon-certificate logo-small"></span>
          <h4>CERTIFIED</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div className="col-sm-4">
          <span className="glyphicon glyphicon-wrench logo-small"></span>
          <h4 style={{color:"#303030"}}>HARD WORK</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
      </div>
    </div>
    
    <div id="portfolio" className="container-fluid text-center bg-grey">
      <h2>Reviews from our customers</h2>
      <Carousel variant='white'>
        {
          positive!=undefined ?
        positive.map((message) => (
    <Carousel.Item className='bg-dark text-white' key={message.id}>
    <p className='mt-4 h3 lead'>{message.name}</p>
    <i>{"'"+message.comment+"'"}</i>
    <p className='mt-2'>{message.date}</p>
    <p>.</p>
    
  </Carousel.Item>
          )) : ""
        }
        </Carousel>
        
    </div>
    
   
    
    <div id="contact" className="container-fluid colored-background">
      <h2 className="text-center ">CONTACT US</h2>
      <div className="row colored-background">
        <div className="col-sm-5 text-center mt-5">
          <p>Contact us and we'll get back to you within 24 hours.</p>
          <p><span className="glyphicon glyphicon-map-marker"></span> Chicago, US</p>
          <p><span className="glyphicon glyphicon-phone"></span> +00 1515151515</p>
          <p><span className="glyphicon glyphicon-envelope"></span> myemail@something.com</p>
        </div>
        <div className="col-sm-7 mt-4">
          <div className="row">
            <div className="col-sm-6 form-group colored-background">
              <input className="form-control" id="name" name="name" placeholder="Full name" type="text" required onChange={getName}/>
            </div>
            <div className="col-sm-6 form-group colored-background">
              <input className="form-control mt-4 mt-md-0" id="email" name="email" placeholder="Email" type="email" required onChange={getEmail}/>
            </div>
          </div>
          <textarea className="form-control mt-4" id="comments" name="comments" placeholder="Comment" rows="5" onChange={getComment}></textarea>
          <div className="row colored-background">
            <div className="col-sm-12 form-group text-center">
              <button className="btn btn-primary text-center mt-3" onClick={()=> sendComment()}>Send</button>
             { <p className='text-white mt-3 '>{succesText}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
    

   <div>
    <p></p>
    <p></p></div>
    <Footer />
    

    
    
    </div>
  )
}

export default AboutUs