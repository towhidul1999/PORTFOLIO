import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // State to manage menu visibility on small screens
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='bg-custom-black h-20 fixed top-0 left-0 w-full flex items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 shadow-xl z-50'>
            {/* Logo Section */}
            <div className='flex-shrink-0'>
                <Link to="/">
                    <h1 className='text-white text-2xl sm:text-3xl font-extrabold cursor-pointer'>
                        Towhidul Islam
                    </h1>
                </Link>
            </div>

            {/* Menu Links (Hidden by default on small screens, toggled by hamburger) */}
            <div
                id='menu'
                className={`${isMenuOpen ? 'block' : 'hidden'
                    } absolute top-20 left-0 w-full bg-custom-black md:static md:flex md:space-x-10 text-white font-extrabold ml-52`}
            >
                <div className='flex flex-col md:flex-row items-center md:space-x-10 space-y-4 md:space-y-0'>
                    <Link to="/">
                        <button className='hover:border-b-4 hover:border-custom-blue pb-1'>Home</button>
                    </Link>
                    <Link to="/about">
                        <button className='hover:border-b-4 hover:border-custom-blue pb-1'>About</button>
                    </Link>
                    <Link to="/project">
                        <button className='hover:border-b-4 hover:border-custom-blue pb-1'>Project</button>
                    </Link>
                    <Link to="/article">
                        <button className='hover:border-b-4 hover:border-custom-blue pb-1'>Article</button>
                    </Link>
                    <Link to="/resume">
                        <button className='hover:border-b-4 hover:border-custom-blue pb-1'>Resume</button>
                    </Link>

                    {/* Git Button (Now part of the responsive menu on smaller screens) */}
                    <div className='bg-custom-blue h-8 w-24 sm:w-32 md:w-40 rounded-md hover:bg-gray-600 transition ease-in-out flex items-center justify-center md:hidden'>
                        <button className='text-white'>Git</button>
                    </div>
                </div>
            </div>

            {/* Git Button (Visible only on medium screens and larger, outside of hamburger menu) */}
            <div className='hidden md:block'>
                <div className='bg-custom-blue h-8 w-24 sm:w-32 md:w-40 rounded-md hover:bg-gray-600 transition ease-in-out flex items-center justify-center'>
                    <button className='text-white'>Git</button>
                </div>
            </div>

            {/* Hamburger Menu for Small Screens */}
            <div className='md:hidden'>
                <button
                    className="p-3 rounded-md"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6 text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
