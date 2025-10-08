import React from 'react';
import banner from "../assets/banner.jpg"
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='w-48/50 mx-auto bg-[rgba(149,56,226,1)] p-12 text-center z-1 pt-4 border-x-[7px] border-b-[7px] border-[rgba(246,246,246,1)] rounded-b-4xl'>
      <h2 className='text-white text-4xl font-semibold'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
      <p className='mt-5 text-sm text-[rgba(255,255,255,0.7)]'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
      <button className='mt-12 bg-white px-10 py-3 rounded-4xl text-[rgba(149,56,226,1)] font-semibold text-xl'>
        <Link to='/dashboard'>Shop Now</Link>
      </button>
      <div className='w-37/50 mx-auto h-52 p-6 relative top-12 z-3 rounded-t-4xl bg-[rgba(255,255,255,0.3)] border-2 border-white'>
        <img className='h-[450px] w-full  rounded-4xl' src={banner}alt="No image" />
      </div>
    </div>
  );
};

export default Banner;