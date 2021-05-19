import React, { Component } from 'react'
import {  Link } from "react-router-dom";
import "./SignIn.css"
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
                 <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" style={{color:"white"}} to={"/sign-in"}>Project Name</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                 <Link className="btn btn-dark btn-lg btn-block" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-dark btn-lg btn-block" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav></div>

     <form onSubmit={this.handleSubmit}>

       <h3>Log in</h3>

<div className="form-group">
    <label>Email</label>
    <input type="email" className="form-control" value={this.state.Email} onChange={this.handleInputChange} placeholder="Enter email" />
</div>

<div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control"value={this.state.Password} onChange={this.handleInputChange} placeholder="Enter password" />
</div>

<div className="form-group">
    <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="customCheck1" />
        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
    </div>
</div>

<Link type="submit" className="btn btn-dark btn-lg btn-block" to="/Dashboard">Sign in</Link>
<p className="forgot-password text-right">
    Forgot <a href="#">password?</a>
</p>
</form>

            </div>
        )
    }
}
