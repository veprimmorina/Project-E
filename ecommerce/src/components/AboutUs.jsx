
import React from 'react'
import { Carousel } from 'react-bootstrap'
import  '../Css/AboutUs.css'
import Footer from './Footer'
import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import { comment } from 'postcss';
import axios from 'axios';



function AboutUs() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [comments, setComments] = useState();
  const [positive, setPositive] = useState();
  const [succesText, setSuccesText] = useState();
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
    var Contacts = {
       name: name,
       email: email,
       comment: comments,
       status: "",
       date: '2022',
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

    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>                        
          </button>
          <a class="navbar-brand" href="#myPage">Logo</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#pricing">PRICING</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </nav>
    
    <div class="jumbotron text-center">
      <h1>Company</h1> 
      <p>We specialize in blablabla</p> 
      <form>
        <div class="input-group">
          <input type="email" class="form-control" size="50" placeholder="Email Address" required />
          <div class="input-group-btn">
            <button type="button" class="btn btn-danger">Subscribe</button>
          </div>
        </div>
      </form>
    </div>
    
    <div id="about" class="container-fluid">
      <div class="row">
        <div class="col-sm-8">
          <h2 className='text-center'>About Company Page</h2>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button class="btn btn-default btn-lg">Get in Touch</button>
        </div>
        <div class="col-sm-4">
          <img src='https://thebigmarket.in/static/media/fruits.7a0c69a7.jpeg' alt='photo'/>
        </div>
      </div>
    </div>
    
    <div class="container-fluid bg-grey">
      <div class="row">
        <div class="col-sm-4">
          <img src='https://static.vecteezy.com/system/resources/previews/003/819/588/original/mission-vision-values-web-page-template-free-vector.jpg' className='mt-5' />
        </div>
        <div class="col-sm-8">
          <h2 className='text-center'>Our Values</h2>
          <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
          <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
    
    <div id="services" class="container-fluid text-center">
      <h2>SERVICES</h2>
      <h4>What we offer</h4>
      <div class="row ">
        <div class="col-sm-4">
          <i className='bi bi-truck h2'></i>
          
          <h4>Secure Transport</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div class="col-sm-4">
        <i class="bi bi-balloon-heart-fill h2"></i>
          <h4>LOVE</h4>
         
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div class="col-sm-4">
        <i class="bi bi-emoji-laughing h2"></i>
          <h4>Fresh products</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
      </div>
   
      <div class="row slideanim">
        <div class="col-sm-4">
          <span class="glyphicon glyphicon-leaf logo-small"></span>
          <h4>GREEN</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div class="col-sm-4">
          <span class="glyphicon glyphicon-certificate logo-small"></span>
          <h4>CERTIFIED</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div class="col-sm-4">
          <span class="glyphicon glyphicon-wrench logo-small"></span>
          <h4 style={{color:"#303030"}}>HARD WORK</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
      </div>
    </div>
    
    <div id="portfolio" class="container-fluid text-center bg-grey">
      <h2>Portfolio</h2>
      <h4>What we have created</h4>
      <div class="row text-center slideanim">
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="paris.jpg" alt="Paris" width="400" height="300"/>
            <p><strong>Paris</strong></p>
            <p>Yes, we built Paris</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="newyork.jpg" alt="New York" width="400" height="300"/>
            <p><strong>New York</strong></p>
            <p>We built New York</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="sanfran.jpg" alt="San Francisco" width="400" height="300"/>
            <p><strong>San Francisco</strong></p>
            <p>Yes, San Fran is ours</p>
          </div>
        </div>
      </div>
      
      <h2>Reviews from our customers</h2>
      <Carousel className='bg-dark text-white'>
        {
          positive!=undefined ?
        positive.map((message) => (
            
          <Carousel.Item>
          <p className='mt-4 h3 lead'>{message.name}</p>
          <i>{"'"+message.comment+"'"}</i>
          <p className='mt-2'>2022-10-10</p>
          <p>.</p>
          
        </Carousel.Item>
        )) : ""
        }
        
        
      </Carousel>
    </div>
    
    <div id="pricing" class="container-fluid">
      <div class="text-center row">
        <h2>Gallery</h2>
        <h4>Choose a payment plan that works for you</h4>
        <div className='col-md'>
          <img src='https://images.jdmagicbox.com/comp/bangalore/n9/080pxx80.xx80.181123174454.r9n9/catalogue/the-big-market-attibele-bangalore-supermarkets-saxcbazrjk.jpg' className='rounded'/>
        </div>
        <div className='col-md ml-auto mr-auto'>
        <img src='https://thumbs.dreamstime.com/b/interior-carrefour-hypermarket-wallonia-belgium-july-shopping-cornflakes-section-90887980.jpg' className=' w-50 rounded '/>
        <img src='https://www.sentrarak.com/wp-content/uploads/2017/02/visi-misi-marmon.jpg' className='mt-3 rounded w-50'/>
    
        </div>
        <div className='col-md'>
          <img src='https://eatbook.sg/wp-content/uploads/2020/08/prime-supermarket.jpg' className='w-50'/>
        </div>
      </div>
      
    </div>
    
    <div id="contact" class="container-fluid colored-background">
      <h2 class="text-center ">CONTACT US</h2>
      <div class="row colored-background">
        <div class="col-sm-5 text-center mt-5">
          <p>Contact us and we'll get back to you within 24 hours.</p>
          <p><span class="glyphicon glyphicon-map-marker"></span> Chicago, US</p>
          <p><span class="glyphicon glyphicon-phone"></span> +00 1515151515</p>
          <p><span class="glyphicon glyphicon-envelope"></span> myemail@something.com</p>
        </div>
        <div class="col-sm-7 mt-4">
          <div class="row">
            <div class="col-sm-6 form-group colored-background">
              <input class="form-control" id="name" name="name" placeholder="Full name" type="text" required onChange={getName}/>
            </div>
            <div class="col-sm-6 form-group colored-background">
              <input class="form-control" id="email" name="email" placeholder="Email" type="email" required onChange={getEmail}/>
            </div>
          </div>
          <textarea class="form-control mt-4" id="comments" name="comments" placeholder="Comment" rows="5" onChange={getComment}></textarea>
          <div class="row colored-background">
            <div class="col-sm-12 form-group text-center">
              <button class="btn btn-primary text-center mt-3" onClick={()=> sendComment()}>Send</button>
             { <p className='text-white mt-3 '>{succesText}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
    

    <img src="/w3images/map.jpg" class="w3-image w3-greyscale-min" style={{width:"100%"}} />
    <video autoPlay loop muted id='video'>
        <source src='https://youtu.be/I__DPhJkKWE' />
    </video>
    <Footer />
    

    
    
    </div>
  )
}

export default AboutUs