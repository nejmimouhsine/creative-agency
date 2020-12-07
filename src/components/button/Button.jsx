import React from 'react';
import './Button.scss';

const Button = ({ className, value }) => {
    return (
        <button className={className}>
            {value}
        </button>
    )
}

export default Button;
