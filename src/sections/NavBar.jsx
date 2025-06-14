import React from 'react';
import {logOut} from "../appwrite/auth.js";

const NavBar = ({setIsLoggedIn, setSession, setListOfPets}) => {
    return (
        <nav className='flex justify-around w-full mt-5' >
            <span>HOME</span>
            <span>ABOUT</span>
            <span>DOCS</span>
            <span>CONTACTS</span>
            <button>
                ADOPT
            </button>
            <button>
                Find new owners
            </button>


            <button onClick={() => logOut(setIsLoggedIn, setSession, setListOfPets)}>
                Logout
            </button>
        </nav>
    );
};

export default NavBar;