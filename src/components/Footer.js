import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Link } from "react-router-dom";
import Image from "../components/assets/logo.jpg";

import { Navbar} from "react-bootstrap";


const Footer = () => (
  <footer>
    <div className="footer__main">
      <div className="footer__items">
        <div className="footer__logo">
          <Navbar.Brand href="/">
            <img className="footer__logoImage" src={Image} alt="twn-logo" />
          </Navbar.Brand>

          <ul className="footer__company">
            <li>
              <h1 className="footer__name">Dr. CAR</h1>
            </li>
            <li>
              <h3 className="footer__tagline" >Heal & Fix It Away.</h3>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="footer__mainItems">
        <h4 className="footer__title">Menu</h4>
        <ul className="footer__subtitle">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div> */}

      <div className="footer__items">
        <h3 className="footer__heading">About Us</h3>
        <ul className="footer__subheading">
          <li>Functioning</li>
          <li>Why Us?</li>
          <li>FAQs</li>
        </ul>
      </div>

      <div className="footer__items">
        <h3 className="footer__heading">Daily Updates</h3>
        <p className="footer__subheading">
          Subscribe Us.
        </p>
        <form className="footer__form">
          <input
            type="email"
            name="email"
            placeholder="Enter EmailId"
            className="footer__formEmail"
          ></input>
          <input
            type="submit"
            value="Subscribe"
            className="footer__subscribe"
          ></input>
        </form>
      </div>
    </div>

    <div className="footer__media">
      <ul class="footer__mediaList">
        <li>
          <a href="https://www.facebook.com" className="facebook media" >
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a href="https://instagram.com" className="instagram media" >
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="https://twitter.com" className="twitter media" >
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sumit1197" className="linkedIn media" >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com" className="youtube media" >
            <YouTubeIcon />
          </a>
        </li>
      </ul>
    </div>

    <div className="footer__legal">
      <ul className="footer__legalList">
        <li>
          <a href="./App.js">Terms &amp; Conditions</a>
        </li>
        <li>
          <a href="./App.js">Privacy Policy</a>
        </li>
        <li>&copy; 2021 Copyright SUMIT KUMAR</li>
      </ul>
    </div>
  </footer>
);
export default Footer;
