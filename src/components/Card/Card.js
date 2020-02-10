import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Field from '../Field/Field';
import Hero from '../Hero/Hero';
import './Card.css';

const Card = (props) => (
  <Row center="xs" className="card">
    <Col xs={12} sm={12} md={6} lg={3}>
      <Hero image={props.image} />
      <Field name={props.name} description={props.description} tags={props.tags} />
    </Col>
  </Row>
);

export default Card;
