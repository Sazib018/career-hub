import React from 'react';
import FeatureJob from './FeatureJob/FeatureJob';
import JobCategory from './JobCategory/JobCategory';
import Banner from "../../Pages/Home/Banner/Banner"; 

const Home = () => {
    return (
        <div>
            <div>
            <Banner></Banner>
            </div>
            <JobCategory></JobCategory>
           <div className='mt-[130px]'>
           <FeatureJob></FeatureJob>
           </div>
        </div>
    );
};

export default Home;