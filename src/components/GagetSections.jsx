import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import Gadget from "./Gadget";
import { GiKitchenKnives } from "react-icons/gi";

const GagetSections = () => {
  const gadgets = useLoaderData();

  const categories = [...new Set(gadgets.map((gadget) => gadget.category))];
  const newCategories = ["All Product", ...categories];
 

  return (
    <div className="mt-[370px] text-center">
      <h1 className="text-4xl font-bold pb-10">Explore Cutting-Edge Gadgets</h1>
      <div className="flex pb-20">
        <section className="w-1/5 ml-28 mr-6 grid h-max gap-2 bg-white px-4 py-6 shadow-sm rounded-2xl">
          {newCategories.map((category, idx) =>
            category == "All Product" ? (
              <NavLink
                key={idx}
                to={`/`}
                className={({ isActive }) => (isActive ? "btn2" : "btn")}
              >
                All Product
              </NavLink>
            ) : (
              <NavLink
                key={idx}
                to={`/${category}`}
                className={({ isActive }) => (isActive ? "btn2" : "btn")}
              >
                {category}
              </NavLink>
            )
          )}
        </section>
        <Outlet />
      </div>
    </div>
  );
};

export default GagetSections;

{
  /* <Link to="/" className='btn2'> All Product</Link>
          <Link to={`/${category}`} className='btn'>Laptops</Link>
          <Link to="category" className='btn'>Phones</Link>
          <Link to="category" className='btn'>Smart Watches</Link>
          <Link to="category" className='btn'>Iphone</Link>
          <Link to="category" className='btn'>Mac Book</Link> */
}
