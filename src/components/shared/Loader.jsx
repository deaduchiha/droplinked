import { Flex } from "@chakra-ui/react";
import React from "react";
import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <Flex justifyContent="center" alignItems="center" mt="40">
      <Triangle
        height="150"
        width="150"
        color="#fff"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Flex>
  );
};

export default Loader;
