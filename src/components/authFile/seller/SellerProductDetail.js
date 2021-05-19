import React, { Component } from 'react'
import SellerForm from './SellerForm';
import {Navbar,Nav,NavDropdown,FormControl,Form,Button,} from "react-bootstrap"
import { Link } from 'react-router-dom';

export default class SellerProductDetails extends Component {
    state={
        List:this.returnList(),
        currentIndex:-1,trigger:false,
        photos:[]
    }
    componentDidMount(){


        // put your Api here
        // const FetchPhotos=async(pageNumber)=>{
        //     const Access_key="JmnfHxfCQ78QopEcHQwwG-FeUBotC3WtauTfxB-mJ5M"
        //     const Respond =await fetch(`https://api.unsplash.com/photos/?client_id=${Access_key}&page=${pageNumber}&per_page=100`)
        //   const data=await Respond.json()
        //   console.log(data)
        //   this.setState({photos:data})

        //   }
        //   FetchPhotos()
         
          
    }
 
   returnList(){
       if(localStorage.getItem("product")==null)
       localStorage.setItem("product",JSON.stringify([]));
       return JSON.parse(localStorage.getItem("product"))
   }
   onADDorEdit=(data)=>{
       var List=this.returnList()
       if(this.state.currentIndex===-1)
       List.push(data)
       else
       {List[this.state.currentIndex]=data}
       localStorage.setItem("product",JSON.stringify(List))
       this.setState({List,currentIndex:-1})
    
   }
   
   handleEdit=index=>{
       this.setState({
           currentIndex:index,trigger:true
       })
   }
   setTrigFalse=e=>{
       this.setState({trigger:false})
   }
handleDelete=index=>{
    var List =this.returnList()
    List.splice(index,1)
    localStorage.setItem("product",JSON.stringify(List))
       this.setState({List,currentIndex:-1})
}
    render() {
        return (
            <div>
                 <header style={{position:"-webkit-sticky"}}>
              <Navbar bg="dark" expand="lg" >
  <Navbar.Brand href="#home" style={{color:"white"}}>Project Name</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" style={{color:"white"}} >
      <Nav.Link href="/dashboard" style={{color:"white"}}>Home</Nav.Link>
      <Link></Link>
      <Nav.Link href="/dashboard" style={{color:"white"}}>My Account</Nav.Link>
      <Nav.Link href="/dashboard" style={{color:"white"}}>Contact</Nav.Link>
      <Nav.Link href="/dashboard" style={{color:"white"}}>Chat</Nav.Link>
      
   
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-4" />
      <Button variant="outline-success" style={{color:"white"}}>Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
          </header>
          <Button variant="outline-dark" onClick={()=>this.setState({trigger:true})} style={{marginTop:"10px",marginLeft:"40%"}}>Add your Product to Sell</Button>
                
                <SellerForm onADDorEdit={this.onADDorEdit}
                
                currentIndex={this.state.currentIndex}
                List={this.state.List}
                trigger={this.state.trigger}
                setTrigFalse={this.setTrigFalse}
                />
                <br></br>
                <div className="">
                <h3>Following are your Products</h3>
                </div>
                {
                    // Ui ka structure bna diya h bas feild put karna h Api jo lagaoge
                      this.state.photos.map(photo=>{
                        return(
                        
                        <div className="column" style={{marginBottom:"20px"}}>
                        <div className="col s12 m6">
                          <div className="card">
                            <div className
                            ="card-image">
                              <img src={photo.urls.thumb} alt=" "/>
                              <span className="card-title"></span>
                              <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">+</i></a>
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
        )
    }
}
