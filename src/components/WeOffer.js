import React from "react";
import "./WeOffer.css";

function WeOffer(props) {
  return ( 
     <div className="weOffer__item">
        <div className="weOffer__icon">
          <props.img />
        </div>
        <h5 className="weOffer__title">{props.title}</h5>
        <p className="weOffer__subtitle">{props.subtitle}</p>
      </div>

  );
}
export default WeOffer;
