import React, { useState } from "react";
import Button from "./Button";
import "./SignUp.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";


function RegistrationForm(props) {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    password: "",
  });


  return (
    <div>
      <Header />
      <div className="signup__form">
        <h2>Sign Up</h2>
        <form>
          <div className="inputBox">
            <input type="text" name="" required="" />
            <label>First Name</label>
          </div>
          <div className="inputBox">
            <input type="text" name="" required="" />
            <label>Last Name</label>
          </div>
          <div className="inputBox">
            <input type="email" name="" required="" />
            <label>Email Address</label>
          </div>
          <div className="inputBox">
            <input type="number" name="" required="" />
            <label>Contact Number</label>
          </div>
          <div className="inputBox">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <div className="inputBox">
            <input type="password" name="" required="" />
            <label>Confirm Password</label>
          </div>
          <input type="submit" name="" value="Sign Up" />
          <p className="login">
            Already have an account? <Link to="/Login">Login</Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default RegistrationForm;
