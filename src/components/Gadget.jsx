import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({gadget}) => {
  
  const {product_title, product_image, price,product_id } = gadget
  return (
    <div className='bg-white pb-2'>
      <div className='text-center h-max'>
        <img className='h-52 w-48 mx-auto flex items-center p-2 justify-center' src={product_image} alt="" />
      </div>
      <h1 className='font-semibold text-left ml-12'>{product_title}</h1>
      <p className='text-left ml-12'>Price:{price} </p>
      <button  className='rounded-full border-purple-500 border-2 py-2 px-4 mr-10 my-3 text-purple-700 font-semibold'><Link to={`/details/${product_id}`} >View Details</Link></button>
    </div>
  );
};

export default Gadget;

