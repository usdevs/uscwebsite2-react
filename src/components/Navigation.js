import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Container, Navbar, Nav, Button, Dropdown } from 'react-bootstrap'

import { getToken, getEmail, logout, auth } from '../firebase/authEmulator'


function Navigation() {
    const [isLoggedIn, setLoggedIn] = useState(null);
    const [email, setEmail] = useState("");

    

    useEffect(() => {
        
        
        // const updateStatus = async () => {
        //     if(!isLoggedIn) {
        //         const status = await auth.currentUser.getIdToken();
        //         console.log(status)
        //         if (status) {
        //             setLoggedIn(true);
        //             const emailAddress = await getEmail();
        //             setEmail(emailAddress);
        //         } else {
        //             setLoggedIn(false);
        //         }
        //     }
        // }

        // updateStatus();
        console.log("update fired")
    })

    


    const doLogout = async () => {
        setLoggedIn(null);
        setEmail("");
        await logout();
        window.location.reload();
    }

    var buttonGroup1;
    if (isLoggedIn) {
        buttonGroup1 = 
        <Dropdown>
            <Dropdown.Toggle variant="info">{email}</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={doLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    } else {
        buttonGroup1 = <Button href="/login" variant="primary">Login <i className="bi bi-box-arrow-in-right"></i> </Button>
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img 
                        src="/img/nususc_logo.svg"
                        height="50px"
                        alt="NUS USC Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#link">Spaces</Nav.Link>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                        {buttonGroup1}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
