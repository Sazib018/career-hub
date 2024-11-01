import React from 'react';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { IoCalendarOutline, IoCallOutline } from 'react-icons/io5';
import { PiCurrencyCircleDollarBold } from 'react-icons/pi';
import { useLoaderData, useParams } from 'react-router-dom';
import { setStorageItem } from '../../Utility/LocalStorage';


const JobDetails = () => {
    const jobsInfo = useLoaderData();
    const params = useParams();

    const jobInfo = jobsInfo?.find(job => job.id === parseInt(params.id));

    const handleApplyBtn = (id, title) => {
        setStorageItem(id, title)
    }

    const { 
        salary,job_description,  job_responsibility, educational_requirements,experiences,phone,   email,  address,  job_title  } = jobInfo || {};

    return (
        <div className='relative'>
            <div className='career-bg'>
                <div className='absolute -top-2 right-0 lg:block hidden' >
                    <img src="/images/bg2.png" alt="" />
                </div>
                <h1 className='text-[32px] text-[#1A1919] font-extrabold text-center'>Job Details</h1>
                <div className='lg:block hidden '>
                    <img src="/images/bg1.png" alt="" />
                </div>

                <div className="max-w-[1320px] xl:mx-auto md:mx-3 mx-2 justify-between flex flex-col md:flex-row md:mt-[130px] mt-10 gap-6">
                    <div className="flex-1 text-gray-800">

                        <p className="mb-4 font-medium text-[#757575]"><span className="text-[#1A1919] font-extrabold">Job Description:</span> {job_description}</p>

                        <p className="mb-4 font-medium text-[#757575]"><span className="text-[#1A1919] font-extrabold">Job Responsibility:</span> {job_responsibility}</p>

                        <h2 className="text-[#1A1919] font-extrabold mb-4">Educational Requirements:</h2>
                        <p className="mb-4">{educational_requirements}</p>

                        <h2 className="text-[#1A1919] font-extrabold mb-4">Experience:</h2>
                        <p className="mb-4">{experiences}</p>

                    </div>

                    <div className="max-w-[424px] mb-[130px]">
                        <div className="card-color p-[30px] ">
                            <h3 className="text-xl font-extrabold text-[#1A1919]">Job Details</h3>
                            <div className="border-b my-6"></div>
                            <div className="flex items-center gap-2 mb-3">
                                <PiCurrencyCircleDollarBold className="text-[#7E90FE] text-2xl" />
                                <p className="text-xl font-medium text-[#757575]"> <span className="text-[#474747] font-extrabold">Salary:</span> {salary} (Per Month)</p>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <IoCalendarOutline className="text-[#7E90FE] text-2xl" />
                                <p className="text-xl font-medium text-[#757575]"> <span className="text-[#474747] font-extrabold">Job Title:</span> {job_title}</p>
                            </div>

                            <h3 className="text-xl font-extrabold text-[#1A1919] mt-8">Contact Information</h3>
                            <div className="border-b my-6"></div>
                            <div className="flex items-center gap-2 mb-3">
                                <IoCallOutline className="text-[#7E90FE] text-2xl " />
                                <p className="text-xl font-medium text-[#757575]"><span className="text-[#474747] font-extrabold">Phone:</span> {phone}</p>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <CiMail className="text-[#7E90FE] text-2xl" />
                                <p className="text-xl font-medium text-[#757575]"><span className="text-[#474747] font-extrabold">Email:</span> {email}</p>
                            </div>
                            <div className="flex items-center gap-2 ">
                                <CiLocationOn className="text-[#7E90FE] text-5xl text-center" />
                                <p className="text-xl font-medium text-[#757575] "><span className="text-[#474747] font-extrabold">Address:</span> {address}</p>
                            </div>

                        </div>
                        <div className="navbar-end">
                    <button onClick={() => handleApplyBtn(jobInfo.id, jobInfo.job_title)} className="career-btn lg:!text-xl md:!text-base !text-xs md:!px-7 md:!py-[19px] !px-4 !py-3">Apply Now</button>
                </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;
