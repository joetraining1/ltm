import { Card, Divider, Typography } from "@mui/material";
import React from "react";
import { H5style } from "../../../utils/constants";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "50svh",
        background: "#fff",
        width: "100%",
      }}
    >
      <Typography variant="h4" sx={{ ...H5style, marginBottom: "1%" }}>
        Kelola Product Marino's
      </Typography>
      <Card
        sx={{
          width: "100%",
          minHeight: "35svh",
          height: 'fit-content',
          padding: "1vw",
          gap: "10px",
          display: "flex",
          flexDirection: "column",
        }}
        elevation={3}
      >
        <Typography variant="h5" sx={H5style}>
          Susu Pasteurisasi
        </Typography>
        <Divider />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            width: '100%',
            height: 'fit-content',
            gap: '20px',
            placeItems: 'center'
          }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Card>
    </div>
  );
};

export default Products;
