import React from 'react';

const Banner = () => {
    return (
        <div className="career-bg ">
            <div className="flex flex-col lg:flex-row max-w-[1320px] items-center justify-between mx-auto mb-[130px] px-4">
                <div className="w-full lg:w-[670px] text-left">
                    <h1 className="text-[40px] text-[80px] font-extrabold text-[#1A1919]">
                        One Step Closer To Your <span className="text-color">Dream Job</span>
                    </h1>
                    <p className="text-base lg:text-lg font-medium text-[#757575]">
                        Explore thousands of job opportunities with all the information you need to secure your future. Come find it. Manage all your job applications from start to finish.
                    </p>
                    <button className="career-btn mt-8 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300">
                        Get Started
                    </button>
                </div>
                <div className="mt-8 lg:ml-8">
                    <img src={`/images/user.png`} alt="User" className="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
