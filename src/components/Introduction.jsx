import React from 'react';

const Introduction = () => {
    return (
        <div className='grid grid-cols-2 bg-custom-black text-white'>

            <div className='bg-custom-black p-4 rounded-lg shadow-md' >
                <img src="../../video/animated-code.gif" alt="GIF" className='mx-auto' />
            </div>

            <div className='p-10'>
                <h1 className='mt-40 text-white font-extrabold text-4xl'>
                    LET ME INTRODUCE MYSELF
                </h1>
                <br />
                <br />
                <h3 className=''>
                    I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                    <br />
                    <br />
                    I am fluent in classics like C, C++ and Javascript.
                    <br />
                    <br />
                    My current focus is on Deep Learning and Natural Language Processing.
                    <br />
                    <br />
                    Whenever possible, I also apply my passion for developing products with Modern Javascript Frameworks like Node.js and React.js.
                </h3>

            </div>

        </div>
    );
};

export default Introduction;