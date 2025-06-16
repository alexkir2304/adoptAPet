import React from 'react';
import {logOut} from "../appwrite/auth.js";
import Button from "../components/Button.jsx";

const NavBar = ({setIsLoggedIn, setSession, setListOfPets}) => {

    const handleLogOut = () => logOut(setIsLoggedIn, setSession, setListOfPets)
    const handleMoveToSomething = (e) => {e.preventDefault() }

    return (
        <nav id='navbar' className='navbar' >

            <div className='navbar__menu'>
                <span>HOME</span>
                <span>ABOUT</span>
                <span>DOCS</span>
                <span>CONTACTS</span>
            </div>

            <div className='navbar__buttons'>
                <Button>
                    <a className='w-full h-full' href={"#search"}>ADOPT A PET</a>

                </Button>

                <Button color={'red'}>
                <a href={"#create"}>FIND A NEW OWNER</a>
                </Button>

                <Button handleClick={handleLogOut}>
                    LOGOUT
                </Button>
            </div>


        </nav>
    );
};

export default NavBar;