import React from 'react';

function Badge({ color, text }) {

    
    return (
        <span className="badge w-50" style={{ backgroundColor: color, border: "solid #000" }}>
            {text}
        </span>
    );
}

export default Badge;