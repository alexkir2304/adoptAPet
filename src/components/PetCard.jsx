import React, {useState} from 'react';

const PetModal = ({disabled, name, type, age, imageData, pet, setDisabled,animaldescription }) => {
    return (

        <div onClick={() => {
            document.body.style.overflow = 'auto';
            setDisabled(true)
        }} className={`${disabled ? 'hidden' : 'block'} pet__modal flex  justify-center items-center  fixed top-0 bottom-0 left-0 right-0 h-[100vh] w-full z-9999 `}>

            <div onClick={e => e.stopPropagation()}
                 className='pet__modal--content'>

                <div className='pet__modal--content--image'>
                    <img  src={imageData} alt=""/>
                </div>

                <div className='pet__modal--content--text '>
                    <h1>Hi, my name is <span className='text-lightBlue'>{name}</span></h1>
                    <span>{animaldescription}</span>
                    <span>{age === 1 ? '0-6 months' : age === 2 ? '7-12 months' : age === 3 ? '1-5 years' : age === 4 ? '5+ years' : null}</span>
                    <span>If you are interested in adopting this pet, my contacts are: <br/> Phone: {pet.phonenumber} <br/> Email: {pet.email}</span>
                </div>
            </div>
        </div>

    );
};

const TestModal = ({disabled}) => {
    return (
        <div className='fixed top-0 bot-0 right-0 left-0 border-7 border-red-900'>
            TESTMODAL
        </div>
    )
}

const PetCard = ({name, type, age, imageData, pet, animaldescription}) => {

    const [disabled, setDisabled] = useState(true);

    return (

        <div className="petCardWrapper">
            <div className="petCard  text-nowrap">

                <div className='w-full h-[60%] overflow-hidden rounded'
                >
                    <img src={imageData} alt="" className='w-full'/>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <span className='text-center'>
                        Hi! My name is <br/> <span className='text-blue-button font-bold'>{name}</span>
                    </span>
                    <span>
                        I am a <span className='text-blue-button font-bold'>{type}</span>
                    </span>
                    <span>
                        My age is  <span className='text-blue-button font-bold'>{age === 1 ? '0-6 months' : age === 2 ? '7-12 months' : age === 3 ? '1-5 years' : age === 4 ? '5+ years' : null}</span>
                    </span>
                    <button onClick={() => {
                        document.body.style.overflow = 'hidden';
                        setDisabled(false)
                    }
                    } className='text-red-button font-bold text-2xl cursor-pointer'>

                        Learn More →
                    </button>
                </div>

                {/*<TestModal/>*/}

                {!disabled && <PetModal disabled={disabled} type={type} age={age} pet={pet} imageData={imageData}
                                        setDisabled={setDisabled} name={name} animaldescription={animaldescription}/>}

            </div>
        </div>
    );
};

export default PetCard;