import React, {useContext, useEffect, useState} from 'react';
import {addNewPetImage, createAPetCard, getNewPetImage} from "../appwrite/database.js";
import {AccountDataContext} from "../App.jsx";

const CreatePetCard = ({session, listOfPets, setListOfPets}) => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [newAnimalName, setNewAnimalName] = useState('');
    const [newAnimalType, setNewAnimalType] = useState('');
    const [animaldescription, setAnimaldescription] = useState('');
    const [newAge, setNewAge] = React.useState();
    const [imageId, setImageId] = React.useState(null);
    const [imageData, setImageData] = React.useState(null);

    const userData = useContext(AccountDataContext)


    useEffect(() => {
        getNewPetImage(imageId, setImageData)
    }, [imageId])

    return (
        <div className="createPetCardWrapper ">
            <div className="createPetCard">


                <div className='createPetCard__headerSection'>
                    <h1>
                        Can't keep a pet? Bring it to us! <br/>
                        We take care of it and find new owners
                    </h1>
                </div>

                <div className='createPetCard__imageSection'>

                    <img src={imageData} className='yourImgTag max-w-full' alt=""/>
                    <input onChange={async (e) => {
                        await addNewPetImage(imageId, setImageId, imageData, setImageData);

                            // imageData ? getNewPetImage(fileId) : null;
                    }} type="file" id="newPetImage" name="avatar" accept="image/png, image/jpeg"
                           className='flex items-center justify-center text-center '/>
                    <label htmlFor="avatar" className='flex justify-center items-center'></label>

                </div>


                <div className='createPetCard__formSection'>
                    <form action="">
                        <input onChange={event => setPhoneNumber(event.target.value)} type="text"
                               placeholder="Phone Number"/>
                        <input onChange={event => setNewAnimalName(event.target.value)} type="text"
                               placeholder="Animal Name"/>
                        <input onChange={event => setAnimaldescription(event.target.value)} type="text"
                               placeholder="Pet description"/>
                        <select onChange={(e) => setNewAnimalType(e.target.value)} name="" id="">
                            <option value="">Chose a type</option>
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
                        createAPetCard(phoneNumber, newAnimalName, newAnimalType, newAge, '', session.userId, listOfPets, setListOfPets, userData && userData.email, imageId, imageData, animaldescription)
                    }}>Create
                        Create a Pet Card
                    </button>
                </div>


            </div>


        </div>
    );
};

export default CreatePetCard;