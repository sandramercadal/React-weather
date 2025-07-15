import React from "react";
import "./CurrentDetails.css";

export default function CurrentDetails() {
  return (
    <div>
      <h3>
        <em>
          <span> Last updated:Monday 07:33</span>
        </em>
      </h3>
      <h2>Madrid</h2>
      <h1>ES</h1>
      <h1>Clear Sky</h1>
      <img
        src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
        alt="forecast_icon"
        width="62"
      />
      <h4>30 degrees</h4>
      <h4>Humidity: 19% / Wind: 4km/h</h4>
    </div>
  );
}
