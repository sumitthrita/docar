import ServiceSilverImg from '../components/assets/serviceSilver.jpg';
import ServiceGoldImg from '../components/assets/serviceGold.jpg';
import ServicePlatinumImg from '../components/assets/servicePlatinum.jpeg';
import ServiceDiamondImg from '../components/assets/serviceDiamond.jpg';
import ServiceAccidentImg from '../components/assets/serviceAccident.jpg';
import ServiceOnRoadImg from '../components/assets/serviceOnRoad.jpg';


const ServiceCardDetails = [
  {
    imgURL: ServiceSilverImg ,
    title: "Silver Service",
    price: "Rs. 700",
    description:
      "Vacuum cleaning and washing.",
  },
  {
    imgURL: ServiceGoldImg,
    title: "Gold Service",
    price: "Rs. 1500",
    description:
      "Silver + Engine Oil Change. Filter Replacement",
  },
  {
    imgURL: ServicePlatinumImg,
    title: "Platinum Service",
    price: "Rs. 4000",
    description:
      "Gold + Checking Lights, tyres, exhaust, battery and breaks. Engine Tuning.",
  },
  {
    imgURL: ServiceDiamondImg,
    title: "Diamond Service",
    price: "Rs. 5000",
    description: 
      "Platinum + Checking hydraulic fluid and coolant levels. Suspension check. Steering alignment"
  },
  {
    imgURL: ServiceAccidentImg,
    title: "Accidental Service",
    price: "Rs. 2000+",
    description: 
      "Any damage will be taken care. Price depends on damage."
  },
  {
    imgURL: ServiceOnRoadImg,
    title: "On Road Service",
    price: "Rs. 2000+",
    description: 
      "Provide on road assist 24*7. Price depends on condition and distance from store."
  },
];

export default ServiceCardDetails;
