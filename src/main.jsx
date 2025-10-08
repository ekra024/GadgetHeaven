import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import MainLayout from './layout/MainLayout.jsx';
import Home from './pages/Home.jsx';
import AllProducts from './components/AllProducts.jsx';
import Category from './components/Category.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Statistic from './pages/Statistic.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Cart from './pages/Cart.jsx';
import Wishlist from './pages/Wishlist.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Page404 from './pages/Page404.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Page404 />,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:() => fetch('/gadget.json'),
        errorElement:<Page404 />,
        children: [
          {
            path:"/",
            element:<AllProducts />,
            loader: () => fetch('/gadget.json')
          },
          {
            path:"/:category",
            element:<Category />,
            loader: () => fetch('/gadget.json')
          }
        ]
      },
      {
        path:"/dashboard",
        element:<Dashboard />,
        errorElement:<Page404 />,
        children:[
          {
            path:"/dashboard/cart",
            element:<Cart/>
          },
          {
            path:"/dashboard/wishlist",
            element:<Wishlist/>
          }
        ]
      },
      {
        path:"/statistic",
        element:<Statistic />,
      },
      {
        path:"/details/:product_id",
        element:<ProductDetails />,
        loader: () => fetch('/gadget.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    
  </StrictMode>,
)
