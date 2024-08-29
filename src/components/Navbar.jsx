import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-custom-black h-20 fixed top-0 left-0 w-full flex shadow-xl z-50'>
            <div>
                <h1 className='text-white ml-80 mt-6 text-3xl font-extrabold'>Towhidul Islam</h1>
            </div>
            <div className='ml-40 mt-8 space-x-10 text-white font-extrabold flex'>
                <Link to="/home"><button className='hover:border-b-4 hover:border-custom-blue pb-1'>Home</button></Link>
                <Link to="/about"><button className='hover:border-b-4 hover:border-custom-blue pb-1'>About</button></Link>
                <button className='hover:border-b-4 hover:border-custom-blue pb-1'>Project</button>
                <button className='hover:border-b-4 hover:border-custom-blue pb-1'>Article</button>
                <button className='hover:border-b-4 hover:border-custom-blue pb-1'>Resume</button>
            </div>
            <div className='ml-40 mt-6 bg-custom-blue h-8 w-40 rounded-md hover:bg-gray-600 transition ease-in-out delay-150 flex items-center justify-center'>
                <button className='text-white'>
                    git
                </button>
            </div>

        </div>
    );
};

export default Navbar;
