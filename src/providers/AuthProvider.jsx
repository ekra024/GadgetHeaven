import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import swal from "sweetalert";



const AuthProvider = ({ children }) => {
 

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [totalPrice, setTotalPrice] = useState(() => {
    const saved = localStorage.getItem("totalPrice");
    return saved ? JSON.parse(saved):(0);
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

  useEffect(() => {
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  },[totalPrice]);

  const addToCart = (product) => {
    
    if (!cart.find((item) => item.product_id === product.product_id)) {
      setCart([...cart, product]);
      const curPrice = totalPrice + product.price;
      setTotalPrice(curPrice); 
      swal({
        title: "Product Added To Cart!",
        icon: "success",
      });
    }
    else {
      swal({
        title: "Already Added",
        icon: "warning"
      })
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
    else {
      swal({
        title: "Alredy Added",
        icon: "warning"
      })
    }
  };

  const removeFromCart = (product) => {
    console.log(product);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        
         const remain = cart.filter((item) => item.product_id !== product.product_id);
         setCart(remain);

         const curPrice = totalPrice - product.price;
         setTotalPrice(curPrice);
          
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
    setCart,
    wishlist,
    addToWishlist,
    addToCart,
    removeFromCart,
    removeFromWishlist,
    totalPrice,
    setTotalPrice,
  };

  return <MyContext.Provider value={authInfo}>{children}</MyContext.Provider>;
};

export default AuthProvider;
