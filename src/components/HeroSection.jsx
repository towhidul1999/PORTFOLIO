import React from 'react';

const HeroSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 bg-custom-black h-screen px-36'>
            {/* Text Section */}
            <div className='flex flex-col justify-center items-center md:items-start text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl p-6 md:p-0'>
                <h1>Hi There!</h1>
                <h1>I'M TOWHIDUL ISLAM</h1>
                <h1 className='pt-8 animate-bounce text-2xl sm:text-3xl lg:text-4xl'>SOFTWARE ENGINEER</h1>
            </div>

            {/* Image Section */}
            <div className='flex justify-center items-center mt-10 md:mt-0'>
                <div className='shadow-xl hover:animate-pulse rounded-full w-3/4 sm:w-2/3 md:w-4/6 h-3/4 sm:h-2/3 md:h-4/6 overflow-hidden flex justify-center items-center'>
                    <img src="../../video/towhidul.png" alt="towhidul.png" className='object-cover -rotate-6 -mb-16' />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
