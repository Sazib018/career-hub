import React from 'react';

const CategoryCard = ({ category }) => {
    const { logo, availability, category_name } = category;

    return (
        <div className='career-bg p-6 md:p-10 rounded-lg shadow-lg'>
            <div className='bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] p-4 rounded-lg w-fit mb-6'>
                <img src={logo} alt={category_name} className="w-16 h-16 md:w-20 md:h-20" />
            </div>
            <h3 className='text-lg md:text-xl font-extrabold mb-2'>{category_name}</h3>
            <p className='text-sm md:text-base'>{availability}</p>
        </div>
    );
};

export default CategoryCard;
