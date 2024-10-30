import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';

const FeatureJob = () => {
    const [jobs, setJobs] = useState([]);
    const [handleBtn, setHandleBtn] = useState(false);

    useEffect(() => {
        fetch('/data/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div className='max-w-[1320px] mx-auto px-4'>
            <div className='text-center'>
                <h1 className='text-4xl md:text-5xl font-extrabold'>Featured Jobs</h1>
                <p className='font-medium mt-4 mb-8 text-[#757575]'>
                    Explore thousands of job opportunities with all the information you need. It's your future.
                </p>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${handleBtn ? 'mt-8' : ''}`}>
                {
                    (!handleBtn ? jobs?.slice(0, 4) : jobs)?.map(job => (
                        <FeatureCard key={job.id} jobInfo={job} />
                    ))
                }
            </div>
            <div className='text-center mt-8'>
                <button
                    onClick={() => setHandleBtn(!handleBtn)}
                    className='career-btn px-4 py-2 md:px-6 md:py-3'
                >
                    {!handleBtn ? "See All" : "See Less"}
                </button>
            </div>
        </div>
    );
};

export default FeatureJob;
