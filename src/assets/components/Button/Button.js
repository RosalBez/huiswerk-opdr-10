import React from 'react';



function Button ({buttonType, isDisabled, children}) {
    return (
        <button
            type={buttonType}
            disabled={isDisabled}
        >
            {children}
        </button>

);
    console.log(children)
}

export default Button;
