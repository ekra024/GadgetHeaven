import React, { useContext } from "react";
import MyContext from "../providers/MyContext";
import { RxCross2 } from "react-icons/rx";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(MyContext);
  console.log(wishlist);

  return (
    <div className="w-9/12 mx-auto text-center">
      <div className="flex my-5">
        <h2 className="font-semibold">Wishlist</h2>       
      </div>
      <div className="mx-auto grid grid-cols-1 gap-2 pb-5">
        {wishlist.map((item, idx) => (
          <div
            key={idx}
            className="md:flex bg-white rounded-4xl p-2 h-max items-center justify-between"
          >
            <div className="w-2/5">
              <img
                className="w-42 ml-15 rounded-4xl"
                src={item.product_image}
                alt=""
              />
            </div>
            <div className="text-left w-2/5">
              <h2 className="font-bold mb-5">{item.product_title}</h2>
              <p>Description: {item.description} </p>
              <h3 className="font-semibold mt-5">Price: {item.price} </h3>
            </div>

            <div onClick={() => removeFromWishlist (item)} className="w-1/5">
              <RxCross2 className="text-3xl text-red-500 ml-10 border-2 rounded-full border-red-500 " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
