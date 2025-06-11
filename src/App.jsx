import React, {useEffect, useState} from 'react';
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


    const handleLogOut = async () => {
        setIsLoggedIn(false);
    }

    async function checkLogin() {

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
        checkLogin();
        getAllPetCards(listOfPets, setListOfPets)
    },[]);

    return (
        <div>
            <LoginPage clicked={handleLogOut} />
            <NavBar/>
            <Main session={session} setSession={setSession} listOfPets={listOfPets} />
            <Footer/>
        </div>
    );
};

export default App;