import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  //let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "b88b1f146af7a33abtdd4oddc5070";
  //let longitude = props.coordinates.lon;
  //let latitude = props.coordinates.lat;
  //let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${longitude}&key=${apiKey}`;

  //axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thurs</div>
          {<WeatherIcon code="01d" size={36} />}
          <div className="Forecast-termperatures">
            <span className="Forecast-temperature-max">
              {/* {Forecast[0].temp.max} */}
            </span>
            <span className="Forecast-temperature-min">
              {/* {Forecast[0].temp.min} */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
