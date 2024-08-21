import React from 'react';

const Contract = () => {
    return (
        <div className='text-white bg-custom-black grid grid-cols-1'>
            <div>
                <h1 className='text-white font-extrabold text-4xl mt-36'>FIND ME ON</h1>
                <br />
                <h4>Feel free to connect with me</h4>
            </div>
            <div className='text-white space-x-10 space-y-8'>

                <button>Git</button>
                <button>LinkedIn</button>
                <button>Facebook</button>
            </div>
        </div>
    );
};

export default Contract;