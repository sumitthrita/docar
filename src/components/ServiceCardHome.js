import React from "react";
import "./ServiceCardHome.css";

function ServiceCardHome(props) {
  return (
    <div className="serviceCardHome__container">
      <div className="serviceCardHome__imageBox" >
        <img 
          src={props.img}
          variant="top"
          alt="Car_vector_image"
          className="serviceCardHome__image"
        />
      </div>
      <div className="serviceCardHome__middle">
        <h3 className="serviceCardHome__title" >{props.title} </h3>
        <h5 className="serviceCardHome__price" >{props.price} </h5>
      </div>
    </div>
  );
}
export default ServiceCardHome;