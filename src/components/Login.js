import React from "react";
import "./Login.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div>
      <Header />
      <div className="login__form">
        <h2>Login</h2>
        <form>
          <div className="inputBox">
            <input type="email" name="" required="" />
            <label>Email Address</label>
          </div>
          <div className="inputBox">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <input type="submit" name="" value="Login" />
          <p className="login">
            Don't have an account? <Link to="/signup">SignUp</Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default Login;
