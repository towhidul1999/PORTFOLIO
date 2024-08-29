import React from 'react';

const Project = () => {
    return (
        <>
            <div className="bg-custom-black h-screen flex justify-center items-center space-x-8 p-10">
                <div className="bg-custom-blue h-64 w-64 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:rotate-2 flex justify-center items-center text-white text-2xl font-semibold">
                    Meow
                </div>
                <div className="bg-custom-blue h-64 w-64 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:-rotate-2 flex justify-center items-center text-white text-2xl font-semibold">
                    Meow
                </div>
                <div className="bg-custom-blue h-64 w-64 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:rotate-2 flex justify-center items-center text-white text-2xl font-semibold">
                    Meow
                </div>
            </div>


        </>
    );
};

export default Project;