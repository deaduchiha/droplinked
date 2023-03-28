import { Box, Flex, Image, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

const DetailsImage = ({ data }) => {
  const { images } = data;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: () => (
      <Flex
        w="full"
        gap={5}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Text>Next</Text>
        {images.map((img) => (
          <Image
            src={img.src}
            alt={data.title}
            key={img.id}
            w={"4"}
            borderRadius={5}
          />
        ))}
        <Text>back</Text>
      </Flex>
    ),
    customPaging: (i) => (
      <Box width="30px" color="blue" border="1px blue solid" textAlign="center">
        {i + 1}
      </Box>
    ),
  };

  return (
    <Box overflow="hidden">
      <h2>Append Dots</h2>
      <Slider {...settings}>
        {images.map((img) => (
          <Flex>
            <Image src={img.src} alt="image" />
          </Flex>
        ))}
        <Box></Box>
      </Slider>
    </Box>
  );
};

export default DetailsImage;
