import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const links = (
    <>
      <li>
        {" "}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active " : "noactive text-black"
          }
        >
          Home
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink
          to="/statistic"
          className={({ isActive }) =>
            isActive
              ? "active text-[rgba(149,56,226,1)]"
              : `${isHome ? "" : "noactive"}`
          }
        >
          Statistic
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "active text-[rgba(149,56,226,1)]"
              : `${isHome ? "" : "noactive"}`
          }
        >
          Dashboard
        </NavLink>{" "}
      </li>
    </>
  );
  return (
    <div className={`border-x-[7px] border-t-[7px] border-[rgba(246,246,246,1)] rounded-t-4xl ${isHome?"":"bg-white"}`} >
      <div
        className={`w-48/50 mx-auto ${isHome?"bg-[rgba(149,56,226,1)] text-white":"bg-white"} navbar rounded-t-4xl `}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content   rounded-box z-1 mt-3 w-52 p-2 shadow bg-white text-black"
            >
              {links}
            </ul>
          </div>
          <a className="ml-20 font-semibold text-2xl ">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-5 menu-horizontal px-1 text-white">{links}</ul>
        </div>
        <div className="navbar-end flex gap-4 pr-4">
          <button className="rounded-full w-10 h-10 flex items-center bg-white p-2 text-black">
            {" "}
            <AiOutlineShoppingCart className="text-xl" />{" "}
          </button>
          <button className="rounded-full flex items-center bg-white p-2 text-black">
            {" "}
            <FaRegHeart className="text-xl flex justify-center items-center" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
