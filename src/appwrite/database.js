import {Databases, ID, Query} from "appwrite";
import {client, database} from "./client.js";


export const createAPetCard = async ( phoneNumber, animalName, animalType, age, imageUrl, userId, listOfPets, setListOfPets, userEmail) => {

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