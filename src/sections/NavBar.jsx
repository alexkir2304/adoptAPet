import React from 'react';
import {logOut} from "../appwrite/auth.js";

const NavBar = ({setIsLoggedIn, setSession, setListOfPets}) => {
    return (
        <div className='flex justify-around w-full mt-5'>
            <span>HOME</span>
            <span>ABOUT</span>
            <span>DOCS</span>
            <span>CONTACTS</span>

            <button onClick={() => logOut(setIsLoggedIn, setSession, setListOfPets)}>
                Logout
            </button>
        </div>
    );
};

export default NavBar;