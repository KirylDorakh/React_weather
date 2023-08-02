import * as React from "react";
import {useEffect, useState} from "react";

import "../styles/Header.css"
import RequestCurrentPosition from "./RequestCurrentPosition";


function Header() {

    const [coords, setCoords] = useState(null)

    const getCurrentPosition = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setCoords([position.coords.latitude, position.coords.longitude])
            });
        } else {
            console.error("don't have geolocation")
        }
    }


    useEffect(() => {
        getCurrentPosition()
    }, [])

    return (
            <header>
                <h1>Weather App</h1>
                <RequestCurrentPosition coords={ coords }/>
            </header>
            )
}

export default Header;