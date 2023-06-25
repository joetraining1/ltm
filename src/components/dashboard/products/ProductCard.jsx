import { Typography } from "@mui/material";
import React from "react";
import { H5style } from "../../../utils/constants";
import Bottle from "../../../assets/milk2.png";

const ProductCard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "350px",
        width: "220px",
      }}
    >
      <img
        src={`${Bottle}`}
        style={{ objectFit: "cover", width: "30%", placeSelf: "center" }}
      />
      <Typography variant="h6" sx={H5style}>
        Strawberry Variant
      </Typography>
    </div>
  );
};

export default ProductCard;
