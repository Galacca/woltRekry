import React from 'react';
import '../css/Hero.css';

const Hero = (props) => {
    return (
    <div className="hero">
        <img src={props.image} alt="logo" />
    </div>
    )
}

export default Hero;