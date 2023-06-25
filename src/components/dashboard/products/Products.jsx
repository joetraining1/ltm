import { Card, Divider, Typography } from "@mui/material";
import React from "react";
import { H5style } from "../../../utils/constants";
import ProductCard from "./ProductCard";
import ProductContainer from "./ProductContainer";

const Products = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "50svh",
        background: "#fff",
        width: "100%",
        gap: '1vw'
      }}
    >
      <Typography variant="h4" sx={{ ...H5style, marginBottom: "1%" }}>
        Kelola Product Marino's
      </Typography>
      <ProductContainer title={"Susu Pasteurisasi"} />
      <ProductContainer title={"Yoghurt"} />
    </div>
  );
};

export default Products;
