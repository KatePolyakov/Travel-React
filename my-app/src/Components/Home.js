import React from "react";

import HomeGirls from './img/girls.png'

export default function Home(){
  return(
    <div className="row home">
    <div className="col-4 col-s-12 home-title">
      <h1>Travel around <br/>the world</h1>
      <div className="main-text">
        <p>Plan and book your perfect trip with expert advice, <br/>travel tips, destination information and
          <br/>inspiration from us</p>
      </div>
      <div><button className="home-button sign-up"><a href="#">Sign Up Now</a></button></div>

    </div>
    <div className="col-8 col-s-12 home-img">
      <img src={HomeGirls} alt=""/>
    </div>
  </div>
  );
}