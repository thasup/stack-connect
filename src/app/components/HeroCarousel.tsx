import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

interface HeroCarouselProps {
  images: string[];
}

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  width: "100%",
  height: "100%",
  ".swiper-pagination-bullet": {
    backgroundColor: theme.palette.primary.main,
  },
  ".swiper-pagination-bullet-active": {
    backgroundColor: theme.palette.primary.main,
  }
}));

export default function HeroCarousel(props: HeroCarouselProps) {
  const { images } = props;
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 16px"
      }}
    >
      <StyledSwiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              id="image"
              sx={(theme) => ({
                alignSelf: "center",
                width: "100%",
                height: 400,
                marginTop: theme.spacing(8),
                borderRadius: theme.shape.borderRadius,
                outline: "6px solid",
                outlineColor: "hsla(220, 25%, 80%, 0.2)",
                border: "1px solid",
                borderColor: theme.palette.grey[200],
                boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                [theme.breakpoints.up("sm")]: {
                  marginTop: theme.spacing(10),
                  height: 700
                },
                ...theme.applyStyles("dark", {
                  boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
                  outlineColor: "hsla(220, 20%, 42%, 0.1)",
                  borderColor: theme.palette.grey[700]
                })
              })}
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Box>
  );
}
