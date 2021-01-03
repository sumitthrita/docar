import React from 'react';
import Image from '../components/assets/logo.jpg';
import './Header.css';
import {Navbar,Nav} from 'react-bootstrap';
import  {NavLink} from 'react-router-dom';



const Header =()=>{


return (
 <Navbar sticky="top" className="headnav" expand="lg" >
  <Navbar.Brand href="/"><img className="header__logoImage" src={Image} alt="twn-logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" id="navbar-toggler-icon" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="elements" id="items"  >
      <NavLink to="/" id="element1" exact activeClassName="navbar__link--active"   >Home</NavLink>
      <NavLink to="/services" id="element2" exact activeClassName="navbar__link--active"  >Service</NavLink>
      <NavLink to="/contact" id="element3" activeClassName="navbar__link--active">Contact</NavLink>
      <NavLink to="/login" id="element4"  activeClassName="navbar__link--active">Login</NavLink>
      <NavLink to="/signup" id="element5" activeClassName="navbar__link--active" >SignUp</NavLink>
    </Nav>
    
  </Navbar.Collapse>
</Navbar> 
)
}




export default Header; 