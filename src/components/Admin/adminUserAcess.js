import React, { Component } from 'react'
import {  Link } from "react-router-dom";
import "./adminUserAcess.css"
export default class SignIn extends Component {
state={Email:"",Password:""}
handleSubmit=e=>{
  e.preventDefault()
  ///handle authentication here
  console.log(this.state.Email)
  console.log(this.state.Password)
}

    render() {
        return (
            <div>
                
            

     <form onSubmit={this.handleSubmit}>

       <h3>Admin Dashboard log In</h3>

<div className="form-group">
    <label>Email</label>
    <input type="email" className="form-control"  onChange={this.handleInputChange} placeholder="Enter email" />
</div>

<div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control"  onChange={this.handleInputChange} placeholder="Enter password" />
</div>

<div className="form-group">
    <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="customCheck1" />
        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
    </div>
</div>

<Link type="submit" className="btn btn-dark btn-lg btn-block" to="/Admin-Dashboard">Sign in</Link>
<p className="forgot-password text-right">
    Forgot <a href="#">password?</a>
</p>
</form>

            </div>
        )
    }
}
