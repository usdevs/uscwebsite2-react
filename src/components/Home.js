import React from 'react'
import Navigation from './Navigation'
import { Container, Row, Button } from 'react-bootstrap'

import { getToken } from '../firebase/authEmulator'

function Home() {

    const checkCookie = async () => {
        try {
            const token = await getToken();
            console.log("token = " + token);
        } catch (err) {
            console.log("token = null");
        }
    }

    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <Row className="mb-5">
                    <h1>Landing Page Contents to be added</h1>
                </Row>
                <Row className="text-start">
                    <h4>Temporary Functions</h4>
                    <div>
                        <Button className="mx-2" onClick={checkCookie}>Check Cookie</Button>
                    </div>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Home
