import React from 'react';

const Button = ({children, handleClick, color, type}) => {

    return (
        <button  onClick={handleClick} className={`${color==='red' ? 'redButton' : 'blueButton'} ${type==='logout' ? 'logOutButton' : ''} flex items-center justify-center  text-nowrap`}>
            {children}
        </button>
    );

};

export default Button;