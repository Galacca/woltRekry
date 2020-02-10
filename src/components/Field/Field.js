import React from 'react';
import './Field.css';

const Field = (props) => (
  <div className="field">
    <div className="label">
      {props.name}
      {' '}
    </div>
    <div className="text">
      {props.description}
      {' '}
    </div>
    <div className="tags">{props.tags.join(', ')}</div>
  </div>
);
export default Field;
