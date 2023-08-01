import * as React from "react";

import "../styles/WeatherFiveDays.css"
import weatherInfo from "./WeatherInfo";

function WeatherFiveDays({weatherFiveDays}){
    const convertData = ( timestamp ) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        })
    }

    return (
        <div className="weather-five">
            <h2>Weather for the next 5 days </h2>
            <div className="five">
                {weatherFiveDays && weatherFiveDays.list.map(day =>
                    <div className="day" key={day.dt}>
                        <p> { convertData(day.dt) } </p>
                        <p className="temp">{day.main.temp}°</p>
                        { day.weather.map(item =>
                            <div key={item.id}>
                                <img
                                    src={`https://openweathermap.org/img/wn/${item.icon}.png`}
                                    alt={item.description}
                                />
                            </div>
                        )}
                    </div>
                )}
            </div>

        </div>
    )
}

export default WeatherFiveDays;