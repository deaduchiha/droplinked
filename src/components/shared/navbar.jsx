// react
import React, { useState } from "react";
// chakra ui
import { Flex, Heading } from "@chakra-ui/react";
//icons
import { RiShoppingCart2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        h="14"
        p={10}
        borderBottom="1px"
        borderColor="secondaryColor"
        position="relative"
      >
        <Heading as="h2" color="primaryColor">
          droplink
        </Heading>
        <RiShoppingCart2Line color="#fff" size={35}></RiShoppingCart2Line>
        <Flex
          borderRadius="lg"
          borderBottomRightRadius={0}
          bg="primaryColor"
          pos="absolute"
          top={6}
          right={9}
          w="15px"
          h="15px"
          justifyContent="center"
          alignItems="center"
          fontSize="11"
          userSelect="none"
        >
          2
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
