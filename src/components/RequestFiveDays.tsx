import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";

import "./WeatherFiveDays"
import WeatherFiveDays from "./WeatherFiveDays";

function RequestFiveDays({cityName}) {
    const [weatherFiveDays, setWeatherFiveDays] = useState(null)
    const APIkey: string = "722926f90c9abdf1b0227c51e1ba0104"


    useEffect(() => {
        if (cityName) {
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${APIkey}`)
                .then(res => {
                    let result = res.data
                    let dailyData = getDailyTemperature(result.list)
                    setWeatherFiveDays({...result, list: dailyData})
                })
                .catch(err => console.error(err))
        }
    }, [cityName])

    const getDailyTemperature = (weatherList) => {
        const dailyTemperatures = []
        weatherList.forEach((data) => {
            const date = new Date(data.dt * 1000).toLocaleDateString("en-GB");
            if(!dailyTemperatures[date] || data.main.temp > dailyTemperatures[date]) {
                dailyTemperatures[date] = data
            }

        })
        return Object.values(dailyTemperatures);
    }

    return (
        <WeatherFiveDays weatherFiveDays={ weatherFiveDays }/>
    )
}

export default RequestFiveDays;