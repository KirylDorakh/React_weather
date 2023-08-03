import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "../styles/RequsetOneDay.css"

import WeatherInfo from "./WeatherInfo";

function RequestOneDay({cityName}) {

    const [weatherInfo, setWeather] = useState(null)
    const APIkey: string = "722926f90c9abdf1b0227c51e1ba0104"

    const getWeatherData = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIkey}`)
            .then(res => {
                let result = res.data
                setWeather(result)
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        if (cityName) {
            getWeatherData();
        }
    }, [cityName]);

    return (
        <>
            <WeatherInfo>{ weatherInfo }</WeatherInfo>
        </>
    )
}

export default RequestOneDay;