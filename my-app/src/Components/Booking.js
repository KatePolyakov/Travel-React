import React from "react";

export default function Booking() {
  return(
    <div className="booking" id="booking">
    <div className="booking-grid">
      <div className="white-text"><h3>WE WILL SEE YOU</h3></div>
      <div className="big-white-text"><h1>Enjoy 30% Off On The First Trip</h1></div>
      <div className="contact-form-one forms">
        <select class="survey" id="country" name="country"><br/>
          <option value="">Destination</option>
          <option class="survey" value="alberta">Alberta</option>
          <option class="survey" value="BC">British Columbia</option>
          <option class="survey" value="ontario">Ontario</option>
          <option class="survey" value="saskatchewan">Saskatchewan</option>
          <option class="survey" value="yukon">Yukon</option>
          <option class="survey" value="nt">NorthWest Territories</option>
        </select>
      </div>
      <div className="contact-form-two forms">
        <select class="survey" id="package" name="package"><br/>
          <option class="survey" value="">Package</option>
          <option class="survey" value="bb">BB</option>
          <option class="survey" value="ai">All Inclusive</option>
          <option class="survey" value="aip">All Inclusive Plus</option>
          <option class="survey" value="ho">Hotel Only</option>
        </select>
    </div>
      <div class="contact-form-three forms">
        <input class="survey" type="date" id="start" name="trip-start"
        value="0000-00-00"
        min="2022-01-01" max="2025-12-31"/>
      </div>
      <div className="contact-form-four">
        <button className="home-button"><a href="#">BOOK NOW</a></button>
      </div>
    </div>
  </div>
  );
}