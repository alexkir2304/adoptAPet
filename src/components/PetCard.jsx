import React, {useState} from 'react';

const PetModal = ({disabled, name, type, age, imageData, pet, setDisabled}) => {
    return (

        <div onClick={() => {
            document.body.style.overflow = 'auto';
            setDisabled(true)
        }} className={`${disabled ? 'hidden' : 'block'} pet__modal flex  justify-center items-center    fixed top-0 bottom-0 left-0 right-0 h-[100vh] z-20`}>

            <div onClick={e  => e.stopPropagation()}
                className='flex flex-col justify-center items-center '>
                <img className='w-2/3' src={imageData} alt=""/>
                <h1>This is Modal Pet Card</h1>
                <span>{name}</span>
                <span>{type}</span>
                <span>{age}</span>
            </div>

        </div>

    );
};


const PetCard = ({name, type, age, imageData, pet}) => {

    const [disabled, setDisabled] = useState(true);


    return (
        <div className="petCardWrapper ">
            <div className="petCard relative">
                <div className='w-full h-[60%] overflow-hidden rounded'
                   >
                    <img src={imageData} alt="" className='w-full'/>
                </div>
                <span>
                    {name}
                </span>
                <span>
                    {type}
                </span>
                <span>
                    {age}
                </span>
                <button onClick={() => {
                    document.body.style.overflow = 'hidden';
                    setDisabled(false)}
                }
                        >
                    Adopt this pet
                </button>

                {!disabled && <PetModal disabled={disabled} type={type} age={age} pet={pet}  imageData={imageData} setDisabled={setDisabled} name={name} /> }

            </div>
        </div>
    );
};

export default PetCard;