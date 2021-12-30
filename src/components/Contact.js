import React from 'react';
import Navigation from './Navigation';
import { Container } from 'react-bootstrap';
import config from '../config';
import { Row, Col } from 'react-bootstrap';

const API_KEY = config.apiKey;

function Address() {
    return (
        <Container className="p-3" style={{backgroundColor: "#e9ecef"}} fluid>
            <h4>NUS Students' University Scholars Club</h4>
            <p>National University of Singapore</p>
            <p>Cinnamon College, University Town</p>
            <p>18 College Avenue East S138593</p>
            <p>If you have any queries or questions regarding the University Scholars Club 
                and would like to speak to someone, please email 
                 <a href="mailto:usc.hongensec@u.nus.edu"> usc.hongensec@u.nus.edu.</a>
            </p>
        </Container>
    )
}
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
            <h1 className="text-start display-4 mt-3"> Contact Us </h1>
            
            <Row>
                <Col md={6}>
                    <iframe
                        title="iframe"
                        style={{border:0, width:"100%", height:"300px"}}
                        loading="lazy"
                        allowFullScreen
                        src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}
                            &q=Cinnamon+College,University+Town+Singapore+18+College+Avenue+East`}>
                                
                    </iframe>
                </Col>

                <Col md={6} className="mt-4 mt-md-0">
                    <Address/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Contact;