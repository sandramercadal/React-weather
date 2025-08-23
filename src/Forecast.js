import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thurs</div>
          {/* <WeatherIcon code="01d" size={36}/> */}
          <div className="Forecast-termperatures">
            <span className="Forecast-temperature-max">19°</span>
            <span className="Forecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Forecast() {
//   return (
//     <div className="Forecast">
//       <hr />
//       <div className="row justify-content-center" id="forecast">
//         <div className="col-2">
//           <div className="weather-forecast-date">Sun</div>
//           <img
//             src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
//             alt="forecast_icon"
//             width="42"
//           />
//           <div className="weather-forecast-temperatures">
//             <span className="weather-forecast-temperature-max">10º</span>
//             <span className="weather-forecast-temperature-min">17º</span>
//           </div>
//         </div>
//         <div className="col-2">
//           <div className="weather-forecast-date">Mon</div>
//           <img
//             src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
//             alt="forecast_icon"
//             width="42"
//           />
//           <div className="weather-forecast-temperatures">
//             <span className="weather-forecast-temperature-max">10º</span>
//             <span className="weather-forecast-temperature-min">17º</span>
//           </div>
//         </div>
//         <div className="col-2">
//           <div className="weather-forecast-date">Tues</div>
//           <img
//             src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
//             alt="forecast_icon"
//             width="42"
//           />
//           <div className="weather-forecast-temperatures">
//             <span className="weather-forecast-temperature-max">10º</span>
//             <span className="weather-forecast-temperature-min">17º</span>
//           </div>
//         </div>
//         <div className="col-2">
//           <div className="weather-forecast-date">Weds</div>
//           <img
//             src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
//             alt="forecast_icon"
//             width="42"
//           />
//           <div className="weather-forecast-temperatures">
//             <span className="weather-forecast-temperature-max">10º</span>
//             <span className="weather-forecast-temperature-min">17º</span>
//           </div>
//         </div>
//         <div className="col-2">
//           <div className="weather-forecast-date">Thurs</div>
//           <img
//             src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
//             alt="forecast_icon"
//             width="42"
//           />
//           <div className="weather-forecast-temperatures">
//             <span className="weather-forecast-temperature-max">10º</span>
//             <span className="weather-forecast-temperature-min">17º</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
//}
