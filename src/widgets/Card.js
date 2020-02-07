import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Field from '../widgets/Field';
import Hero from '../widgets/Hero';
import '../css/Card.css';

const Card = () => {
    return (
        <Row className="card" center="xs">
            <Col xs={12} sm={12} lg={12}>
                <Hero />
            </Col>
            <Col xs={12} sm={12} lg={12} center="xs">
                <Field />
            </Col>
        </Row>
    );
}

export default Card;
