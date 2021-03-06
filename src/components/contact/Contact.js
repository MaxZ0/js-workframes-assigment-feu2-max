import React from "react";
import "../../styles/contact.scss";

function Contact() {
  return (
    <div className="container">
      <h3>Contact</h3>
      <h4>Adress</h4>
      <div className="flex">
        <p>Street: </p>
        <p>3782 Wilson Avenue</p>
      </div>
      <div className="flex">
        <p>City:</p>
        <p>Richardson</p>
      </div>
      <div className="flex">
        <p>State:</p>
        <p>TX</p>
      </div>
      <div className="flex">
        <p>State Full:</p>
        <p>Texas</p>
      </div>
    </div>
  );
}

export default Contact;
