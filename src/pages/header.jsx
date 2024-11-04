import React from "react";
import "./header.css";
import logo from "../asssets/Logo.png";

function header() {
  return (
    <div className="header">
      <img className="headerlogo" src={logo} alt="logo" />
      <div>
        <ul className="body1">
          <li> SERVICES</li>
          <li> ABOUT US</li>
          <li> CONTACT US</li>
          <li> CAREERS</li>
        </ul>
      </div>
    </div>
  );
}

export default header;
