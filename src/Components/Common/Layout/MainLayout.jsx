import React from 'react';
import Navbar from '../NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';


const MainLayout = () => {
    return (
        <div>
            <div className='career-bg relative'>
                <Navbar></Navbar>
            </div>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <div className='mt-[130px]'>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;