import React, {useEffect, useState} from 'react';
import {createAPetCard} from "../appwrite/database.js";
import CreatePetCard from "../components/createPetCard.jsx";
import PetCard from "../components/petCard.jsx";

const Main = ({session, setSession, listOfPets, setListOfPets, filteredPets, setFilteredPets}) => {

    const [filters, setFilters] = useState({name: '', type: '', age: null});

    const filterAllPets = () => {

        if (session) {
            const newFilteredPets = listOfPets.filter((pet) => pet.age > 100)
            setFilteredPets(newFilteredPets);
        }
    }

    useEffect(() => {
        filterAllPets();
    }, [listOfPets]);

    return (

        <section className="flex flex-col justify-center items-center mt-10 p-5 gap-7">
            <div className="flex justify-center items-center w-full h-1/4 ">
                <CreatePetCard session={session} setSession={setSession} listOfPets={listOfPets} setListOfPets={setListOfPets}/>
            </div>


            <div className='flex justify-center w-full flex-wrap'>
                <div className='flex flex-col justify-center items-center w-1/3'>

                    <form action="">
                        <select onChange={(e) => console.log(e.target.value)} name="" id="">
                            <option value="" disabled={true}>Chose a type</option>
                            <option value="cat" >Cat</option>
                            <option value="dog">Dog</option>
                        </select>
                    </form>

                    <form  name='pets' onChange={(e) => console.log(e.target.value)} action="" className='flex flex-col justify-center items-center'>
                        <input type="radio" id="1" value="1" name="filterAge"/>
                        <label htmlFor="1" >something</label>
                        <input type="radio" id="2" value="2" name="filterAge" />
                        <label htmlFor="2">something</label>
                        <input type="radio" id="3" value="3" name="filterAge"/>
                        <label htmlFor="3">something</label>
                    </form>


                </div>
                <div className='flex  justify-between w-2/3 flex-wrap'>
                    {filteredPets && filteredPets.map((pet) => <PetCard key={pet.$id} pet={pet} name={pet.animalname} type={pet.animaltype} age={pet.age}/>)}
                </div>
            </div>

        </section>

    )

};

export default Main;