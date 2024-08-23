import React from 'react';

const About = () => {
    return (
        <>
            <div className='grid grid-cols-2 mt-20 bg-custom-black'>

                <div className='mt-40 justify-center'>
                    <h1 className='text-white font-extrabold text-4xl'>Know Who I'M</h1>
                    <br />
                    <br />

                    <h3 className='text-white font-extrabold text-xl ml-10'>Hi Everyone, I am Towhidul Islam from Dhaka, Bangladesh.
                        I am Bachelor of Science in Computer Science and Engineering.
                    </h3>

                    <br />
                    <br />

                    <h2 className='text-white font-extrabold text-xl ml-10'>
                        Apart from coding, some other activities that I love to do!
                    </h2>
                    <ol className='text-white font-extrabold text-xl'>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ol>
                    <br />
                    <br />
                    <h5 className='text-white'>Programming is lifestyle!</h5>
                </div>

                <div className='mt-36 text-white font-extrabold text-4xl flex flex-col items-center'>
                    <h1 className="mb-10 text-center">Contact Me</h1>
                    <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
                        <form action="">
                            <div className="mb-6">
                                <label for="name" className="block text-[#243c5a] font-semibold mb-2">Name</label>
                                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#243c5a] shadow-md" />
                            </div>

                            <div className="mb-6">
                                <label for="email" className="block text-[#243c5a] font-semibold mb-2">Email</label>
                                <input type="text" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#243c5a] shadow-md" />
                            </div>

                            <div className="mb-6">
                                <label for="phone" className="block text-[#243c5a] font-semibold mb-2">Phone Number</label>
                                <input type="text" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#243c5a] shadow-md" />
                            </div>

                            <button type="submit" className="w-full bg-[#243c5a] text-white py-3 rounded-md font-semibold hover:bg-[#1b2f4a] transition-colors shadow-lg transform hover:scale-105">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>


            </div>

            <div className='bg-custom-black text-white'>
                <h1>Professional Skill</h1>
                <div className='flex space-x-6 content-center w-40 h-40'>
                    <div className='border-slate-500'>
                        <img src="../../video/react.png" alt="" />
                    </div>
                    <img src="../../video/node.png" alt="" />
                    <img src="../../video/express.png" alt="" />
                    <img src="../../video/mongodb.png" alt="" />




                </div>
            </div>
        </>
    )
};

export default About;
