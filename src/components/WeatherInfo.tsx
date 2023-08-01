import * as React from "react";

import "../styles/WeatherInfo.css"

import RequestFiveDays from "./RequestFiveDays";

function WeatherInfo(props) {
    let weatherInfo = props.children
    return (
        <div className="weather-info">
            { weatherInfo ?
                <div key={weatherInfo.name} className="weather-one">
                    <h2>Weather for today</h2>
                    <div className="city-name">{weatherInfo.name}</div>
                    <div className="temp">
                        <p className="main-temp">{ weatherInfo.main.temp }°</p>
                        <p>Feels like { weatherInfo.main.feels_like }°</p>
                    </div>

                    { weatherInfo.weather.map(item =>
                    <div className="weather-icon" key={item.id}>
                        <img className="icon"
                            src={`https://openweathermap.org/img/wn/${item.icon}.png`}
                            alt={item.description}
                        />
                        <p>{ item.description }</p>
                    </div>
                    )}
                </div>
                : ''}
            { weatherInfo ? < RequestFiveDays cityName={weatherInfo.name}/>:''}

        </div>
    )
}

export default WeatherInfo;