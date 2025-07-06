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

        <main className="main">


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

                    <a href={"#create"}>
                        <Button color={'red'}><span className='text-2xl'>BRING YOUR PET</span> <span
                            className='ml-20 text-4xl'>→</span></Button>
                    </a>

                </div>
            </div>


            <div id='search' className='flex flex-col w-full justify-start items-center '>
                <div className='w-full'>
                    <p className=' text-center text-4xl text-blue-button font-bold mt-10'>
                        Refine your search
                    </p>
                </div>

                <div className='flex  w-[90%] justify-start items-start ml-20 mr-20 mt-5'>
                    <div className='flex justify-center w-1/3 md:w-1/4 min-h-[100vh]'>

                        <div className='flex flex-col justify-start items-center w-full gap-7 mt-5'>

                            <form action="" className=' w-3/4'>
                                <select onChange={(e) => {
                                    setPaginationIndex(paginationSize)
                                    setFilters({...filters, animaltype: e.target.value})
                                }}
                                        className='main__filters--type'
                                        name='mainFilter'
                                >
                                    <option value="" disabled={true} defaultChecked={true} name='mainFilter'>Chose a
                                        type
                                    </option>
                                    <option value="all" name='mainFilter'>All</option>
                                    <option value="cat" name='mainFilter'>Cat</option>
                                    <option value="dog" name='mainFilter'>Dog</option>
                                </select>
                            </form>

                            <form name="filterAge" onChange={(e) => {
                                setPaginationIndex(paginationSize)
                                setFilters({...filters, age: +e.target.value})
                            }} action=""
                                  className='main__filters--age '>
                                <div className="main__filters--ageItem">
                                    <input type="radio" id="1" value={1} name="filterAge"/>
                                    <label>0-6 months</label>
                                </div>
                                <div className="main__filters--ageItem">
                                    <input type="radio" id="2" value={2} name="filterAge"/>
                                    <label>7-12 months</label>
                                </div>
                                <div className="main__filters--ageItem">
                                    <input type="radio" id="3" value={3} name="filterAge"/>
                                    <label>1-5 years</label>
                                </div>
                                <div className="main__filters--ageItem">
                                    <input type="radio" id="4" value={4} name="filterAge"/>
                                    <label>5+ years</label>
                                </div>
                                <div className="main__filters--ageItem">
                                    <input type="radio" id="5" value={5} name="filterAge"/>
                                    <label>Any age</label>
                                </div>

                            </form>


                            <form action=""
                                  className='justify-center w-2/3 md:w-3/4'
                            >
                                <p className='text-center'>Cards to show</p>
                                <select onChange={(e) => {
                                    setPaginationSize(+e.target.value)
                                    setPaginationIndex(+e.target.value)
                                }}
                                        className='main__filters--type'
                                >
                                    <option value="" disabled={true} defaultChecked={true}>Chose a type</option>
                                    <option value={12}>12</option>
                                    <option value={24}>24</option>
                                    <option value={36}>36</option>
                                </select>
                            </form>


                        </div>

                    </div>

                    <div className='flex flex-col justify-start items-start w-3/4 '>
                        <div className='flex  justify-start w-full flex-wrap'>
                            {filteredPets && filteredPets.map((pet, index) => index < (paginationIndex) && index >= (paginationIndex - paginationSize) ?
                                <PetCard key={pet.$id}
                                         pet={pet}
                                         imageData={pet.imageData}
                                         name={pet.animalname}
                                         type={pet.animaltype}
                                         animaldescription={pet.animaldescription}
                                         age={pet.age}

                                /> : null)}
                        </div>

                        <div className='flex justify-start w-full gap-3'>
                            {filteredPets && filteredPets.map((pet, index) => index <= filteredPets.length / paginationSize ?
                                <a href={'#search'} key={pet.$id}
                                   onClick={(e) => setPaginationIndex((+e.target.innerHTML) * paginationSize)}
                                   className='border-2 border-lightBlue p-2 rounded-lg min-w-7'
                                >{index + 1}</a> : null)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="information flex flex-col">
                <div className="information__howItWorks flex ">
                    <div className="flex justify-center items-center w-1/2 bg-blue-button text-white text-6xl">
                        How Adoption Works
                    </div>
                    <div className="flex flex-col p-10 w-1/2 ">
                        <h1>
                            Your adoption: as unique as you and your pet
                        </h1>
                        <p>When you adopt a pet, you’re doing more than just finding a great pet.
                            You’re helping us invest in your community. </p>
                        <p>That’s because we partner with thousands of local adoption groups that provide the dogs and
                            cats you see in PetSmart stores and at our events. And when you adopt one of these pets, we
                            pay the partner group a small fee, which helps them save another pet’s life. </p>
                        <p>Working together, we can solve the pet homelessness problem — starting with your
                            community. </p>
                        <h1>The process: here’s what to expect </h1>
                        <p>Each adoption center or event takes on the local flavor of its community and adoption
                            partners. That means the process will be slightly different depending on where you go. But
                            there are some common things you can expect: </p>
                        <p><span>An interview.</span> Once you’ve chosen the pet who seems right for your family, you’ll
                            meet with a
                            representative from the local adoption group. They’ll ask you some questions to make sure
                            that the pet is a good match for your home and will make you and your pet happy for many
                            years to come. They may also have valuable information for you about the pet’s personality,
                            medical history and habits. </p>
                        <p><span>Some paperwork.</span> You will fill out an application and pay a reasonable adoption
                            fee, which is
                            usually set by the adoption partner. It’s a good idea to reserve 30 minutes to up to 2 hours
                            to complete the interview and paperwork. </p>
                        <p><span>Taking your pet home … soon.</span>In many cases, you’ll bring your pet home the same
                            day. But
                            there are some adoption partners that require a background check and/or home visit to ensure
                            the pet’s long-term safety. Ask your adoption representative about this at the beginning of
                            the process if waiting a few days is not what you had in mind. Another PetSmart store in
                            your area may have a partner that does same-day adoptions. </p>
                    </div>
                </div>
                <div className="information__fostering flex ">
                    <div className="flex flex-col p-10 w-1/2 ">
                        <h1>
                            Before fostering
                        </h1>
                        <p>Involve The Whole Family: Involve the whole family in the fostering conversation. Will kids be responsible for feeding the new 'roommate'? How will your family tolerate future adoption? Do your current pets tolerate other animals ok? The new pet is a big change for everyone, so allow everyone to weigh in, and suggest how they would like to help care for the pet. </p>
                        <p>Pet-Proof Your Home: Adjusting to a new environment can be a daunting task for new pets. Many animals can jump onto high surfaces or squeeze into the smallest of spaces. To protect foster pets in a new environment and to safeguard your belongings, it's recommended to animal-proof your entire house. Pay attention to any small or dangerous objects, such as pins, needles, paper clips, nails, staples, thread, string, rubber bands, caustic/toxic chemicals, mothballs, plants, and any other items that are potentially dangerous. We also recommend performing a check at pet-eye-level (on hands-and-knees or squatting) to ensure you aren't missing anything. </p>
                        <p>Other pet-proofing tips: Animals are attracted to electrical cords, TV cords, telephone cords, and curtains. These items should all be blocked so they can’t get at them.  </p>
                        <h1>After becoming a foster  </h1>
                        <p><span>Vaccination and Treatment:</span> Make sure your pet is up-to-date on vaccinations. Many infectious diseases for pets are preventable through vaccinations, including Canine Influenza, Leptospirosis (which can be transmitted to people), and Lyme. The cost of prevention is far less than the cost of the treatment and helps to keep pets healthy and free from disease. Speak with your foster coordinator to find out about foster pet requirements. </p>
                        <p><span>Groom Your Pet: </span>  It is recommended to professionally groom your pet every four to six weeks. Between salon appointments, use at-home grooming tools such as a cat or dog-specific toothbrush and specially formulated toothpaste, a nice rubber brush to help de-shed and invigorate the skin and coat, ear cleaner and cotton balls to gently cleanse the ears, and wipes for cleaning around the face, mouth, and eyes.  </p>

                    </div>
                    <div className="flex justify-center items-center w-1/2 bg-blue-button text-white text-6xl text-center">
                        Tips for Fostering Your New Pet
                    </div>
                </div>

                <div id='create' className='w-full'>
                    <CreatePetCard session={session} setSession={setSession} listOfPets={listOfPets}
                                   setListOfPets={setListOfPets}/>
                </div>


            </div>

        </main>

    )

};

export default Main;