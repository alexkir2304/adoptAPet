import React, {createContext, useContext, useEffect, useState} from 'react';
import {createAPetCard, getAllPetCards} from "../appwrite/database.js";
import CreatePetCard from "../components/createPetCard.jsx";
import PetCard from "../components/petCard.jsx";

const Main = ({session, setSession, listOfPets, setListOfPets, filteredPets, setFilteredPets}) => {

    const [filters, setFilters] = useState({name: '', type: 'all', age: 5});
    // const [filters, setFilters] = useState({});
    const [paginationIndex, setPaginationIndex] = useState(12);
    const [paginationSize, setPaginationSize] = useState(12)

    const filterAllPets = () => {

        if (session) {

            // const newFilteredPets = listOfPets.filter((pet) => !filters ? pet : );

            const newFilteredPets = listOfPets.filter((pet) => filters.type === 'all' && filters.age === 5 ?
                pet  :  filters.type === 'all' && filters.age !== 5 ?
                pet && pet.age === filters.age : pet.animaltype === filters.type && filters.age === 5 ?
                        pet.animaltype === filters.type:
                pet.animaltype === filters.type && pet.age === filters.age);   //переписать этот бред. Прогнать все фильтры через цикл, в каждой итерации применить фильтр к listOfPets + добавить полученный кусок в итоговый массив. Повторить, пока фильтры не кончатся. Мозможно придется унифицировать схемы объекта баз данных с именованием фильтров
            setFilteredPets(newFilteredPets);
        }
    }

    useEffect(() => {
        filterAllPets();
    }, [listOfPets, filters, paginationIndex, paginationSize]);



    return (

        <main className="flex flex-col justify-center items-start mt-10 p-5 gap-7">

            <div className='flex justify-start  h-[90vh] '>
                <div className='flex flex-col justify-center items-center gap-7'>
                    <span>
                        Your hearts
                    </span>
                    <span>
                        save lifes
                    </span>
                    <span>
                        some text about how good getting pets is
                    </span>
                    <button>
                        asdasdas
                    </button>
                    <button>
                        FIND OWNERS
                    </button>
                    <button>
                        MAKE A DONATION
                    </button>
                </div>
            </div>



            <div className='w-full'>
                <p className='m-auto text-center'>
                    Refine your search
                </p>
            </div>
            <div className='flex justify-center w-full h-[100vh]'>


                <div className='flex flex-col justify-start items-center w-1/4 '>

                    <form action="">
                        <select onChange={(e) => {
                            setPaginationIndex(paginationSize)
                            setFilters({...filters, type: e.target.value})
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
                        <input type="radio" id="5" value={5} name="filterAge" defaultChecked={true} />
                        <label>any age</label>
                    </form>


                </div>

                <div className='flex flex-col justify-start items-start w-3/4 '>
                    <div className='flex  justify-start w-full flex-wrap'>
                        {filteredPets && filteredPets.map((pet, index) => index < (paginationIndex) && index >= (paginationIndex -paginationSize) ?
                            <PetCard key={pet.$id} pet={pet}
                                     name={pet.animalname}
                                     type={pet.animaltype} age={pet.age}/> : null)}
                    </div>

                    <div className='flex justify-start w-full gap-7'>
                        {filteredPets && filteredPets.map((pet, index) => index <= filteredPets.length/paginationSize ? <button key={pet.$id}
                            onClick={(e) => setPaginationIndex((+e.target.innerHTML) * paginationSize)}>{index + 1}</button> : null)}
                    </div>

                </div>


            </div>

            <div className="flex justify-center items-center w-full h-[100vh] ">

                <CreatePetCard session={session} setSession={setSession} listOfPets={listOfPets}
                               setListOfPets={setListOfPets}/>

            </div>

        </main>

    )

};

export default Main;