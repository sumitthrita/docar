import React, { Component } from "react";
import Button from "./Button";
import "./ContactDemo.css";
import ContactInfo from "./ContactInfo";
import {Link} from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: null,
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="contactDemo__container">
        <header className="contactDemo__header">
          <h2>Find Us</h2>
          <div id="bar"></div>
        </header>
        <div className="contactDemo__body">
          <div className="contactDemo__info">
            <ContactInfo />
          </div>
          <div className="contactDemo__box">
            <h2 className="contactDemo__subtitle">Reach Us Anytime.</h2>
            <form className="contactDemo__form">
              <input
                onChange={this.handleChange}
                value={this.state.name}
                type="text"
                name="name"
                placeholder="Name"
                className="contactDemo__input"
              />
              <input
                onChange={this.handleChange}
                value={this.state.phone}
                type="text"
                maxLength="10"
                name="contact"
                placeholder="Contact Number"
                className="contactDemo__input"
              />
              <input
                onChange={this.handleChange}
                value={this.state.email}
                type="email"
                name="email"
                placeholder="Email Id"
                className="contactDemo__input"
              />
              <textarea
                onChange={this.handleChange}
                row="20"
                value={this.state.message}
                type="text"
                name="message"
                placeholder="Your Query"
                className="contactDemo__input contactDemo__message"
              />
              <div className="contactDemo__button">
                <Button buttonName="Reach Us" />
              </div>
            </form>
          </div>
        </div>
        <div className="feedback__container" >
          <Link to="./feedback">
            <Button buttonName="Your Valuable Feedback" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Contact;
