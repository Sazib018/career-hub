import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobsInfo = useLoaderData();
    const params = useParams();

    const jobInfo = jobsInfo?.find(job => job.id === parseInt(params.id));
    console.log(jobInfo);
    
    // Ensure jobInfo exists before attempting to access its properties
    if (!jobInfo) {
        return <div>Job not found.</div>;
    }

    const {
        job_description,
        job_responsibility,
        educational_requirements,
        experiences
    } = jobInfo;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{jobInfo.title}</h1>
            <p className="mt-2"><strong>Description:</strong> {job_description}</p>
            <h2 className="mt-4 text-xl font-semibold">Responsibilities</h2>
            <p>{job_responsibility}</p>
            <h2 className="mt-4 text-xl font-semibold">Educational Requirements</h2>
            <p>{educational_requirements}</p>
            <h2 className="mt-4 text-xl font-semibold">Experience</h2>
            <p>{experiences}</p>
        </div>
    );
};

export default JobDetails;
