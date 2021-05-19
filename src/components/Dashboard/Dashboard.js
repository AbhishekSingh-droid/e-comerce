import React, { useState,useEffect, } from 'react'
import {Navbar,Nav,NavDropdown,FormControl,Form,Button,Carousel} from "react-bootstrap"

import './Dashboard.css'

 import images from  "./5340982.jpg"
 import image2 from "./18980.jpg"
 import image3 from "./3255317.jpg"
 import { Map, GoogleApiWrapper } from 'google-maps-react';
  export const Dashboard=()=>  {

// code  for api starts
const [photos,setPhotos]=useState([])
const [pageNumber,setPageNumber]=useState(1)
const FetchPhotos=async(pageNumber)=>{
  const Access_key="JmnfHxfCQ78QopEcHQwwG-FeUBotC3WtauTfxB-mJ5M"
  const Respond =await fetch(`https://api.unsplash.com/photos/?client_id=${Access_key}&page=${pageNumber}&per_page=100`)
const data=await Respond.json()
console.log(data)
setPhotos(data)
}
useEffect(()=>{
  FetchPhotos(pageNumber);
},[pageNumber])



//code for Api ends


const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};

    
        return (<div> 
          <header style={{position:"-webkit-sticky"}}>
              <Navbar bg="dark" expand="lg" >
  <Navbar.Brand href="#home" style={{color:"white"}}>Project Name</Navbar.Brand>n
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" style={{color:"white"}} >
      <Nav.Link href="/dashboard" style={{color:"white"}}>Home</Nav.Link>
      <Nav.Link href="/seller" style={{color:"white"}}>Seller</Nav.Link>
      <Nav.Link href="#link" style={{color:"white"}}>Example link</Nav.Link>
      <Nav.Link href="/dashboard" style={{color:"white"}}>Contact</Nav.Link>
      <Nav.Link href="/dashboard" style={{color:"white"}}>Chat</Nav.Link>
   
      
    </Nav>
    <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{background:"red",marginBottom:"20px",paddingTop:"4px",marginRight:"60px"}}>
        <NavDropdown.Item href="#">Cart</NavDropdown.Item>
        <NavDropdown.Item href="#">Change Address</NavDropdown.Item>
        <NavDropdown.Item href="">Add card</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">My Account</NavDropdown.Item>
      </NavDropdown>
    <Form inline>
     
      
     </Form>
  </Navbar.Collapse>
</Navbar>
          </header>

<div>
  <main>
  <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-300"
          src={image2}
          width="100%"
          height="100vh"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-300"
          src={image3}
          width="100%"
          height="100vh"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-300"
          src={images}
          width="100%"
          height="100vh"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </main>
 
  
  <div className="right-sideBar" >
   {
     photos.map(photo=>{
       return(
       
       <div className="column" style={{marginBottom:"20px"}}>
       <div className="col s12 m6">
         <div className="card">
           <div className
           ="card-image">
             <img src={photo.urls.thumb} alt=" "/>
             <span className="card-title"></span>
             <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons" >+</i></a>
                    </div>
           <div className="card-content">
             <p>{photo.alt_description}</p><hr></hr>
             <p>{photo.likes}$</p>
           </div>
         </div>
       </div>
     </div>       

       )
     })
   }
    
    
     </div>


</div>



</div>


        )
    
}
