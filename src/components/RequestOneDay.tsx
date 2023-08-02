import * as React from "react";
import { useState } from "react";
import axios from "axios";

import "../styles/RequsetOneDay.css"

import WeatherInfo from "./WeatherInfo";

function RequestOneDay({city}) {
    console.log(city)
    const [weatherInfo, setWeather] = useState(null)
    const APIkey: string = "722926f90c9abdf1b0227c51e1ba0104"


    const getWeatherData = () => {
        console.log("requesteOne day")
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
            .then(res => {
                let result = res.data
                setWeather(result)
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <WeatherInfo>{ weatherInfo }</WeatherInfo>
        </>
    )
}

export default RequestOneDay;