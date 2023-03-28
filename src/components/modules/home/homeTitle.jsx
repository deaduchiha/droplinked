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

const HomeTitle = () => {
  const productsState = useSelector((state) => state.productsState);

  const dispatch = useDispatch();

  const { products } = productsState;
  const [search, setSearch] = useState("");

  const find = products.map((p) => p.shopifyData);
  const newProducts = find.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleFind = () => {};

  console.log(newProducts);

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
            children={
              <BiSearch
                color="#fff"
                size={25}
                cursor="pointer"
                onClick={handleFind}
              />
            }
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
