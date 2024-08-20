import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-custom-black h-20 relative flex'>
            <div>
                <h1 className='text-white ml-80 mt-6 text-3xl font-extrabold'>Md. Towhidul Islam</h1>
            </div>
            <div className='ml-40 mt-8 space-x-10 text-white font-extrabold'>
                <button className='hover:underline 5 meow'>Home</button>
                <button className='hover:underline'>About</button>
                <button className='hover:underline'>Resume</button>
                <button className='hover:underline'>Project</button>
                <button className='hover:underline'>Article</button>
            </div>
            <div className='ml-40 mt-6 bg-custom-blue h-8 w-40 rounded-md hover:bg-gray-600 transition ease-in-out delay-150'>
                <button className='text-white'>
                    git
                </button>
            </div>
        </div>
    );
};

export default Navbar;