import React, {use, useEffect, useState} from 'react';
import LoginPage from "./sections/LoginPage.jsx";
import Main from "./sections/Main.jsx";
import NavBar from "./sections/NavBar.jsx";
import Footer from "./sections/Footer.jsx";
import {account} from "./appwrite/client.js";
import {logOut} from "./appwrite/auth.js";
import {getAllPetCards} from "./appwrite/database.js";

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [session, setSession] = useState(null);
    const [listOfPets, setListOfPets] = useState([]);
    const [filteredPets, setFilteredPets] = useState(null);

    const handleLogIn = async () => {

        try {
            const login = await account.getSession("current");
            login.current && setIsLoggedIn(true);
            setSession(login);

        }   catch (error) {
            console.log(error);
        }
    }




    useEffect(() => {
        handleLogIn();
        getAllPetCards(listOfPets, setListOfPets);
    }, []);



    return (
        <div>
            {!isLoggedIn ? (
                <LoginPage isloggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            ) : (
                <>
                    <NavBar  setListOfPets={setListOfPets} setSession={setSession} setIsLoggedIn={setIsLoggedIn}/>
                    <Main session={session} setSession={setSession} listOfPets={listOfPets} setListOfPets={setListOfPets} filteredPets={filteredPets} setFilteredPets={setFilteredPets}/>
                    <Footer/>
                </>
            )}
        </div>
    );
};

export default App;