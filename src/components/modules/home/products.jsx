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
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);

  useEffect(() => {
    if (!productsState.products.length) dispatch(fetchProducts());
  }, [dispatch, productsState.products.length]);

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
          {productsState.products.map((product) => (
            <ProductCard key={product._id} productData={product} />
          ))}
        </Flex>
      )}
    </>
  );
};

export default HomePageProducts;
