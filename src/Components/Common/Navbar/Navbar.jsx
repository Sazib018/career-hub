import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navOption = (
        <>
            <li className='career-text'>
                <NavLink to={'/'} className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
            </li>
            <li className='career-text'>
                <NavLink to={'/statics'} className={({ isActive }) => (isActive ? "active" : "")}>Statics</NavLink>
            </li>
            <li className='career-text'>
                <NavLink to={'/appliedJobs'} className={({ isActive }) => (isActive ? "active" : "")}>Applied Jobs</NavLink>
            </li>
            <li className='career-text'>
                <NavLink to={'/blog'} className={({ isActive }) => (isActive ? "active" : "")}>Blog</NavLink>
            </li>
        </>
    );

    return (
        <div className='max-w-[1320px] mx-auto'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-medium text-[#757575]">
                            {navOption}
                        </ul>
                    </div>
                    <Link to={'/'} className="text-[32px] font-extrabold">CareerHub</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-6 font-medium text-[#757575]">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="career-btn lg:!text-xl md:!text-base !text-xs md:!px-7 md:!py-[19px] !px-4 !py-3">Start Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
