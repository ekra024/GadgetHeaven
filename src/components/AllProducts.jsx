import { useLoaderData } from 'react-router-dom';
import Gadget from './Gadget';

const AllProducts = () => {
  const allProducts = useLoaderData();
  return (
    <div className='w-3/4 mr-32 grid grid-cols-3 gap-6'>
      {
        allProducts.map(gadget => <Gadget key={gadget.product_id} gadget={gadget} ></Gadget> )
      }
    </div>
  );
};

export default AllProducts;