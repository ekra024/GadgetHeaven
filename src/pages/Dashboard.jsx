import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div className="bg-[rgba(149,56,226,1)] text-center h-max pb-10">
        <h1 className="text-3xl text-white pb-3 pt-8 font-bold">
          Product Details
        </h1>
        <p className="text-white pb-3 font-light text-sm">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className='flex gap-4 justify-center items-center'>
          <NavLink className={({isActive}) => isActive?"text-[rgba(149,56,226,1)]  bg-white py-2 px-12 rounded-4xl font-bold":"border-1 border-white px-12 rounded-4xl text-white py-2"} to="/dashboard/cart">Cart</NavLink>
          <NavLink to="/dashboard/wishlist" className={({isActive}) => isActive?"text-[rgba(149,56,226,1)]  bg-white py-2 px-12 rounded-4xl font-bold":"border-1 border-white px-12 rounded-4xl text-white py-2"} >Wishlist</NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;