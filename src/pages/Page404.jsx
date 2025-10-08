import React from 'react';
import NotFound from "/page404.jpeg"
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className='h-screen text-center'>
      <div className='flex justify-center my-10'>
        <img className='' src={NotFound} alt="" />
      </div>
      <div>
        <Link className='border px-4 py-2 rounded-4xl border-blue-400 font-semibold  hover:bg-blue-200 text-white bg-blue-700 hover:text-black' to="/">Go Back Home</Link>
      </div>
    </div>
  );
};

export default Page404;