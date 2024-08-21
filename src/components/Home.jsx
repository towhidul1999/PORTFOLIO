import React from 'react';
import Contract from './Contract';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Introduction from './Introduction';
import Navbar from './Navbar';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <Introduction></Introduction>
            <Contract></Contract>
            <Footer></Footer>
        </>
    );
};

export default Home;