// react
import React, { useEffect, useState } from "react";
// chakra ui
import { Flex } from "@chakra-ui/react";
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
    <Flex h="38em" mt={5} bg="secondaryColor">
      {data.title}
    </Flex>
  );
};
export default ProductDetail;
