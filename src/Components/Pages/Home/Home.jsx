import React from 'react';
import FeatureJob from './FeatureJob/FeatureJob';
import JobCategory from './JobCategory/JobCategory';

const Home = () => {
    return (
        <div>
            <JobCategory></JobCategory>
           <div className='mt-[130px]'>
           <FeatureJob></FeatureJob>
           </div>
        </div>
    );
};

export default Home;