import React from 'react';
import Navbar from '../NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Banner from "../../Pages/Home/Banner/Banner"; 


const MainLayout = () => {
    return (
        <div>
            <div className='career-bg'>
                <Navbar></Navbar>
            </div>
            <div>
            <Banner></Banner>
            </div>
            <div className='max-w-[1320px] mx-auto'>
                <Outlet></Outlet>
            </div>
            <div className='mt-[130px]'>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;