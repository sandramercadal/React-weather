import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState("");

  function displaySearch(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      let apiKey = `b88b1f146af7a33abtdd4oddc5070ff6`;
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
      axios.get(apiUrl).then(displaySearch);
    } else {
      alert("Please enter a city");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className="formBar"
        placeholder="Please enter a city"
        onChange={updateCity}
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );

  if (loaded) {
    return (
      <div className="SearchEngine">
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/hour</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
