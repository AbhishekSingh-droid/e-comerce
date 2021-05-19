import React, { Component } from 'react'
import './SellerForm.css'
export default class SellerForm extends Component {
    
    state={
       ...this.returnSetState(),
    }
    state={
        trigger:this.props.trigger
    }
    handleInputChange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    returnSetState(){
        if(this.props.currentIndex===-1){
            return{
                jobTitle:"",
                UserRole:"",
                FirstName:"",
                LastName:"",
                Email:"",
                Phone:"",
                Status:false,
            }
            
        }
        else return this.props.List[this.props.currentIndex]
       
    }
    componentDidUpdate(prevProps){
        if(prevProps.currentIndex!==this.props.currentIndex|| prevProps.List.length!==this.props.List.length)
        {this.setState({
            ...this.returnSetState()
        })}
        

    }
    setTrigFalse=e=>{
        this.props.setTrigFalse()
    }
    handleSubmit=e=>{
        e.preventDefault()
        console.log(this.state)
        this.props.onADDorEdit(this.state)
    }
    render() {
        return (this.props.trigger)?(
            <div  className="popup">
                <div className="popup-inner">
                    <button className="close-btn" onClick={this.setTrigFalse}>close</button>
                    <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className='field'>
                        <label>job title:  </label>
                        <input
                        type="text"
                        name="jobTitle"
                        value={this.state.jobTitle}
                        onChange={this.handleInputChange}
                        >
                        </input>
                    </div>
                    <br></br>
                    <div>
                        <label>User Role:  </label>
                        <input
                        type="text"
                        name="UserRole"
                        value={this.state.UserRole}
                        onChange={this.handleInputChange}
                        >
                        </input>
                    </div>
                    <br></br>
                    <div>
                        <label>First Name:  </label>
                        <input
                        type="text"
                        name="FirstName"
                        value={this.state.FirstName}
                        onChange={this.handleInputChange}
                        >
                        </input>
                    </div>
                    <br></br>
                    <div>
                        <label>Last Name:  </label>
                        <input
                        type="text"
                        name="LastName"
                        value={this.state.LastName}
                        onChange={this.handleInputChange}
                        >
                        </input>
                    </div>
                    <br></br>
                    <div>
                        <label>Email:  </label>
                        <input
                        type="text"
                        name="Email"
                        value={this.state.Email}
                        onChange={this.handleInputChange}
                        >
                        </input>
                    </div>
                    <br></br>
                    <div>
                        <label>Phone number:  </label>
                        <input
                        type="text"
                        name="Phone"
                        value={this.state.Phone}
                        onChange={this.handleInputChange}
                        >
                        </input>
                    </div>
                    <br></br>
                    <div>
                        <label>Status:  </label>
                        <input
                        type="text"
                        name="Status"
                        value={this.state.Status}
                        onChange={this.handleInputChange}
                        >
                        </input>
                    </div>
                    <button type="submit" >Save</button>
                </form>
                </div>
                
            </div>
        ):"";
        
    }
}
