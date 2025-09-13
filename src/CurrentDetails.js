import React from "react";
import "./CurrentDetails.css";
import WeatherIcon from "./WeatherIcon";

export default function CurrentDetails(props) {
  return (
    <div className="currentWeather">
      <h2>{props.weather.city}</h2>
      <h1>{props.weather.country}</h1>
      <h3>{props.weather.description}</h3>

      <img src={props.weather.icon_url} alt="forecast_icon" width="62" />
      <h4>{Math.round(props.weather.temperature)}°C</h4>
      <p>
        Humidity: {props.weather.humidity}% / Wind:{" "}
        {Math.round(props.weather.wind)}km/h
      </p>
    </div>
  );
}
// return (
//<ReactAnimatedWeather
//icon={codeMapping[props.code]}
//color="#1e1e1e"
//size={props.size}
//animate={true}
///>
//);
