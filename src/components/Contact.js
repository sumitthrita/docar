import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContactDemo from './ContactDemo';


class Contact extends Component {
  render () {
    return (
      <div>
        <Header />
        <ContactDemo />
        <Footer />
      </div>
    );
  }
}

export default Contact;
