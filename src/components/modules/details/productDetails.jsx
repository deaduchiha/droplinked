// react
import React, { useEffect } from "react";
// chakra ui
import { Flex } from "@chakra-ui/react";
//react router dom
import { useParams } from "react-router-dom";
// axios
import axios from "axios";

const ProductDetail = () => {
  const id = useParams().id;

  useEffect(() => {
    axios
      .get(`https://apiv2.droplinked.com/product/public/${id}`)
      .then((response) => {
        const data = response.data.data.shopifyData;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return <Flex h="38em" mt={5} bg="secondaryColor"></Flex>;
};
export default ProductDetail;
