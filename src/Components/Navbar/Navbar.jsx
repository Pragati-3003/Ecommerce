import React, { useState } from "react";
import "./Navbar.css";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Cart from '../Cart/Cart'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open,setOpen]=useState(false);
  const products = useSelector((state) => state.cart.products);
  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-logo">
        E-Commerce
       </Link>
      <div className="navbar-categories">
        <Link to="/products/2" className="category-item">
          Mens
        </Link>
        <Link to="/products/1" className="category-item">
          Womens
        </Link>
        <Link to="/products/3" className="category-item">
          Kids
        </Link>
        <Link to="/products/4" className="category-item">
          Beauty
        </Link>
        <Link to="/products/5" className="category-item">
          Home & Living
        </Link>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search products" />
        <SearchOutlinedIcon />
      </div>
      <div className="navbar-icons">
        <Link to="/" className="icon-item">
          <FavoriteBorderOutlinedIcon />
        </Link>
       
        <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingBasketOutlinedIcon/>
              <span>{products.length}</span>
            </div>
     
        {open && <Cart/>}
      </div>
    </nav>
  );
};

export default Navbar;
