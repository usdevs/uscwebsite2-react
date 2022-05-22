import React from 'react';
import Card from 'react-bootstrap/Card'

export default function Footer() {
    return (
        <Card.Footer className="py-4 mt-5">
            <Card.Body>
                <Card.Text className="text-start">© Copyright 2021. All Rights Reserved. NUS Students' University Scholars Club</Card.Text>
            </Card.Body>
        </Card.Footer>
    )
}