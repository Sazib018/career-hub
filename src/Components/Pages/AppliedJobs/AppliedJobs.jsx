import React from 'react';
import { getStorageItem } from '../../Utility/LocalStorage';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const allJobData = useLoaderData();
    const ItemsId = getStorageItem();


    const appliedJobs = allJobData.filter(job => ItemsId.includes(job.id));

    return (
        <div>
            <h1 className='text-4xl font-bold'>Applied Jobs: {appliedJobs.length}</h1>
        </div>
    );
};

export default AppliedJobs;
