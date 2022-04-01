import React from "react";

import Don from './img/Don.jpg';
import Right from './img/right.png';
import Left from './img/left.png';

export default function Experience() {
  return(
    <div className="experiences">

      <h2>Traveller's experiences</h2>
      <hr/>
      <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus iusto itaque laboriosam? Voluptates quasi odit quas. Dolore atque vero optio ex cum enim? Sed nobis cum quas? Alias, facere tempora! Lorem ipsum dolorsit, amet consectetur adipisicingelit. Dolore atque vero optio ex cum enim? Sed nobis cum quas? Alias, facere tempora!"</p>
      <div className="container-experiences">

        <div className="experiences-first">
          <img src={Left} alt=""/>
        </div>
  
        <div className="experiences-second">
          <div><img src={Don} alt=""/></div>
          <h3>Donquixote Law</h3>
          <p>Traveller</p>
        </div>
    
        <div className="experiences-third">
          <img src={Right} alt=""/>
        </div>
      </div>
    </div>
  );
  
}