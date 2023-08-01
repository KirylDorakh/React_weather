import * as React from "react";
import { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

import "../styles/RequsetOneDay.css"

import WeatherInfo from "./WeatherInfo";

function RequestOneDay() {
    const [weatherInfo, setWeather] = useState(null)
    const APIkey: string = "722926f90c9abdf1b0227c51e1ba0104"
    const cities : string[] = ["Abu Dhabi", "London", "Minsk"]

    const [city, setCity] = useState("")

    const getWeatherData = (event) => {
        event.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
            .then(res => {
                let result = res.data
                setWeather(result)
            })
            .catch(err => console.error(err))
    }

    const handleSelectChange = (event) => {
        setCity(event.target.value)
    }

    const handleCityChange = (event) => {
        setCity(event.target.value)
    }


    return (
        <>
            <div className="forms">
                <div>Choose the City
                    <Form.Select value={city} aria-label="Choose city" onChange={ handleSelectChange }>
                        <option>City</option>
                        { cities.map(city => <option key={city} value={city}>{city}</option>) }
                    </Form.Select>
                </div>
                <div>
                    <Form className="text-form" onSubmit={ getWeatherData }>
                        <Form.Group controlId="cityForm">
                        <Form.Label>or write:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter city name"
                            value={city}
                            onChange={handleCityChange}
                        />
                        </Form.Group>
                        <Button type="submit" variant="info">Check</Button>
                    </Form>
                </div>
            </div>

            <WeatherInfo>{ weatherInfo }</WeatherInfo>
        </>
    )
}

export default RequestOneDay;