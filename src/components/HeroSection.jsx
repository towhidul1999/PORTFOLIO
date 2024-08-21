// import React from 'react';

// const HeroSection = () => {
//     return (
//         <div className='grid grid-cols-2 bg-custom-black'>
//             <div className='mt-60 text-white font-extrabold text-4xl'>
//                 <h1>Hi There!</h1>
//                 <h1>I'M TOWHIDUL ISLAM</h1>
//                 <h1 className='pt-8 animate-bounce'>SOFTWARE ENGINEER</h1>
//             </div>

//             <div className='shadow-xl hover:animate-pulse rounded-full mt-24 pt-16 w-4/6 mx-auto flex justify-center items-center'>
//                 <img src="../../video/towhidul.png" alt="towhidul.png" className='-rotate-6 object-cover' />
//             </div>
//         </div>
//     );
// };

// export default HeroSection;

import React from 'react';

const HeroSection = () => {
    return (
        <div className='grid grid-cols-2 bg-custom-black h-screen'>
            <div className='flex flex-col justify-center text-white font-extrabold text-4xl'>
                <h1>Hi There!</h1>
                <h1>I'M TOWHIDUL ISLAM</h1>
                <h1 className='pt-8 animate-bounce'>SOFTWARE ENGINEER</h1>
            </div>

            <div className='flex justify-center items-center'>
                <div className='shadow-xl hover:animate-pulse rounded-full pt-16 w-4/6 h-4/6 overflow-hidden flex justify-center items-center'>
                    <img src="../../video/towhidul.png" alt="towhidul.png" className='object-cover -rotate-6' />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

