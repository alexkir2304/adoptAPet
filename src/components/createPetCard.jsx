import React, {useContext, useState} from 'react';
import {createAPetCard} from "../appwrite/database.js";
import {AccountDataContext} from "../App.jsx";

const CreatePetCard = ({session, listOfPets, setListOfPets}) => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [newAnimalName, setNewAnimalName] = React.useState('');
    const [newAnimalType, setNewAnimalType] = React.useState('');
    const [newAge, setNewAge] = React.useState();

    const userData = useContext(AccountDataContext)


    return (
        <div className="flex flex-col justify-center items-center w-full h-1/4 gap-8">
            <div>
                image section
            </div>
            <form action="">
                <input onChange={event => setPhoneNumber(event.target.value)} type="text" placeholder="Phone Number"/>
                <input onChange={event => setNewAnimalName(event.target.value)} type="text" placeholder="Animal Name"/>
                <select onChange={(e) => setNewAnimalType(e.target.value)} name="" id="" >
                    <option value="" >Chose a type</option>
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                </select>
            </form>
            <form onChange={(e) => setNewAge(+e.target.value)} action="">
                <input type="radio" id="1" value={1} name="filterAge" defaultChecked={true}/>
                <label>0-6 months</label>
                <input type="radio" id="2" value={2} name="filterAge"/>
                <label>7-12 months</label>
                <input type="radio" id="3" value={3} name="filterAge"/>
                <label>1-5 years</label>
                <input type="radio" id="4" value={4} name="filterAge"/>
                <label>5+ years</label>
            </form>


            <div className="flex flex-col justify-center items-center">
                <span>testing...</span>
                <span>{newAnimalName}</span>
                <span> {newAnimalType}</span>
                <span> {newAge}</span>
            </div>

            <button onClick={() => {
                createAPetCard(phoneNumber,newAnimalName, newAnimalType, newAge, '', session.userId, listOfPets, setListOfPets, userData && userData.email )
            }}>Create
                Create a Pet Card
            </button>

        </div>
    );
};

export default CreatePetCard;