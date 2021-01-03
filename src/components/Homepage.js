import React from "react";
import Header from "./Header";
import ServiceHome from './ServiceHome';
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Contact from './ContactDemo';

const Homepage = () => {
  
  return (
    <div>
      <Header />
      <AboutUs />
      <ServiceHome />
      <Contact/>
      <Footer />
    </div>
  );
};
export default Homepage;
