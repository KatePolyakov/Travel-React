import React from "react";

import Youtube from './img/youtube.png';
import Facebook from './img/facebook.png';
import Twitter from './img/twitter.png';
import Mail from './img/mail.png';

export default function Footer() {
  return(
    <div>
    <div className="footer-one">
      <div className="ho"><a href="#home">Home</a></div>
      <div className="vi"><a href="#video">Video</a></div>
      <div className="des"><a href="#travel">Destinations</a></div>
      <div className="book"><a href="#booking">Booking</a></div>
      <div className="con"><a href="#">Contact</a></div>
      <div className="pri"><a href="#">Pricing</a></div>
      <div className="pol"><a href="#">Privacy Policy</a></div>
      <div className="copy">Copyright 2014-2018 <span>Rhea - Travel Around The World</span></div>
    </div>
    <div className="footer-two">
      <div className="youtube"><a href="http/youtube"><img src={Youtube} alt=""/></a></div>
      <div className="facebook"><a href="http/facebook"><img src={Facebook} alt=""/></a></div>
      <div className="twitter"><a href="http/twitter"><img src={Twitter} alt=""/></a></div>
      <div className="mail"><a href="http/mail"><img src={Mail} alt=""/></a></div>
    </div>
    </div>
  );
  
}