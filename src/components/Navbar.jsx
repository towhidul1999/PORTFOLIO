import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-custom-black h-20 fixed top-0 left-0 w-full flex shadow-xl z-50'>
            <div>
                <Link to="/"><h1 className='text-white ml-80 mt-6 text-3xl font-extrabold cursor-pointer'>Towhidul Islam</h1></Link>
            </div>
            <div className='ml-40 mt-8 space-x-10 text-white font-extrabold flex'>

                <Link to="/"><button className='hover:border-b-4 hover:border-custom-blue pb-1'>Home</button></Link>
                <Link to="/about"><button className='hover:border-b-4 hover:border-custom-blue pb-1'>About</button></Link>
                <Link to="/project"><button className='hover:border-b-4 hover:border-custom-blue pb-1'>Project</button></Link>
                <Link to="/article"><button className='hover:border-b-4 hover:border-custom-blue pb-1'>Article</button></Link>
                <Link to="/resume"><button className='hover:border-b-4 hover:border-custom-blue pb-1'>Resume</button></Link>


            </div>
            <div className='ml-40 mt-6 bg-custom-blue h-8 w-40 rounded-md hover:bg-gray-600 transition ease-in-out delay-150 flex items-center justify-center'>
                <button className='text-white'>
                    git
                </button>
            </div>


            {/* Responsive button design */}
            <div>

                <button class="bg-white p-3 rounded-md block">
                    <div class="grid grid-cols-3 gap-1 w-6 h-6">
                        <div class="bg-gray-500 w-2 h-2 rounded-sm"></div>
                        <div class="bg-gray-500 w-2 h-2 rounded-sm"></div>
                        <div class="bg-gray-500 w-2 h-2 rounded-sm"></div>
                        <div class="bg-gray-500 w-2 h-2 rounded-sm"></div>
                        <div class="bg-gray-500 w-2 h-2 rounded-sm"></div>
                        <div class="bg-gray-500 w-2 h-2 rounded-sm"></div>
                        <div class="bg-gray-500 w-2 h-2 rounded-sm"></div>
                        <div class="bg-gray-500 w-2 h-2 rounded-sm"></div>
                        <div class="bg-gray-500 w-2 h-2 rounded-sm"></div>
                    </div>
                </button>
            </div>


        </div>
    );
};

export default Navbar;
