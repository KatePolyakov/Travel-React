import React from "react";

import MaldivesBig from './img/video_mald_big.jpg'
import Small11 from './img/small11.jpg';
import Small22 from './img/small22.jpg';
import Small33 from './img/small33.jpg';
import Small44 from './img/small44.jpg';
import Small66 from './img/small66.jpg';


export default function Video(){
  return(
    <div className="video">
    <h2>Featured videos</h2>
    <hr/>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus iusto itaque laboriosam? Voluptates quasi odit quas. Dolore atque vero optio ex cum enim? Sed nobis cum quas? Alias, facere tempora! Lorem ipsum dolorsit, amet consectetur adipisicingelit. Dolore atque vero optio ex cum enim? Sed nobis cum quas? Alias, facere tempora! </p>

    <div className="row">
      <div className="col-8 col-s-12 big-video">
        <img src={MaldivesBig} alt="Maldives"/>
      </div>
      <div className="col-4 col-s-12 small-video">
        <ul>
          <li><img src={Small11} alt="RHEA"/><div><h3>When go to <br/>Maldives</h3><p>03.55</p></div></li>
          <li><img src={Small22} alt="RHEA"/><div><h3>Tanzania's deadly <br/>pink lake</h3><p>05.24</p></div></li>
          <li><img src={Small33} alt="RHEA"/><div><h3>Top things to do in <br/>Kathmandu</h3><p>06.12</p></div></li>
          <li><img src={Small44} alt="RHEA"/><div><h3>Exploring China's <br/>creative capital</h3><p>04.33</p></div></li>
          <li><img src={Small66} alt="RHEA"/><div><h3>Wynwood walls</h3><p>05.12</p></div></li>
        </ul>
      </div>
    </div>
  </div>
  );
}