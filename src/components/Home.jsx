import React from 'react';
import Contract from './Contract';
import HeroSection from './HeroSection';
import Introduction from './Introduction';

const Home = () => {
    return (
        <>
            {/* <Navbar></Navbar> */}
            <HeroSection></HeroSection>
            <Introduction></Introduction>
            <Contract></Contract>
            {/* <Footer></Footer> */}
        </>
    );
};

export default Home;