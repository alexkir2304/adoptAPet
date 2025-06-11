import React from 'react';
import {createAPetCard} from "../appwrite/database.js";

const CreatePetCard = ({session, setSession}) => {

    const [newAnimalName, setNewAnimalName] = React.useState('');
    const [newAnimalType, setNewAnimalType] = React.useState('');
    const [newAge, setNewAge] = React.useState('');


    return (
        <div className="flex flex-col justify-center items-center w-full h-1/4 gap-8">
            <div>
                image section
            </div>
            <form action="">
                <input value={newAnimalName} onChange={event => setNewAnimalName(event.target.value)} type="text" placeholder="Animal Name" />
                <input value={newAnimalType} onChange={event => setNewAnimalType(event.target.value)} type="text" placeholder="Animal Breed" />
                <input value={newAge} onChange={event => setNewAge(event.target.value)} type="text" placeholder="Age" />
            </form>
            <div className= "flex flex-col justify-center items-center" >
                <span>testing...</span>
                <span>{newAnimalName}</span>
                <span> {newAnimalType}</span>
                <span> {newAge}</span>
            </div>

            <button onClick={() => {createAPetCard(newAnimalName,newAnimalType,newAge, '', session.userId, setSession, session)}}>Create
                Create a Pet Card

            </button>

        </div>
    );
};

export default CreatePetCard;