import React from 'react';
import {logOut} from "../appwrite/auth.js";

const Button = ({children, handleClick, color}) => {



    return (
        <button  onClick={handleClick} className={`button ${color==='red' ? 'bg-red-button border-red-button' : 'bg-blue-button border-blue-button'}`}>
            {children}
        </button>
    );
};

export default Button;