//import React, {useState } from 'react';
import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "./Gadget";

const Category = () => {
  const { category } = useParams();
  console.log(category);
  const Allproducts = useLoaderData();
  console.log(Allproducts);

  const products = Allproducts.filter(product => product.category === category)


  return (
  <div className='w-3/4 mr-32 grid grid-cols-3 gap-6'>
      {
        products.length>0 ? products.map(gadget => <Gadget key={gadget.product_id} gadget={gadget} ></Gadget> ): <div className="flex items-center justify-center text-center text-4xl text-purple-600">No Product Found</div>
      }
    </div>
  );
};

export default Category;
