// react
import React, { useState, useEffect } from "react";
// components
import HomeTitle from "../modules/home/homeTitle";
import ProductCard from "../modules/home/cards/productCard";

const HomePage = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://apiv2.droplinked.com/collection/public/testunstoppable"
        );
        const data = await response.json();
        console.log(data.data[0].products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <HomeTitle />
      <ProductCard />
    </>
  );
};

export default HomePage;
