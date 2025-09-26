import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import swal from "sweetalert";



const AuthProvider = ({ children }) => {
 

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product) => {
    console.log(product)
    if (!wishlist.find((item) => item.product_id === product.product_id)) {
      setCart([...cart, product]);
      console.log(cart)
      swal({
        title: "Product Added To Cart!",
        icon: "success",
      });
    }
  };

  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.product_id === product.product_id)) {
      setWishlist([...wishlist, product]);
      swal({
        title: "Product Added To Wishlist!",
        icon: "success",
      });
     
    }
  };

  const removeFromCart = (id) => {
   
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
         setCart(cart.filter((item) => item.product_id !== id));
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const removeFromWishlist = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
            setWishlist(wishlist.filter((item) => item.product_id !== id));

        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const authInfo = {
    cart,
    wishlist,
    addToWishlist,
    addToCart,
    removeFromCart,
    removeFromWishlist,
  };

  return <MyContext.Provider value={authInfo}>{children}</MyContext.Provider>;
};

export default AuthProvider;
