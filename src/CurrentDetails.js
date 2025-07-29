import React from "react";
import "./CurrentDetails.css";

export default function CurrentDetails(props) {
  return (
    <div>
      <h2>{props.weather.city}</h2>
      <h1>{props.weather.country}</h1>
      <h1>{props.weather.description}</h1>
      <img src={props.weather.icon_url} alt="forecast_icon" width="62" />
      <h4>{props.weather.temperature}°C</h4>
      <h4>
        Humidity: {props.weather.humidity}% / Wind: {props.weather.wind}km/h
      </h4>
    </div>
  );
}
