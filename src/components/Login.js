import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { login } from "../firebase/authEmulator"
import { Form, FloatingLabel, Button, Alert } from 'react-bootstrap'

import './login.css'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [alert, setAlert] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/");
        } catch (err) {
            console.log("wrong email/password");
            setAlert(true);
        }
    }

    return (
        <div className="login-body text-center">
            <div className="login-form">
                <div className="nav">
                    <Button variant="link" onClick={() => navigate(-1)}>
                        <h2><i className="bi bi-arrow-left font-weight-bold"></i></h2>
                    </Button>
                </div>
                <Alert show={alert} variant="danger" onClose={() => setAlert(false)} dismissible>
                    <p>Invalid email address and/or password.</p>
                </Alert>
                <h1 className="mb-4">Sign In</h1>
                <Form>
                    <FloatingLabel controlId="email" label="Email Address">
                        <Form.Control
                            type="email"
                            placeholder="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="password" label="Password">
                        <Form.Control
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FloatingLabel>
                    <Form.Check
                        className="my-3"
                        type="checkbox"
                        label="Remember Me"
                        onChange={(e) => setRemember(!remember)}
                    />
                    <Button className="w-100 mb-3" size="lg" variant="primary" onClick={handleSubmit}>Login</Button>
                    <a href="/register">No account? Register here!</a>
                </Form>
            </div>
        </div>
    )
}

export default Login
