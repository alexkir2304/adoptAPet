import React from 'react';

const PetCard = ({name, type, age}) => {
    return (
        <div className="w-1/4">
            <div className="flex flex-col m-4 items-center gap-4 border-3">
                <div>
                    Image section
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
                <button>
                    Adopt this pet
                </button>
            </div>
        </div>
    );
};

export default PetCard;