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
//react router dom
import { Link } from "react-router-dom";

const ProductCard = ({ productData }) => {
  const { shopifyData } = productData;
  const { title, images } = shopifyData;

  return (
    <Card
      bg="#1E1E1E"
      maxW={{ base: "18em" }}
      h="fit-content"
      color="#fff"
      boxShadow="lg"
      _hover={{
        bg: "#060606",
        cursor: "pointer",
      }}
      as={Link}
      to={`/${productData._id}`}
    >
      <CardBody>
        <Image
          src={images[0].src}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
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
