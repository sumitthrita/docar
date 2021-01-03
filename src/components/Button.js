import React from "react";
import "./Button.css";
import { Button } from "react-bootstrap";

const Buttons = ({buttonName}) => {
  return (
    <Button variant="dark" className="button">
      {buttonName}
    </Button>
  );
};
export default Buttons;
