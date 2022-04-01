import React from "react";


import Travel11 from './img/travel11.jpg';
import Travel22 from './img/travel22.jpg';
import Travel33 from './img/travel33.jpg';
import Travel44 from './img/travel44.jpg';
import Travel55 from './img/travel55.jpg';

export default function Categories() {
  return(
    <div className="travel" id="travel">
      <h2>Travel categories</h2>
      <hr/>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus iusto itaque laboriosam? Voluptates quasi
        odit quas. Dolore atque vero optio ex cum enim? Sed nobis cum quas? Alias, facere tempora! Lorem ipsum dolorsit, amet consectetur adipisicingelit. Dolore atque vero optio ex cum enim? Sed nobis cum quas? Alias, facere tempora! </p>


        <div className="container-travel">

          <div className="travel-first">
            <div><img src={Travel11} alt=""/></div>
          </div>
    
          <div className="travel-second">
            <div><img src={Travel22} alt=""/></div>
          </div>
      
          <div className="travel-third">
            <div><img src={Travel33} alt=""/></div>
          </div>
      
          <div className="travel-fourth">
            <div><img src={Travel44} alt=""/></div>
          </div>
          

          <div className="travel-five">
            <div><img src={Travel55} alt=""/></div>
          </div>
        </div>
    </div>
  );


}