import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const DetailsImage = ({ data }) => {
  const { images } = data;
  return (
    <Box overflow="hidden">
      <Flex gap={20}>
        {images.map((img) => (
          <Image w="72" src={img.src} alt="image" />
        ))}
      </Flex>
      <Box></Box>
    </Box>
  );
};

export default DetailsImage;
