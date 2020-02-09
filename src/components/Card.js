import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Field from './Field';
import Hero from './Hero';
import '../css/Card.css';

const Card = (props) => {
    return (
        <Row center="xs" className="card">
            <Col xs={12} sm={4} lg={3}>
                <Hero image = {props.image}/>
            </Col>
            <Col xs={12} sm={4} lg={3}>
                <Field name = {props.name} description = {props.description}/>
            </Col>
        </Row>
    );
}

export default Card;
