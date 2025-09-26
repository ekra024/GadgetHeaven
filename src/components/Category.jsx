//import React, {useState } from 'react';
import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "./Gadget";

const Category = () => {
  const { category } = useParams();
  console.log(category);
  const Allproducts = useLoaderData();
  console.log(Allproducts);

  const products = Allproducts.filter(product => product.category === category)

  console.log(products);

  return (
  <div className='w-3/4 mr-32 grid grid-cols-3 gap-6'>
      {
        products.map(gadget => <Gadget key={gadget.product_id} gadget={gadget} ></Gadget> )
      }
    </div>
  );
};

export default Category;
