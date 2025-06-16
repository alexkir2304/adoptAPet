import {Databases, ID, Query} from "appwrite";
import {client, database, storage} from "./client.js";


export const createAPetCard = async (phoneNumber, animalName, animalType, age, imageUrl, userId, listOfPets, setListOfPets, userEmail, imageId, imageData) => {

    try {
        const newPet = await database.createDocument(
            '684565930005f857e4a4',
            '684565c50036e0dac2c3',
            ID.unique(),
            {
                phonenumber: phoneNumber,
                animalname: animalName,
                animaltype: animalType,
                age: age,
                userId: userId,
                email: userEmail,
                imageId: imageId,
                imageData: imageData
            }
        );
        const response = await newPet;
        setListOfPets([...listOfPets, newPet]);
        console.log(response)
    }   catch (error) {
        console.log(error);
    }

}


export const getAllPetCards = async (listOfPets, setListOfPets) => {

    const allPets = await database.listDocuments(
        '684565930005f857e4a4',
        '684565c50036e0dac2c3',
        [
                Query.limit(199),
                // Query.offset(0)
            ]
    )

    const {documents, total} = await allPets;
    setListOfPets(documents)

}

export const addNewPetImage = async (imageId, setImageId, imageData, setImageData) => {
    const promise = storage.createFile(
        '68501a3e0025ef9407dd',
        ID.unique(),
        document.getElementById('newPetImage').files[0]
    );
    setImageId((await promise).$id)

    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    })
}


export const getNewPetImage = async (imageId, setImageData) => {
    const result = storage.getFileDownload('68501a3e0025ef9407dd', imageId);

    console.log(result); // Resource URL
    setImageData(result);

}