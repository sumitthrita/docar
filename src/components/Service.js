import React, { Component } from "react";
import ServiceCard from "./ServiceCard";
import Header from "./Header";
import Footer from "./Footer";
import ServiceCardDetails from "./ServiceCardDetails";
import ServiceImage from "../components/assets/service1.jpg";
import Customise from "./Customise";
import "./Service.css";
import CarData from './CarData';

class Service extends Component {
  render() {

    function createService(details) {
      return (
        <ServiceCard
          key={details.title}
          img={details.imgURL}
          title={details.title}
          price={details.price}
          description={details.description}
        />
      );
    }

    return (
      <div>
        <Header />
        <div className="service__imageBox">
            <img
              src={ServiceImage}
              alt="carImage"
              className="service__image"
            ></img>
        </div>
        <div className="service__main">
          <CarData />
          <div className="service__mainTitle">
            <h2>Special Services</h2>
            <div id="bar"></div>
          </div>
          <div className="service__details">
            {ServiceCardDetails.map(createService)}
          </div>
          <Customise />
        </div>
        <Footer />
      </div>
    );
  }
}
export default Service;
