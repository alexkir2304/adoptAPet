import React, {useEffect} from 'react';
import {logOut} from "../appwrite/auth.js";
import Button from "../components/Button.jsx";

const NavBar = ({setIsLoggedIn, setSession, setListOfPets}) => {

    const handleLogOut = () => logOut(setIsLoggedIn, setSession, setListOfPets)

    useEffect(() => {

        const el = document.getElementsByClassName("navbar");
        // const main = document.getElementsByClassName("main")
        window.onscroll = () => {
            if (window.scrollY > 300) {
                return
            }            console.log('scrolled');
            window.scrollY > 100 ? el[0].classList.add("navbar__scrolled") : el[0].classList.remove("navbar__scrolled");
            // window.scrollY > 100 ? main[0].classList.add("main__scrolled") : main[0].classList.remove("main__scrolled");
        }

    },[])

    return (
        <nav id='navbar' className='navbar'>

            <div className='navbar__menu'>
                <a href={'#'}>HOME</a>
                <a href={'#'}>ABOUT</a>
                <a href={'#'}>DOCS</a>
                <a href={'#'}>CONTACTS</a>
            </div>

            <div className='navbar__menu--mobile'>
                <div onClick={(e) => {
                    const el = document.getElementsByClassName('nav__menu--mobile--button--content');
                    el[0].style.display === '' ? el[0].style.display = 'flex' : el[0].style.display = '';
                }} className='nav__menu--mobile--button '>
                    <img src="/images/hamburger.svg" className='bg-white w-[3rem] h-[3rem]' alt="" />
                    <div className='nav__menu--mobile--button--content '>
                        <a href={'#'}>HOME</a>
                        <a href={'#create'}>ABOUT</a>
                        <a href="">DOCS</a>
                        <a href="">CONTACTS</a>
                    </div>
                </div>
            </div>

            <div className='navbar__buttons'>
                <a href={"#search"}>
                    <Button>ADOPT A PET</Button>
                </a>
                <a href={"#create"}>
                    <Button color={'red'}>BRING YOUR PET</Button>
                </a>

                <Button handleClick={handleLogOut} type={'logout'}>
                    LOGOUT
                </Button>
            </div>

        </nav>
    );
};

export default NavBar;