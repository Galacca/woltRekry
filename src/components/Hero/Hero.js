import React from 'react';
import './Hero.css';

const Hero = (props) => (
  <img className="hero" src={props.image} alt="link" />
);

export default Hero;
