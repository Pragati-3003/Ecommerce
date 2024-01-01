import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Product from './Pages/Product/Product'
import './app.css'
const Layout =()=>{
  return(
    <div className='app'>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </div>
  );
}

const router = createBrowserRouter([
  {
      path:"/",
      element : <Layout/>,
      children : [
        {
          path:"/",
          element: <Home/>,
        },
        {
          path:"/products/:id",
          element:<Products/>
        },
        {
          path: "/product/:id",
          element: <Product/>,
        },
       
      ]
  }
])

const App = () => {
  return (
    <div><RouterProvider router={router} /></div>
  )
}

export default App