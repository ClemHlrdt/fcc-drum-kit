import React from 'react';
import './Display.css';

const Display = (props) => {
    return (
        <div id="display">
            <h1 className="Display">{props.buttonPressed}</h1>
        </div>
    );
}

export default Display;