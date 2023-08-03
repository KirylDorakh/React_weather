import * as React from "react";
import axios from "axios";
import CurrentPositionWeather from "./CurrentPositionWeather";
import {useEffect, useState} from "react";


function RequestCurrentPosition({coords}) {
    const APIkey: string = "722926f90c9abdf1b0227c51e1ba0104"
    const [currentPositionWeather, setCurrentPositionWeather] = useState(null)

    useEffect(()=>{
        if (coords) {
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&units=metric&appid=${APIkey}`
                )
                .then(res => {
                    setCurrentPositionWeather(res.data)
                })
                .catch(err => console.error(err))
        }
    }, [coords])

    return (
        <>
            <CurrentPositionWeather key="currentPostionKey" currentPositionWeather={ currentPositionWeather }/>
        </>
    )
}

export default RequestCurrentPosition;