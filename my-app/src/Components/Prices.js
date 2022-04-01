import React from "react";

import Indonesia from './img/indonesia.png';
import Nepal from './img/Nepal.png';
import Ocean from './img/ocean.png';
import OceanMobile from './img/oceanMobile.png';

export default function Prices(){
  return(
    <div className="home2">
      <div className="container-home">
        <div className="ocean">
          <div className="ocean-desktop"><img src={Ocean} alt=""/></div>
          <div className="ocean-mobile"><img src={OceanMobile} alt=""/></div>
        </div>
        
        <div className="nepal">
          <div className="nepal-img"><img src={Nepal} alt="Nepal"/></div>
        </div>
        
        <div className="indonesia">
          <div><img src={Indonesia} alt="Indonesia"/></div>
        </div>
        
        <div className="amazing">
          <h2>Amazing places to enjoy <br/>your travel</h2>
          <hr/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus iusto itaque laboriosam? Voluptates quasi odit quas. Dolore atque vero optio ex cum enim? Sed nobis cum quas? Alias, facere tempora!</p>
          <button className="home-button explore"><a href="#">Explore</a></button>
        </div>
      </div>
    </div>
  );
}