// react
import React from "react";
// react router dom
import { Route, Routes } from "react-router-dom";
// components
import Landing from "./pages/landing/landing";
import Products from "./pages/products/products";
// redux
import { Provider } from "react-redux";
import store from "./redux/store";

const Home = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Provider>
  );
};

export default Home;
