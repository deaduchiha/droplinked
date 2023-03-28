// react
import React, { useEffect, useState } from "react";
// chakra ui
import { Box, Container } from "@chakra-ui/react";
//react router dom
import { useParams } from "react-router-dom";
// redux
import axios from "axios";

const ProductDetail = () => {
  const [data, setData] = useState({});
  const id = useParams().id;

  useEffect(() => {
    if (!data.length) {
      axios
        .get(`https://apiv2.droplinked.com/product/public/${id}`)
        .then((response) => {
          const data = response.data.data.shopifyData;
          console.log(data);
          setData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [data.length, id]);

  return (
    <Box h="38em" mt={5} bg="secondaryColor" borderRadius={10} py={10}>
      <Container maxW="container.md"></Container>
    </Box>
  );
};
export default ProductDetail;
