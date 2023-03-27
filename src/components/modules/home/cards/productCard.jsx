// react
import React from "react";
// chakra ui
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const ProductCard = () => {
  return (
    <Card
      bg="#1E1E1E"
      maxW={{ base: "18em" }}
      h="fit-content"
      color="#fff"
      boxShadow="lg"
    >
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Living room Sofa</Heading>
        </Stack>
      </CardBody>
      <CardFooter display="flex" justifyContent="flex-end">
        <Text color="#C2C2C2" fontSize="2xl">
          $450
        </Text>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
