import React from 'react';

function Button({type, title, disabled}) {
    return (
        <button
            type={type}
            disabled={disabled}>{title}
        </button>
    );
}

export default Button;