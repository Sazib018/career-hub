import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobsInfo = useLoaderData();
    const params = useParams();

    const jobInfo = jobsInfo?.find(job => job.id === parseInt(params.id));

    const { salary, job_description, job_responsibility, educational_requirements, experiences, phone, email, address, job_title
    } = jobInfo;

    return (
        <div className="p-4 flex flex-col items-center">
            <div className="flex">
                <div>
                    <p className="mt-2"><strong>Description:</strong> <span className='info-text'>{job_description}</span></p>

                    <h2 className="mt-4 text-xl font-semibold">Responsibilities</h2>
                    <p className='info-text'>{job_responsibility}</p>

                    <h2 className="mt-4 text-xl font-semibold">Educational Requirements</h2>
                    <p className='info-text'>{educational_requirements}</p>

                    <h2 className="mt-4 text-xl font-semibold">Experience</h2>
                    <p className='info-text'>{experiences}</p>
                </div>
                <div className='w-[824px] detailes-card p-[30px] ml-4'>
                    <div>
                        <h2 className="mt-4 text-xl font-semibold">Job Details</h2>

                        <p><strong>Salary:</strong> {salary}</p>
                        <p><strong>Job Title:</strong> {job_title}</p>
                    </div>

                    <div>
                        <h2 className="mt-4 text-xl font-semibold">Contact Information</h2>
                        <p><strong>Phone:</strong> {phone}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Address:</strong> {address}</p>
                    </div>
                </div>
            </div>
            <button className="career-btn mt-4 ml-[725px]">Apply Naw</button>
        </div>
    );
};

export default JobDetails;
