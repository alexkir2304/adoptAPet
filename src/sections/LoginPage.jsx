import React from 'react';
import {logInWithGoogle, logOut} from "../appwrite/auth.js";
import {account} from "../appwrite/client.js";



const LoginPage = ({setIsLoggedIn}) => {
    return (
        <div className="flex items-center flex-col justify-center p-5">
            <button onClick={logInWithGoogle}>
                Login
            </button>

            <button onClick={()=> logOut(setIsLoggedIn)}>
                Logout
            </button>
        </div>
    );
};

export default LoginPage;