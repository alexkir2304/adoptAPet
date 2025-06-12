import {Databases, ID, Query} from "appwrite";
import {client, database} from "./client.js";


export const createAPetCard = async ( animalName, animalType, age, imageUrl, userId, listOfPets, setListOfPets) => {

    try {
        const newPet = await database.createDocument(
            '684565930005f857e4a4',
            '684565c50036e0dac2c3',
            ID.unique(),
            {
                animalname: animalName,
                animaltype: animalType,
                age: +age,
                userId: userId,
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
    )

    const {documents, total} = await allPets;
    setListOfPets(documents)

}