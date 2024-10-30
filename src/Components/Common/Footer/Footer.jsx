import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1A1919] py-10">
            <div className="max-w-[1320px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="w-full lg:w-[300px] mb-8 lg:mb-0">
                        <h2 className="text-3xl font-extrabold text-white">CareerHub</h2>
                        <p className="mb-5 mt-5 text-[#FFFFFFB2] leading-7">
                            There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.
                        </p>
                        <div>
                            <img src="https://i.ibb.co.com/d5t0c62/social.png" alt="Social Media Icons" />
                        </div>
                    </div>
                    <div className="text-[#FFFFFFB2] mb-8 lg:mb-0">
                        <h2 className="text-xl font-semibold mb-3 text-white">Company</h2>
                        <ul className="leading-10">
                            <li>About Us</li>
                            <li>Work</li>
                            <li>Latest News</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="text-[#FFFFFFB2] mb-8 lg:mb-0">
                        <h2 className="text-xl font-semibold mb-3 text-white">Product</h2>
                        <ul className="leading-10">
                            <li>Prototype</li>
                            <li>Plans & Pricing</li>
                            <li>Customers</li>
                            <li>Integrations</li>
                        </ul>
                    </div>
                    <div className="text-[#FFFFFFB2] mb-8 lg:mb-0">
                        <h2 className="text-xl font-semibold mb-3 text-white">Support</h2>
                        <ul className="leading-10">
                            <li>Help Desk</li>
                            <li>Sales</li>
                            <li>Become a Partner</li>
                            <li>Developers</li>
                        </ul>
                    </div>   
                    <div className="text-[#FFFFFFB2]">
                        <h2 className="text-xl font-semibold mb-3 text-white">Contact</h2>
                        <ul className="leading-10">
                            <li>526 S. Broadway, NYC</li>
                            <li>+1777 - 978 - 5570</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-[#7E90FE33] mt-10 mb-8 text-center" />
                <div className='text-[#FFFFFFB2] flex flex-col lg:flex-row justify-between items-center'>
                    <p className="text-sm">&copy; 2023 CareerHub. All Rights Reserved.</p>
                    <p className="text-sm">Powered by CareerHub</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
