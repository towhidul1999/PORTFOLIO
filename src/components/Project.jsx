import React from 'react';

const Project = () => {
    return (
        <>
            <div className="bg-custom-black h-screen flex justify-center items-center space-x-8 p-10">
                <div className="bg-custom-blue h-64 w-64 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:rotate-2 justify-center       items-center text-white text-2xl font-semibold">

                    <div className='rounded-2xl bg-slate-400 object-cover'>
                        <img src="../../video/project1.png" alt="Project" />
                    </div>

                    <div className=''>
                        Lorem, ipsum dolor sit amet consectetur.
                    </div>

                </div>

                <div className="bg-custom-blue h-64 w-64 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:-rotate-2 justify-center items-center text-white text-2xl font-semibold">

                    <div className='rounded-2xl bg-slate-400 object-cover'>
                        <img src="../../video/project1.png" alt="Project" />
                    </div>

                    <div className=''>
                        Lorem, ipsum dolor sit amet consectetur.
                    </div>

                </div>

                <div className="bg-custom-blue h-64 w-64 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:rotate-2 justify-center items-center text-white text-2xl font-semibold">

                    <div className='rounded-2xl bg-slate-400 object-cover'>
                        <img src="../../video/project1.png" alt="Project" />
                    </div>

                    <div className=''>
                        Lorem, ipsum dolor sit amet consectetur.
                    </div>

                </div>
            </div>


        </>
    );
};

export default Project;