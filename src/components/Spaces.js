import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Form, FloatingLabel, Button } from 'react-bootstrap'
import TimePicker from 'react-bootstrap-time-picker'

import './Spaces.css'

function Spaces() {
    const navigate = useNavigate();
    const [venue, setVenue] = useState("");
    const [date, setDate] = useState("");
    const [startHour, setStartHour] = useState("");
    const [endHour, setEndHour] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            {/*Here should send a http request*/}
            console.log("book");
        } catch (err) {
            console.log("Submit unsuccessful!")
        }
    }
    
    return (
        <div className="spaces-body text-center">
            <div className="spaces-form">
                <div className="nav">
                    <Button variant="link" onClick={() => navigate(-1)}>
                        <h2><i className="bi bi-arrow-left font-weight-bold"></i></h2>
                    </Button>
                </div>
                <h1 className="mb-4">Booking Spaces</h1>
                <Form>
                    {/*select venue: it is a fixed list now, but it should be list from backend*/}
                    <FloatingLabel controlId="venue" label="Venue">
                        <Form.Select
                            aria-label="Floating label select example"
                            onChange={(e) => setVenue(e.target.value)}
                        >
                            <option value="CTPH">CTPH</option>
                            <option value="TRR">Theme Room Red</option>
                            <option value="TRB">Theme Room Blue</option>
                        </Form.Select>
                    </FloatingLabel>
                    {/*select date*/}
                    <FloatingLabel controlId="date" label="Date">
                        <Form.Control
                            type="date"
                            placeholder="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </FloatingLabel>
                    {/*select starting hour*/}
                    <FloatingLabel controlId="startHour" label="Start Hour">
                        <TimePicker
                            value={startHour}
                            start="10:00"
                            end="21:00"
                            step={30}
                            onChange={(startHour) => setStartHour(startHour)}
                        />
                    </FloatingLabel>
                    {/*select ending hour*/}
                    <FloatingLabel controlId="endHour" label="End Hour">
                        <TimePicker
                            value={endHour}
                            start="10:00"
                            end="21:00"
                            step={30}
                            onChange={(endHour) => setEndHour(endHour)}
                        />
                    </FloatingLabel>
                    {/*submit here*/}
                    <Button className="w-100" size="lg" variant="primary" onClick={handleSubmit}>Book</Button>
                </Form>
            </div>
        </div>
    )
}

export default Spaces
