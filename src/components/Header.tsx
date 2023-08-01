import * as React from "react";
import {useEffect, useState} from "react";

import "../styles/Header.css"
import axios from "axios";
import CurrentPositionWeather from "./CurrentPositionWeather";

function Header() {
    const APIkey: string = "722926f90c9abdf1b0227c51e1ba0104"
    const [coords, setCoords] = useState(null)
    const [currentPositionWeather, setCurrentPositionWeather] = useState(null)
    const getCurrentPosition = () => {
        if ("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition((position) => {
                setCoords([position.coords.latitude, position.coords.longitude])
            });
        } else {
            console.error("don't have geolocation")
        }
    }

    if (coords){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&units=metric&appid=${APIkey}`)
            .then(res => {
                setCurrentPositionWeather(res.data)
            })
    }

    useEffect(() => {
        getCurrentPosition()
    }, [])

    return (
            <header>
                <h1>Weather App</h1>
                <CurrentPositionWeather key="currentPostionKey" currentPositionWeather={ currentPositionWeather }/>
            </header>
            )
}

export default Header;