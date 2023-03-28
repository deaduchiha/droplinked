// react
import React, { useState } from "react";
// chakra ui
import { Box, Image } from "@chakra-ui/react";
// swiper
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const DetailsImage = ({ data }) => {
  const { images } = data;
  const [showImage, setShowImage] = useState([images[0].src]);

  return (
    <Box mb={10}>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <Image
            borderRadius={10}
            w={{ base: "full", md: "349px" }}
            src={showImage}
            alt="image"
            mb={10}
            userSelect="none"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        effect={"flip"}
        spaceBetween={15}
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        slidesPerView={3}
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <Image
              borderRadius={15}
              userSelect="none"
              w={{ base: "full", md: "20" }}
              src={img.src}
              alt="image"
              cursor="pointer"
              onClick={() => setShowImage(img.src)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default DetailsImage;
