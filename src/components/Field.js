import React from 'react';
import '../css/Field.css';

const Field = (props) => {
    return (
        <div className="field">
            <div className="label">{props.name} </div>
            <div className="text">{props.description} </div>
        </div>
    )
};
export default Field;