// react
import React from "react";
// react router dom
import { Route, Routes } from "react-router-dom";
// components
import Landing from "./pages/landing/landing";
import Products from "./pages/products/products";

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};

export default Home;
