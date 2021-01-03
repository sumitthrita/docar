import React from "react";
import "./ServiceCard.css";

function ServiceCard(props) {
  return (
    <div className="serviceCard__container">
      <div className="serviceCard__imageBox" >
        <img 
          src={props.img}
          variant="top"
          alt="Car_vector_image"
          className="serviceCard__image"
        />
      </div>
      <div className="serviceCard__middle">
        <h3 className="serviceCard__title" >{props.title} </h3>
        <h5 className="serviceCard__price" >{props.price} </h5>
      </div>
      <div className="serviceCard__descriptionBox" >
        <p className="serviceCard__description" >{props.description} </p>
      </div>
    </div>
  );
}
export default ServiceCard;

{/* <div className="service">
      <div className="services__card">
        <div className="service__cardImage">
          <img
            src={props.img}
            variant="top"
            alt="Car_vector_image"
            className="service__img"
          />
          <div className="service__cardBody">
            <div class="Stitle">
              <div className="service__title">
                <div className="title">{props.title}</div>
                <p className="service__money"> {props.price}</p>
              </div>
            </div>
            <div className="service__cardText">
              <p className="service__description">{props.description}</p>
            </div>
            <Link to="/bikeInfo" >
            <Button
              // id="service___button"
              buttonName="Book Service"
              // className="service__cardButton"
            /></Link>
          </div>
        </div>
      </div>
    </div> */}