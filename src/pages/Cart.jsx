import React, { useContext } from "react";
import MyContext from "../providers/MyContext";
import { RxCross2 } from "react-icons/rx";
import { FaSortAmountDownAlt } from "react-icons/fa";

const Cart = () => {
  const { cart, removeFromCart, totalPrice, setCart, setTotalPrice} = useContext(MyContext);
  console.log(cart);

  const handleSortByPrice = () => {
    const sortedCart =[...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  }

  const handlePurchase = () => {
    setCart([]);
    setTotalPrice(0);
  }

  return (
    <div className="w-9/12 mx-auto text-center">
      <div className="flex justify-between items-center my-5">
        <h2 className="font-semibold">Cart</h2>
        <div className="flex items-center gap-5 font-semibold">
          <p className="">Total Price: {totalPrice} </p>
          <div className="flex border-2             border-[rgba(149,56,226,1)] gap-2 rounded-2xl px-4 py-2">
            <button onClick={handleSortByPrice} className="text-[rgba(149,56,226,1)]">Sort by Price</button>
            <FaSortAmountDownAlt className="text-[rgba(149,56,226,1)]" />
          </div>
          <button onClick={handlePurchase} className="bg-[rgba(149,56,226,1)] rounded-2xl py-2 px-4 text-white">Purchase</button>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-2 pb-5">
        {cart.map((item,idx) => (
        <div key={idx} className="md:flex bg-white rounded-4xl p-2 h-max items-center justify-between">
          <div className="w-2/5">
            <img className="w-42 ml-15 rounded-4xl" src={item.product_image} alt="" />
          </div>
          <div className="text-left w-2/5">
            <h2 className="font-bold mb-5">{item.product_title}</h2>
            <p>Description: {item.description} </p>
            <h3 className="font-semibold mt-5">Price: {item.price} </h3>
          </div>

          <div onClick={()=>removeFromCart(item)} className="w-1/5">
            <RxCross2 className="text-3xl text-red-500 ml-10 border-2 rounded-full border-red-500 "/>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Cart;
