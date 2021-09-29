import React from "react";
import Navbar from "Components/Navbar/Navbar";
import Announcement from "Components/Announcement/Announcement";
import Slider from "Components/Slider/Slider";
import Category from "Components/Category/Category";
import Products from "Components/Products/Products";
import NewsLetter from 'Components/NewsLetter/NewsLetter';
import Footer from 'Components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Category />
      <Products />
      <NewsLetter/>
      <Footer/>
    </>
  );
};

export default Home;
