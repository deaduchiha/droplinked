// react
import React, { useEffect } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../redux/products/productsAction";
// chakra ui
import { Flex } from "@chakra-ui/react";
// components
import ProductCard from "./cards/productCard";
import Loader from "../../shared/Loader";

const HomePageProducts = () => {
  const productsState = useSelector((state) => state.productsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let products = [];

  if (productsState.products.length > 0) {
    products = productsState.products.filter((product) => {
      return product.shopifyData.title
        .toLowerCase()
        .includes(productsState.search);
    });
  }
  return (
    <>
      {productsState.loading ? (
        <Loader />
      ) : productsState.error ? (
        <Flex justifyContent="center" alignItems="center" mt="40">
          something went wrong.
        </Flex>
      ) : (
        <Flex
          justifyContent={{ base: "center", md: "space-between" }}
          flexWrap="wrap"
          gap={5}
          my={10}
        >
          {products.map((product) => (
            <ProductCard key={product._id} productData={product} />
          ))}
        </Flex>
      )}
    </>
  );
};

export default HomePageProducts;
