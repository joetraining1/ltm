import React, { useState } from "react";
import BGmilk from "../assets/cows4.png";
import { Card, Typography } from "@mui/material";
import Ivy from "../assets/ivy3.png";
import Slider from "react-slick";
import { LabelStyle, LabelStyle2, PaymentItem } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Virtual, Pagination } from "swiper/modules";
import Bottle from "../assets/milk2.png";

const Product = () => {
  const [slides, setSlides] = useState(Array.from({ length: 5 }));

  return (
    <React.Fragment>
      <div
        style={{
          height: "fit-content",
          minHeight: "54svh",
          display: "flex",
          background: "#fff",
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "6svh",
          flexDirection: "column",
          padding: "0 0 1vw 0",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "40vh",
            backgroundImage: `url(${Ivy})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom 4% right 50%",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Signika Negative, sans-serif",
              fontWeight: "700",
              color: "#FFFC31",
              textShadow: "1px 1px 1px #000000",
              marginTop: "5%",
            }}
          >
            Marino's Products
          </Typography>
        </div>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "700",
            color: "#008BF8",
          }}
        >
          Susu Pasteurisasi
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
            infinite={true}
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
                      justifyContent: "center",
                      gap: "5vw",
                    }}
                    elevation={3}
                  >
                    <img
                      src={Bottle}
                      style={{
                        width: "12%",
                      }}
                    />
                    <div
                      style={{
                        height: "100%",
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
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
                        Strawberry Variant
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
                        Produk olahan susu sapi Marino's Milk & Yoghurt dengan
                        rasa buah Strawberry alami
                      </Typography>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "700",
            color: "#008BF8",
          }}
        >
          Yoghurt
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
            infinite={true}
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
                      justifyContent: "center",
                      gap: "5vw",
                    }}
                    elevation={3}
                  >
                    <img
                      src={Bottle}
                      style={{
                        width: "12%",
                      }}
                    />
                    <div
                      style={{
                        height: "100%",
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
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
                        Strawberry Variant
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
                        Produk olahan susu sapi Marino's Milk & Yoghurt dengan
                        rasa buah Strawberry alami
                      </Typography>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "25vh",
          backgroundImage: `url(${BGmilk})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom 28% right 0",
        }}
      />
    </React.Fragment>
  );
};

export default Product;
