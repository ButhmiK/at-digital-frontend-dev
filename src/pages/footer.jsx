import React from "react";
import footerlogo from "../asssets/Logo.png";

function footer() {
  return (
    <div className="footer">
      <img className="footerlogo" src={footerlogo} alt="footerlogo" />
    </div>
  );
}

export default footer;
