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


    async function handleLogIn() {

            try {
                const login = await account.getSession("current");
                login.current && setIsLoggedIn(true);
                setSession(login);
                console.log(login);
                console.log(login.userId);

            }   catch (error) {
                console.log(error);
            }
    }

    useEffect(() => {
        getAllPetCards(listOfPets, setListOfPets);
    }, []);

    useEffect(() => {
        !session && setIsLoggedIn(false);
        handleLogIn();
    },[]);

    return (
        <div>
            {!isLoggedIn ? (
                <LoginPage isloggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            ) : (
                <>
                    <NavBar setIsLoggedIn={setIsLoggedIn}/>
                    <Main session={session} setSession={setSession} listOfPets={listOfPets}/>
                    <Footer/>
                </>
            )}


            <button onClick={() => setIsLoggedIn(true)}>
                Set logged in true
            </button>
            <button onClick={() => setIsLoggedIn(false)}>
                Set logged in false
            </button>
        </div>
    );
};

export default App;