// react
import React from "react";
// chakra ui
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
// icons
import { BiSearch } from "react-icons/bi";

const HomeTitle = () => {
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
      <Box w="72" alignSelf="flex-end">
        <InputGroup>
          <InputRightElement
            children={
              <BiSearch
                color="#fff"
                size={25}
                cursor="pointer"
                onClick={() => console.log("you clicked on me ")}
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
          />
        </InputGroup>
      </Box>
    </Flex>
  );
};

export default HomeTitle;
