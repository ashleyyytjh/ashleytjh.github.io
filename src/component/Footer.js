import React from 'react';
import Icon from './Icon';
const Footer = () => {
  return (
    <div className='h-64 mt-8 flex justify-center bg-[#f5f5f5]'>
      <div className='h-full w-full max-w-7xl rounded-t-md flex flex-col items-center justify-center'>
        <p className='text-xs md:text-xl'>Thank you!</p>
        <h1 className='text-xl md:text-2xl'>Follow me here!</h1>
        <div className='mt-4 w-3/5 border-gray-300 border-t-2' />
        <div className="links space-x-5 mt-5">
            <Icon link="https://github.com/ashleyyytjh" iconName= "github"></Icon>
            <Icon link="https://www.linkedin.com/in/ashleyyytoh/" iconName="linkedin"></Icon>
        </div>
        <p className=' font-medium mt-3 text-base text-[#8C8C8C]'>Ashley Toh</p>
      </div>
    </div>
  );
};

export default Footer;