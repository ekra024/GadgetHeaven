import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div>
      <div className='bg-[rgba(247,247,247,1)]'>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;