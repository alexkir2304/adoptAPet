import React, {createContext, useContext, useEffect, useState} from 'react';
import {createAPetCard, getAllPetCards} from "../appwrite/database.js";
import CreatePetCard from "../components/createPetCard.jsx";
import PetCard from "../components/PetCard.jsx";
import Button from "../components/Button.jsx";

const Main = ({session, setSession, listOfPets, setListOfPets, filteredPets, setFilteredPets}) => {

    const [filters, setFilters] = useState({animaltype: 'all', age: 5});
    // const [filters, setFilters] = useState({});
    const [paginationSize, setPaginationSize] = useState(12)
    const [paginationIndex, setPaginationIndex] = useState(12);


    const filterAllPets = () => {

        if (session) {


            const newFilteredPets = listOfPets.filter(pet => {

                const testingFilters = Array.from([filters])
                const flexibleFilter = testingFilters[0]

                if (flexibleFilter.animaltype === 'all' && flexibleFilter.age === 5)  return true

                if (flexibleFilter.animaltype === 'all' && flexibleFilter.age !== 5) {
                    delete flexibleFilter.animaltype
                }

                if (flexibleFilter.animaltype !== 'all' && flexibleFilter.age === 5) {
                    delete flexibleFilter.age
                }

                for (let key in flexibleFilter) {
                    if (pet[key] === undefined || pet[key] !== flexibleFilter[key]) return false;
                }
                return true;

            })
            setFilteredPets(newFilteredPets);
        }
    }

    useEffect(() => {
        filterAllPets();
    }, [listOfPets, filters, paginationIndex, paginationSize]);



    return (

        <main className="main ">

            <div className='header relative flex justify-start  h-[90vh] '>
                <div className="headerGradient absolute w-full">

                </div>
                <div className='headerText flex flex-col justify-center items-start w-1/2 gap-7 ml-15'>
                    <span className='text-6xl text-blue-button font-bold'>
                        YOUR HEARTS
                    </span>
                    <span className='text-9xl text-red-button font-bold'>
                        SAVE LIVES
                    </span>
                    <span className='text-3xl text-blue-button mb-10'>
                        Bring more happiness to your home <br/>
                        It will keep you smile forever.
                    </span>


                    <a href={"#search"} className='w-1/2'>
                        <Button><span className='text-2xl'>ADOPT A PET</span> <span className='ml-20 text-4xl'>→</span></Button>
                    </a>

                    <a href={"#create"} >
                        <Button color={'red'}><span className='text-2xl'>BRING YOUR PET</span> <span
                            className='ml-20 text-4xl'>→</span></Button>
                    </a>

                </div>
            </div>


            <div id='search' className='w-full'>
                <p className='m-auto text-center'>
                    Refine your search
                </p>
            </div>
            <div className='flex justify-center w-full min-h-[100vh]'>


                <div className='flex flex-col justify-start items-center w-1/4 gap-7'>

                    <form action="">
                        <select onChange={(e) => {
                            setPaginationIndex(paginationSize)
                            setFilters({...filters, animaltype: e.target.value})
                        }}
                                name="" id="">
                            <option value="" disabled={true} defaultChecked={true}>Chose a type</option>
                            <option value="all">All</option>
                            <option value="cat">Cat</option>
                            <option value="dog">Dog</option>
                        </select>
                    </form>

                    <form name="filterAge" onChange={(e) => {
                        setPaginationIndex(paginationSize)
                        setFilters({...filters, age: +e.target.value})
                    }} action=""
                          className='flex flex-col justify-center items-center'>
                        <input type="radio" id="1" value={1} name="filterAge"/>
                        <label>0-6 months</label>
                        <input type="radio" id="2" value={2} name="filterAge"/>
                        <label>7-12 months</label>
                        <input type="radio" id="3" value={3} name="filterAge"/>
                        <label>1-5 years</label>
                        <input type="radio" id="4" value={4} name="filterAge"/>
                        <label>5+ years</label>
                        <input type="radio" id="5" value={5} name="filterAge"/>
                        <label>Any age</label>

                    </form>

                    <p>Cards to show</p>

                    <form action="">
                        <select onChange={(e) => {
                            setPaginationSize(+e.target.value)
                            setPaginationIndex(+e.target.value)

                        }}
                                name="" id="">
                            <option value="" disabled={true} defaultChecked={true}>Chose a type</option>
                            <option value={12}>12</option>
                            <option value={24}>24</option>
                            <option value={36}>36</option>
                        </select>
                    </form>


                </div>

                <div className='flex flex-col justify-start items-start w-3/4 '>
                    <div className='flex  justify-start w-full flex-wrap'>
                        {filteredPets && filteredPets.map((pet, index) => index < (paginationIndex) && index >= (paginationIndex - paginationSize) ?
                            <PetCard key={pet.$id} pet={pet}
                                     imageData={pet.imageData}
                                     name={pet.animalname}
                                     type={pet.animaltype} age={pet.age}/> : null)}

                    </div>

                    <div className='flex justify-start w-full gap-7'>
                        {filteredPets && filteredPets.map((pet, index) => index <= filteredPets.length / paginationSize ?
                            <button key={pet.$id}
                                    onClick={(e) => setPaginationIndex((+e.target.innerHTML) * paginationSize)}>{index + 1}</button> : null)}
                    </div>


                </div>


            </div>



            <div id='create' className="flex justify-center items-center w-full h-[100vh] ">

                <CreatePetCard session={session} setSession={setSession} listOfPets={listOfPets}
                               setListOfPets={setListOfPets}/>

            </div>

        </main>

    )

};

export default Main;