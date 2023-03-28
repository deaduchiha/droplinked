import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Description = ({ data }) => {
  return (
    <Box mb={10}>
      <Heading mb={10} as="h2">
        {data.title}
      </Heading>
      <Box
        w={{ base: "full", md: "96" }}
        dangerouslySetInnerHTML={{ __html: data.body_html }}
        fontSize="xs"
      ></Box>
    </Box>
  );
};

export default Description;
