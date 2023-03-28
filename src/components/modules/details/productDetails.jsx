// react
import React, { useEffect, useState } from "react";
// chakra ui
import { Box, Container, Flex } from "@chakra-ui/react";
//react router dom
import { useParams } from "react-router-dom";
// redux
import axios from "axios";
// loader
import Loader from "../../shared/Loader";
// components
import DetailsImage from "./detailsImage";
import Description from "./description";
import BuyProduct from "./buyProduct";

const ProductDetail = () => {
  const id = useParams().id;

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!data.length) {
      axios
        .get(`https://apiv2.droplinked.com/product/public/${id}`)
        .then((response) => {
          const data = response.data.data.shopifyData;

          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [data.length, id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box minH="38em" mt={5} bg="secondaryColor" borderRadius={10} py={10}>
          <Container maxW="container.md">
            <Flex
              justifyContent="space-between"
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box w={{ base: "full", md: "96" }}>
                <DetailsImage data={data} />
              </Box>
              <Description data={data} />
            </Flex>
            <BuyProduct data={data} />
          </Container>
        </Box>
      )}
    </>
  );
};
export default ProductDetail;
