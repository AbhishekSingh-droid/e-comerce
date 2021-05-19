import React, { Component } from 'react'
import DetailForm from './detailForm';
import {Navbar,Nav,NavDropdown,FormControl,Form,Button,} from "react-bootstrap"
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
export default class detailFormList extends Component {
    state={
        List:this.returnList(),
        currentIndex:-1,trigger:false
    }
   returnList(){
       if(localStorage.getItem("Form")==null)
       localStorage.setItem("Form",JSON.stringify([]));
       return JSON.parse(localStorage.getItem("Form"))
   }
   onADDorEdit=(data)=>{
       var List=this.returnList()
       if(this.state.currentIndex===-1)
       List.push(data)
       else
       {List[this.state.currentIndex]=data}
       localStorage.setItem("Form",JSON.stringify(List))
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
    localStorage.setItem("Form",JSON.stringify(List))
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
      <Nav.Link href="#home" style={{color:"white"}}>Home</Nav.Link>
      <Nav.Link href="#link" style={{color:"white"}}>Seller</Nav.Link>
      <Nav.Link href="#link" style={{color:"white"}}>My Account</Nav.Link>
      <Nav.Link href="#link" style={{color:"white"}}>Contact</Nav.Link>
      <Nav.Link href="#link" style={{color:"white"}}>Chat</Nav.Link>
      <Nav.Link href="#link" style={{color:"white"}}>Admin login</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{color:"white"}}>
        <NavDropdown.Item href="#">Action</NavDropdown.Item>
        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
        <NavDropdown.Item href="">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success" style={{color:"white"}}>Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
          </header>
                <button onClick={()=>this.setState({trigger:true})}>Add User</button>
                <DetailForm onADDorEdit={this.onADDorEdit}
                
                currentIndex={this.state.currentIndex}
                List={this.state.List}
                trigger={this.state.trigger}
                setTrigFalse={this.setTrigFalse}
                />
                {/* {
                    
                    //    <div className="ui middle aligned divided list">
                    //        <div className="item">
                    //             <div className="content">
                    //                ID: {index}
                    //                 </div> <hr></hr> 
                    //                 <div className="content">
                    //                Name: {item.FirstName+item.LastName}
                    //                 </div> 
                    //                 <hr></hr>
                    //                 <div className="content">
                    //                Email: {item.Email}
                    //                 </div><hr></hr>
                    //                 <div className="content">
                    //                Role: {item.UserRole}
                    //                 </div> <hr></hr>
                    //                 <div className="content">
                    //                Team --
                    //                <br></br>
                    //                <hr></hr>
                    //                Status {item.Status}

                    //                 </div>                             
                    //                 <div className="left floated content">
                    //                     Action
                    //              <div className="ui button" onClick={()=>this.handleEdit(index)}>Edit</div>
                    //              <div className="ui button" onClick={()=>this.handleDelete(index)}>delete</div>
                    //                      </div>  
                    //        </div>
                    //        <hr></hr>
                    //    </div> */}

                    <Table celled>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Username</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Phone number</Table.HeaderCell>
                        <Table.HeaderCell>Example 2 </Table.HeaderCell>
                        <Table.HeaderCell>Example 3 </Table.HeaderCell>
                        <Table.HeaderCell>Example 4 </Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                
                    <Table.Body>
                       {

                           this.state.List.map((item,index)=>{
                               return(
                                <Table.Row>
                                <Table.Cell>
                                  <Label ribbon>{item.FirstName+item.LastName}</Label>
                                </Table.Cell>
                                <Table.Cell>{item.Email}</Table.Cell>
                                <Table.Cell>{item.Phone}</Table.Cell>
                                <Table.Cell>{item.Status}</Table.Cell>
                                <Table.Cell>{item.Status}</Table.Cell>
                                <Table.Cell>{item.Status}</Table.Cell>
                              </Table.Row>
                               )
                           })
                       }
                      
                     
                    </Table.Body>
                
                    <Table.Footer>
                      <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                          <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                              <Icon name='chevron left' />
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                              <Icon name='chevron right' />
                            </Menu.Item>
                          </Menu>
                        </Table.HeaderCell>
                      </Table.Row>
                    </Table.Footer>
                  </Table>



                       
                    
                

            </div>
        )
    }
}
<Table.Row>
                        <Table.Cell>
                          <Label ribbon>First</Label>
                        </Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                      </Table.Row>