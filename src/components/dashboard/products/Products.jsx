import { Button, Card, Divider, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { Category, H5style, LabelStyle } from "../../../utils/constants";
import ProductContainer from "./ProductContainer";
import Slider from "react-slick";
import ApiClient from "../../../services/ApiClient";
import NoData from "../../global/NoData";
import { useEffect } from "react";

const Products = () => {
  const [slickRef, setSliderRef] = useState();
  const [dataset, setDataset] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const getType = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get("ctg").then((res) => {
      return res.data;
    });
    setDataset(reqType.result);
    setIsLoading(false);
    return;
  };

  useEffect(() => {
    if(dataset.length === 0){
      getType()
      return
    }
    return
  }, [dataset])

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
        height: "auto",
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
            gap: "1vw",
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
      {dataset.length === 0 ? (
        <NoData prop={"produk apapun."}/>
      ) : (
        <Slider
          {...settings}
          ref={setSliderRef}
          style={{
            display: "flex",
            width: "100%",
            height: "70svh",
            marginLeft: "auto",
          }}
        >
          {dataset?.map((item, index) => {
            return (
              <ProductContainer
                key={item.id}
                ctgId={item.id}
                title={item.title}
              />
            );
          })}
        </Slider>
      )}
    </div>
  );
};

export default Products;
