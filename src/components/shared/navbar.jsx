// react
import React from "react";
// chakra ui
import { Flex, Heading } from "@chakra-ui/react";
//icons
import { RiShoppingCart2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" h="14" p={10}>
      <Heading as="h2" color="primaryColor">
        droplink
      </Heading>
      <RiShoppingCart2Line color="#fff" size={35} />
    </Flex>
  );
};

export default Navbar;
