import { IoMdHeartEmpty } from "react-icons/io";
import { useLoaderData, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import MyContext from "../providers/MyContext";

const ProductDetails = () => {
  const { product_id } = useParams();
  const id = parseInt(product_id);
  const AllProducts = useLoaderData();

  const product = AllProducts.find((product) => product.product_id === id);

  const {
    product_title,
    product_image,
    Specification,
    description,
    price,
    rating,
    availability,
  } = product;

  const {addToCart, addToWishlist} = useContext(MyContext);



  return (
    <div className="relative w-full bg-white  text-center z-1">
      <div className="bg-[rgba(149,56,226,1)] text-center h-[350px]">
        <h1 className="text-3xl text-white pb-3 pt-8 font-bold">
          Product Details
        </h1>
        <p className="text-white pb-3 font-light text-sm">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!{" "}
        </p>
      </div>
      <div className="absolute bg-[#f8f8f8] left-44 -bottom-[450px] z-3 w-3/4 mx-auto rounded-4xl h-max flex gap-20 mb-10">
        <div className="m-3 rounded-4xl p-10 bg-[rgba(236,236,236,1)]">
          <img className="w-[200px] h-[200px]" src={product_image} alt="" />
        </div>
        <div className="text-left py-10">
          <h1 className="font-bold text-2xl mb-1">{product_title}</h1>
          <h3 className="font-light mb-3">Price:{price}</h3>
          <h2 className="mb-4">
            {availability ? (
              <button className="bg-[rgba(48,156,8,0.1)] rounded-full px-4 py-1 text-[rgba(48,156,8,1)] border-2 border-[rgba(48,156,8,1)]">
                In stock
              </button>
            ) : (
              ""
            )}
          </h2>
          <p className="mb-4">{description}</p>
          <div className="mb-4">
            <h2 className="font-semibold">Specification: </h2>
            {Specification.map((specific, idx) => (
              <li className="list-decimal list-inside" key={idx}>
                {specific}{" "}
              </li>
            ))}
          </div>
          <h2 className="mb-5">Rating:{rating} </h2>
          
          <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
            <Rating 
            initialValue={rating}
            readonly
            allowFraction
            size={25}
            fillColor="#facc15" 
            style={{display:'inline-flex'}}
          />
          </div>

          <div className="flex gap-2">
            <button className="bg-purple-700 py-1 px-4 rounded-4xl flex items-center justify-center gap-2"> <p className="text-white" onClick={()=>addToCart(product)} >Add To Card  </p><AiOutlineShoppingCart className="text-xl text-white" /> </button>
            <button onClick={()=> addToWishlist(product)} className="border-1 border-gray-200 p-1 rounded-full"> <IoMdHeartEmpty className="text-2xl"/>  </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

/*
 * "product_id": 1,
    "product_title": "Wireless Bluetooth Headphones",
    "product_image": "https://example.com/images/headphones.jpg",
    "category": "Electronics",
    "price": 59.99,
    "description": "High-quality wireless headphones with noise cancellation and long battery life.",
    "Specification": ["Bluetooth 5.0", "Noise Cancelling", "20hr Battery"],
    "availability": true,
    "rating": 4.5
 * 
 * 
 * 
 * **/
