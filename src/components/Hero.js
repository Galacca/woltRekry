import React from 'react';
import '../css/Hero.css';

const Hero = (props) => {
    return (
        <img  className="hero" src={props.image} alt="logo" />
    )
}

export default Hero;