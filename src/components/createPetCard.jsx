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
                    <form className='createPetCard__formSection--stringInfo' action="">
                        <input onChange={event => setNewAnimalName(event.target.value)} type="text"
                               placeholder="Animal Name"/>
                        <textarea onChange={event => setAnimaldescription(event.target.value)}
                               placeholder="Pet description"/>
                        <input onChange={event => setPhoneNumber(event.target.value)} type="text"
                               placeholder="Phone Number"/>


                        <select onChange={(e) => setNewAnimalType(e.target.value)} name="" id="">
                            <option value="">Chose a type</option>
                            <option value="cat">Cat</option>
                            <option value="dog">Dog</option>
                        </select>
                    </form>
                    <form className='createPetCard__formSection--age' onChange={(e) => setNewAge(+e.target.value)} action="">

                        <div className="createPetCard__formSection--age--item">
                            <input type="radio" id="1" value={1} name="filterAge" defaultChecked={true}/>
                            <label>0-6 months</label>
                        </div>
                        <div className="createPetCard__formSection--age--item">
                            <input type="radio" id="2" value={2} name="filterAge"/>
                            <label>7-12 months</label>
                        </div>
                        <div className="createPetCard__formSection--age--item">
                            <input type="radio" id="3" value={3} name="filterAge"/>
                            <label>1-5 years</label>
                        </div>
                        <div className="createPetCard__formSection--age--item">
                            <input type="radio" id="4" value={4} name="filterAge"/>
                            <label>5+ years</label>
                        </div>
                    </form>

                    <button className='createPetCard__formSection--submit' onClick={() => {
                        createAPetCard(phoneNumber, newAnimalName, newAnimalType, newAge, '', session.userId, listOfPets, setListOfPets, userData && userData.email, imageId, imageData, animaldescription)
                    }}>
                        Create a Pet Card
                    </button>
                </div>


            </div>


        </div>
    );
};

export default CreatePetCard;