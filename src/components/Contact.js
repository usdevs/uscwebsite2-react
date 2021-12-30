import React from 'react';
import Navigation from './Navigation';
import { Container } from 'react-bootstrap';

function Contact() {
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <img 
                  src='/img/contact-us-header.jpg' 
                  class="img-fluid" 
                  style={{maxWidth:"85%"}}
                  alt="Cinnamon College against a blue sky"></img>
                <h1> Contact Us </h1>
            </Container>
        </>
    )
}

export default Contact;