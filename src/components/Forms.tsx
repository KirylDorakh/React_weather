import * as React from "react";
import { Button, Form } from "react-bootstrap";

import "../styles/Forms.css"

import RequestOneDay from "./RequestOneDay";
import RequestFiveDays from "./RequestFiveDays";
import {useState} from "react";

function Forms(){
    const cities : string[] = ["Abu Dhabi", "London", "Minsk"]
    const [city, setCity] = useState("")
    const handleFormSubmit= (event) => {
        event.preventDefault()

        setCity(event.target.value)

        console.log(city)
    }

    return (
        <div className="forms">
            <h2>Choose the City</h2>
            <div>
                <Form className="text-form" onSubmit={ handleFormSubmit }>
                    <Form.Select value={city} aria-label="Choose city">
                        <option>City</option>
                        { cities.map(city => <option key={city} value={city}>{city}</option>) }
                    </Form.Select>
                    <Form.Group controlId="cityForm">
                        <Form.Label>or write:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter city name"
                            value={city}
                        />
                    </Form.Group>
                    <Button type="submit" variant="info">Check</Button>
                </Form>
            </div>

            <RequestOneDay city={city} />
            <RequestFiveDays city={city}/>
        </div>
    )
}

export default Forms;