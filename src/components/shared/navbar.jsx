// react
import React from "react";
// chakra ui
import { Flex, Heading } from "@chakra-ui/react";
//react router dom
import { Link } from "react-router-dom";
//icons
import { RiShoppingCart2Line } from "react-icons/ri";
//redux
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.cartsState);

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
        <Heading as={Link} to="/" color="primaryColor">
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
          {state.itemsCounter}
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
