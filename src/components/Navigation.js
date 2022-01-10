import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'

function Navigation() {
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
                        <Nav.Link href="/spaces">Spaces</Nav.Link>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                        <Button href="/login" variant="primary">Login <i className="bi bi-box-arrow-in-right"></i> </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
