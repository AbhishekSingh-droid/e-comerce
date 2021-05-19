import React, { Component } from 'react'
import {  Link } from "react-router-dom";
import "./SignIn.css"
 
export default class SignUp extends Component {
    render() {
        return (
            <div className="App">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
              <div className="container">
                <Link className="navbar-brand" to={"/sign-in"}>Project Name</Link>
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
            </nav>
            <form>
            <h3>Register</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" required />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" required />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" required />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" required />
            </div>

            <Link type="submit" to="/Dashboard" className="btn btn-dark btn-lg btn-block">Register</Link>
            <p className="forgot-password text-right">
                Already registered?<Link to="/sign-in" >sign In</Link>
            </p>
        </form>
        </div>
       
        )
    }
}
