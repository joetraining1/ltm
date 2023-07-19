import { Button, Card, Divider, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { Category, H5style, LabelStyle } from "../../../utils/constants";
import ProductContainer from "./ProductContainer";
import Slider from "react-slick";

const NextButton = (props) => {
  const { className, onClick } = props;
  const slickRef = useRef();

  return (
    <Button sx={{ ...LabelStyle, width: "50px" }} onClick={() => onClick()}>
      Next
    </Button>
  );
};

const PrevButton = (props) => {
  const { className, onClick } = props;
  return (
    <Button sx={{ ...LabelStyle, width: "50px" }} onClick={() => onClick()}>
      Prev
    </Button>
  );
};

const Products = () => {
  const [slickRef, setSliderRef] = useState();
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "40svh",
        height: 'auto',
        background: "#fff",
        width: "100%",
        gap: "1vw",
      }}
    >
      <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
        <Typography variant="h4" sx={{ ...H5style }}>
          Kelola Product Marino's
        </Typography>
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
            gap: '1vw'
          }}
        >
          <Button
          variant="contained"
            sx={{ ...LabelStyle, width: "50px" }}
            onClick={slickRef?.slickPrev}
          >
            Prev
          </Button>
          <Button
          variant="contained"
            sx={{ ...LabelStyle, width: "50px" }}
            onClick={slickRef?.slickNext}
          >
            Next
          </Button>
        </div>
      </div>
      <Slider
        {...settings}
        ref={setSliderRef}
        style={{
          display: "flex",
          width: "100%",
          height: "65svh",
          marginLeft: "auto",
        }}
      >
        {Category.map((item, index) => {
          return <ProductContainer key={item.id} title={item.title} />;
        })}
      </Slider>
    </div>
  );
};

export default Products;
