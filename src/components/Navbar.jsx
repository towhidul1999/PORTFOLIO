import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-custom-black h-20 fixed top-0 left-0 w-full flex shadow-xl z-50'>
            <div>
                <Link to="/"><h1 className='text-white ml-80 mt-6 text-3xl font-extrabold cursor-pointer'>Towhidul Islam</h1></Link>
            </div>
            <div id='button' className='ml-40 mt-8 space-x-10 text-white font-extrabold flex sm:hidden md:flex lg:flex xl:flex 2xl:flex'>
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

                <button
                    className="p-3 rounded-md hidden sm:block md:hidden"
                    onClick={() => {
                        console.log('meow')
                        const buttonDiv = document.getElementById('button');
                        buttonDiv.classList.toggle('hidden');
                    }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>



            </div>


        </div>
    );
};

export default Navbar;
