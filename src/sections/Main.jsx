import React from 'react';
import {createAPetCard} from "../appwrite/database.js";
import CreatePetCard from "../components/createPetCard.jsx";

const Main = ({session, setSession, listOfPets}) => {
    return (

        <section className="flex flex-col justify-center items-center mt-10 p-5 gap-7">
            <div className="flex justify-center items-center w-full h-1/4 ">
                <CreatePetCard session={session} setSession={setSession} />
            </div>


            <div>
                {listOfPets.map((pet) => <div>a pet</div>)}
            </div>

        </section>

    )

};

export default Main;