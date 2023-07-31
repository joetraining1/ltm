import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Virtual, Pagination } from "swiper/modules";
import { Typography } from "@mui/material";
import Bottle from "../../assets/milk2.png";
import { useState } from "react";

const ProductSwiper = ({ titleCtg, dataset, ctgId }) => {
  const [slides, setSlides] = useState(dataset ? dataset : []);

  return (
    <React.Fragment>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Signika Negative, sans-serif",
          fontWeight: "700",
          color: "#008BF8",
        }}
      >
        {titleCtg}
      </Typography>
      <div
        style={{
          height: "7px",
          width: "150px",
          background: "#F3DE2C",
        }}
      />
      <div
        style={{
          width: "1280px",
          height: "60vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={50}
          modules={[Navigation, Virtual, Pagination]}
          navigation
          virtual
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {slides.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{
                  height: "100%",
                  width: "100%",
                }}
                virtualIndex={index}
              >
                <div
                  style={{
                    width: "80%",
                    height: "80%",
                    margin: "3vw auto",
                    padding: "1vw 3vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    gap: "5vw",
                  }}
                  elevation={3}
                >
                  <div
                    style={{
                      display: "grid",
                      placeItems: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      src={item.url}
                      style={{
                        width: "70%",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "1vw",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "Signika Negative, sans-serif",
                        fontWeight: "700",
                        color: "#262626",
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "Signika Negative, sans-serif",
                        fontWeight: "700",
                        color: "#636363",
                        textAlign: "center",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default ProductSwiper;
