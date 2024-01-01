import React from "react";
import "./Home.css";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Categories from "../../Components/Categories/Categories";
import Sliderr from "../../Components/Sliderr/Sliderr";
const Home = () => {
  return (
    <>
      <Sliderr />
      <FeaturedProducts type="Featured"/>
      <Categories />
      <FeaturedProducts type="Trending"/>
    </>
  );
};

export default Home;
