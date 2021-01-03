import React from "react";
import "./AboutUs.css";
import Image from '../components/assets/aboutUsImg.jpg';
import ToolsIcon from '../components/assets/toolsIcon1.jpg';
import WeOffer from "./WeOffer";
import WeOfferDetails from "./WeOfferDetails";
// import FixingProcess from "./FixingProcess";
import FixingProcessDetails from "./FixingProcessDetails";

const Aboutus = () => {
  function createweoffer(content) {
    return (
      <WeOffer
        key={content.id}
        img={content.iconURL}
        title={content.title}
        subtitle={content.subtitle}
      />
    );
  }
  return (
    <div className="container" >
          <div className="aboutUs__container">
            <div className="aboutUs__title">
              <h2>Greetings! </h2>
              <div id="bar"></div>
            </div>
            <div className="aboutUs__content">
              <p className="content">
              It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using Lorem Ipsum
              is that it has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable English. Many
              desktop publishing packages and web page editors now use Lorem Ipsum as their 
              default model text, and a search for 'lorem ipsum' will uncover many web sites 
              still in their infancy. Various versions have evolved over the years, sometimes 
              by accident, sometimes on purpose (injected humour and the like).
              </p>
              <img src={Image} alt="Car_Image" className="aboutUs__contentImg" />
            </div>
          </div>
          <div className="weOffer__container">
            <div className="weOffer__title">
              <h2>We offer </h2>
              <div id="bar"></div>
            </div>
            <div class="weOffer__details">
              {WeOfferDetails.map(createweoffer)}
            </div>
          </div>
          <div className="weOffer__container">
            <div className="weOffer__title">
              <div className="fixingProcess" >
                <h2>Fixing Process </h2>
                <img src={ToolsIcon} alt="Tools_Icon" className="toolsIcon" />
              </div>
              <div id="bar"></div>
            </div>
            <div class="weOffer__details">
              {FixingProcessDetails.map(createweoffer)}
            </div>
          </div>
    </div>
  );
};
export default Aboutus;
