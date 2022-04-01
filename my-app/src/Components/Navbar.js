import React from "react";

import RheaLogo from './img/Rhea.png'

export default function Navbar() {
  return(
    <div className="row navbar">
      <div className="col-4 col-s-12 logo">
        <img src={RheaLogo} alt="Rhea"/>
      </div>
      <div className="col-8 col-s-12 menu">
        <ul>
          <li><a href="#home"><span className="home-link">Home</span></a></li>
          <li><a href="#video">Video</a></li>
          <li><a href="#travel">Destinations</a></li>
          <li><a href="#booking">Booking</a></li>
          <li><a href="#"><span class="signin-link">Sign in</span></a></li>
        </ul>
      </div>
    </div>
  );
}