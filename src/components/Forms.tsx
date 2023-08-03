import * as React from "react";
import { Button, Form } from "react-bootstrap";

import "../styles/Forms.css"

import RequestOneDay from "./RequestOneDay";
import RequestFiveDays from "./RequestFiveDays";
import { useState } from "react";

function Forms() {
    const cities: string[] = ["Abu Dhabi", "London", "Minsk"];
    const [city, setCity] = useState("");
    const [cityName, setCityName] = useState("");

    const handleSelectChange = (event) => {
        setCity(event.target.value);
    };

    const handleTextFormChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setCityName(city);
    };

    return (
        <div className="forms">
            <h2>Choose the City</h2>
            <div>
                <Form className="text-form" onSubmit={handleSubmit}>
                    <Form.Select value={city} onChange={handleSelectChange} aria-label="Choose city">
                        <option>City</option>
                        {cities.map(city => <option key={city} value={city}>{city}</option>)}
                    </Form.Select>
                    <Form.Group controlId="cityForm">
                        <Form.Label>or write:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter city name"
                            value={city}
                            onChange={handleTextFormChange}
                        />
                    </Form.Group>
                    <Button type="submit" variant="info">Check</Button>
                </Form>
            </div>

            <RequestOneDay cityName={cityName} />
            <RequestFiveDays cityName={cityName}/>
        </div>
    )
}

export default Forms;
