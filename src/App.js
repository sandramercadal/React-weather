import "./App.css";
import Footer from "./Footer.js";
import "./Footer.css";
import Header from "./Header-searchbutton.js";
import "./Header-searchbutton.css";
import Forecast from "./Forecast.js";
import "./Forecast.css";
import "./CurrentDetails.css";
import Main from "./Main.js";
import "./Main.css";
import Music from "./Music.js";
import "./Music.css";
import WeatherIcon from "./WeatherIcon.js";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="weathercontainer">
          <Header defaultCity="Madrid" />
          <Main />
          <Forecast />
          <WeatherIcon />
        </div>
        <Music />
        <Footer />
      </div>
    </div>
  );
}
