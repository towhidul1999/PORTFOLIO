import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-custom-black text-white p-10 relative">
            <div className="absolute inset-x-0 top-0 -translate-y-1/2 h-6 bg-gradient-to-t from-custom-black to-transparent"></div>
            <div className="container mx-auto flex justify-between items-center border-t border-custom-blue pt-6">
                <div className="flex flex-col space-y-2">
                    <h1 className="text-lg font-semibold">Developed by Towhidul Islam</h1>
                    <h1 className="text-sm font-light">© 2024 Towhidul Islam. All rights reserved.</h1>
                </div>
                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com" className="text-white hover:text-gray-400 transition duration-300">
                        {/* <i className="fab fa-linkedin-in text-2xl"></i> */}
                        LinkedIn
                    </a>
                    <a href="https://www.facebook.com" className="text-white hover:text-gray-400 transition duration-300">
                        {/* <i className="fab fa-facebook-f text-2xl"></i> */}
                        Facebook
                    </a>
                    <a href="https://www.twitter.com" className="text-white hover:text-gray-400 transition duration-300">
                        {/* <i className="fab fa-twitter text-2xl"></i> */}
                        Twitter
                    </a>
                </div>
            </div>
        </footer>


    );
};

export default Footer;