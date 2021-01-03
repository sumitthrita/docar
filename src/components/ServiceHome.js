import React, { Component } from "react";
import ServiceCardHome from "./ServiceCardHome";
import ServiceCardDetails from "./ServiceCardDetails";
import "./ServiceHome.css";

class ServiceHome extends Component {
  render() {

    function createService(details) {
      return (
        <ServiceCardHome
          key={details.title}
          img={details.imgURL}
          title={details.title}
          price={details.price}
          description={details.description}
        />
      );
    }

    return (
      <div className="container" >
        <div className="serviceHome__main">
          <div className="serviceHome__mainTitle">
            <h2>Our Special Services</h2>
            <div id="bar"></div>
          </div>
          <div className="serviceHome__details">
            {ServiceCardDetails.map(createService)}
          </div>
        </div>
      </div>
    );
  }
}
export default ServiceHome;
