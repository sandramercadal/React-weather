import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
    "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day": "CLOUDY_DAY",
    "broken-clouds-night": "CLOUDY_NIGHT",
    "shower-rain-day": "RAIN_DAY",
    "shower-rain-night": "RAIN_NIGHT",
    "rain-day": "RAIN_DAY",
    "rain-night": "RAIN_NIGHT",
    "thunderstorm-day": "THUNDERSTORM_DAY",
    "thunderstorm-night": "RAIN_NIGHT",
    "snow-day": "SNOW_DAY",
    "snow-night": "SNOW_NIGHT",
    "mist-day": "MIST_DAY",
    "mist-night": "MIST_NIGHT",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#1e1e1e"
      size={props.size}
      animate={true}
    />
  );
}
