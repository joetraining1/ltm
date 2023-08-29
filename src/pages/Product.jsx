import React, { useState } from "react";
import BGmilk from "../assets/cows4.png";
import { Button, Card, Typography } from "@mui/material";
import Ivy from "../assets/ivy3.png";
import { LabelStyle, LabelStyle2, PaymentItem } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Virtual, Pagination } from "swiper/modules";
import Bottle from "../assets/milk2.png";
import ProductSwiper from "../components/product/ProductSwiper";
import { useEffect } from "react";
import ApiClient from "../services/ApiClient";
import useNotif from "../hooks/useNotif";

const Product = () => {
  const [slides, setSlides] = useState(Array.from({ length: 5 }));
  const [datas, setDatas] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const { toastSuccess } = useNotif()

  const testApi = async() => {
    const drive = await ApiClient.get("/").then((res) => res.data.message)
    toastSuccess(drive)
    return 
  }

  const getType = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get("display").then((res) => {
      return res.data;
    });
    setDatas(reqType.result);
    setIsLoading(false);
    return;
  };

  useEffect(() => {
    if (datas.length === 0) {
      getType();
      return;
    }
    return;
  }, [datas]);

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
        {
          // <Button variant="contained" onClick={() => testApi()}>Click me to connect to api</Button>
        }
        {datas.length === 0
          ? null
          : datas.map((item, index) => {
              return (
                <ProductSwiper
                  titleCtg={item.dataValues.title}
                  key={item.dataValues.id}
                  ctgId={item.dataValues.id}
                  dataset={item.dataset}
                />
              );
            })}
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
