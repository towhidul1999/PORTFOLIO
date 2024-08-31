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

                <div className='mt-36 text-white font-extrabold text-4xl flex flex-col items-center transform transition duration-300 hover:scale-105 hover:rotate-2'>
                    <h1 className="mb-10 text-center">Contact Me</h1>
                    <div className="bg-custom-blue p-8 rounded-lg shadow-2xl w-full max-w-md">
                        <form action="">
                            <div className="mb-6">
                                <label for="name" className="block text-white font-semibold mb-2">Name</label>
                                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#243c5a] shadow-md" />
                            </div>

                            <div className="mb-6">
                                <label for="email" className="block text-white font-semibold mb-2">Email</label>
                                <input type="text" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#243c5a] shadow-md" />
                            </div>

                            <div className="mb-6">
                                <label for="phone" className="block text-white font-semibold mb-2">Phone Number</label>
                                <input type="text" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#243c5a] shadow-md" />
                            </div>

                            <button type="submit" className="w-full bg-[#243c5a] text-white py-3 rounded-md font-semibold hover:bg-gray-600 transition-colors shadow-lg transform hover:scale-105">
                                Submit
                            </button>
                        </form>
                    </div>

                </div>


            </div>

            <div className='bg-custom-black text-white p-8'>
                <h1 className='text-center text-2xl font-bold mb-6'>Professional Skill's</h1>
                <div className='flex justify-center items-center space-x-6'>
                    <img src="../../video/react.png" alt="React Logo" className="w-48 h-48 rounded-lg p-2 transform transition duration-300 hover:scale-105 hover:rotate-2 bg-custom-blue" />
                    <img src="../../video/node.png" alt="Node.js Logo" className="w-48 h-48 rounded-lg p-2 transform transition duration-300 hover:scale-105 hover:rotate-2 bg-custom-blue" />
                    <img src="../../video/express.png" alt="Express Logo" className="w-48 h-48 rounded-lg p-2 transform transition duration-300 hover:scale-105 hover:rotate-2 bg-custom-blue" />
                    <img src="../../video/mongodb.png" alt="MongoDB Logo" className="w-48 h-48 rounded-lg p-2 transform transition duration-300 hover:scale-105 hover:rotate-2 bg-custom-blue" />
                </div>
            </div>

            <div className='bg-custom-black text-white p-8'>
                <h1 className='text-center text-2xl font-bold mb-6'>Tools I Use</h1>
                <div className='flex justify-center items-center space-x-6'>
                    <img src="../../video/react.png" alt="React Logo" className="w-48 h-48 rounded-lg p-2 transform transition duration-300 hover:scale-105 hover:rotate-2 bg-custom-blue" />
                    <img src="../../video/node.png" alt="Node.js Logo" className="w-48 h-48 rounded-lg p-2 transform transition duration-300 hover:scale-105 hover:rotate-2 bg-custom-blue" />
                    <img src="../../video/express.png" alt="Express Logo" className="w-48 h-48 rounded-lg p-2 transform transition duration-300 hover:scale-105 hover:rotate-2 bg-custom-blue" />
                    <img src="../../video/mongodb.png" alt="MongoDB Logo" className="w-48 h-48 rounded-lg p-2 transform transition duration-300 hover:scale-105 hover:rotate-2 bg-custom-blue" />
                </div>
            </div>
        </>
    )
};

export default About;
