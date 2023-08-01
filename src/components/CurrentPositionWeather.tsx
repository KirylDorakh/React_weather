import * as React from "react";

import "../styles/CurrentPositionWeather.css"

function CurrentPositionWeather({currentPositionWeather}) {

    return (
        <>
        { currentPositionWeather ?
            <div className="current-position">
                <div className="current-position-name">{ currentPositionWeather.name }</div>
                <div className="current-position-info">{ currentPositionWeather.main.temp }°</div>
                { currentPositionWeather.weather.map(item =>
                    <div key={ item.id } className="current-position-icon">
                        <img src={`https://openweathermap.org/img/wn/${item.icon}.png`} alt={item.description}/>
                    </div>
                )}
            </div>
            : <p></p>
        }
        </>
    )
}

export default CurrentPositionWeather;