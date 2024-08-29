import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <>
            <Navbar></Navbar>


            <Outlet />


            <Footer></Footer>

        </>
    );
};

export default Main;