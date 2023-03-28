// react
import React from "react";
// chakra ui
import { Flex } from "@chakra-ui/react";
//react router dom
import { useParams } from "react-router-dom";
// redux
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const id = useParams().id;

  console.log(id);

  return <Flex h="38em" mt={5} bg="secondaryColor"></Flex>;
};
export default ProductDetail;
