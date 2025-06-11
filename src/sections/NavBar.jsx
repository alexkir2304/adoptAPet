import React from 'react';
import {logOut} from "../appwrite/auth.js";

const NavBar = ({setIsLoggedIn}) => {
    return (
        <div>
            <button onClick={() => logOut(setIsLoggedIn)}>
                Logout
            </button>
        </div>
    );
};

export default NavBar;