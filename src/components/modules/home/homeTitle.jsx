// react
import React, { useEffect, useState } from "react";
// chakra ui
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
// icons
import { BiSearch } from "react-icons/bi";
//redux
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../../redux/products/productsAction";

const HomeTitle = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.productsState);

  const handleSearch = (event) => {
    dispatch(searchProducts(event.target.value));
  };

  return (
    <Flex w="full" flexDirection="column">
      <Heading
        as="h2"
        size="lg"
        textAlign="center"
        color="primaryColor"
        mt="12"
        mb={8}
      >
        Hungry Artist Holders Store
      </Heading>
      <Box w={{ base: "full", md: "72" }} alignSelf="flex-end">
        <InputGroup>
          <InputRightElement
            children={<BiSearch color="#fff" size={25} cursor="pointer" />}
          />
          <Input
            focusBorderColor="primaryColor"
            type="text"
            bg="secondaryColor"
            borderRadius="30"
            borderColor="transparent"
            placeholder="search"
            onChange={handleSearch}
            value={search}
          />
        </InputGroup>
      </Box>
    </Flex>
  );
};

export default HomeTitle;
