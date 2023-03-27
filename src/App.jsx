// react
import React from "react";
// react router dom
import { Route, Routes } from "react-router-dom";
// components
import Landing from "./pages/landing/landing";
import ProductsDetails from "./pages/productsDetails/productsDetails";
// redux
import { Provider } from "react-redux";
import store from "./redux/store";

const Home = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:id" element={<ProductsDetails />} />
      </Routes>
    </Provider>
  );
};

export default Home;
