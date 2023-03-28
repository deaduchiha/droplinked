// react
import React from "react";
// react router dom
import { Route, Routes } from "react-router-dom";
// components
import Landing from "./pages/landing/landing";
import ProductsDetails from "./pages/productsDetails/productsDetails";

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/:id" element={<ProductsDetails />} />
    </Routes>
  );
};

export default Home;
