import React, { useState } from "react";
import axios from "axios";
import CurrentDetails from "./CurrentDetails";
import Forecast from "./Forecast";

export default function SearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function displaySearch(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      city: response.data.city,
      country: response.data.country,
      icon_url: response.data.condition.icon_url,
      coordinates: response.data.coord,
    });
  }

  function searchCity(city) {
    if (city.length > 0) {
      let apiKey = `b88b1f146af7a33abtdd4oddc5070ff6`;
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
      axios.get(apiUrl).then(displaySearch);
    } else {
      alert("Please enter a city");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity(city);
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
        <CurrentDetails weather={weather} />
      </div>
    );
  } else {
    searchCity(city);
    return "Loading...";
  }
}

//<Forecast coordinates={weatherData.coordinates} /> should go within if loaded block (may not be needed)
