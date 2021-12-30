import React from 'react';
import Navigation from './Navigation';
import { Container } from 'react-bootstrap';
import { Row,Col } from 'react-bootstrap';

function Contact() {
    return (
        <>
        <Navigation></Navigation>
        <Container style={{paddingLeft:"5%", paddingRight:"5%"}} >
            <img
                src='/img/contact-us-header.jpg' 
                className="img-fluid" 
                alt="Cinnamon College against a blue sky"
                ></img>
                

            <h1 class="text-start display-4 mt-3"> Contact Us </h1>
        </Container>
        </>
    )
}

export default Contact;