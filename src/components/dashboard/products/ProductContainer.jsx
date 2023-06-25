import { Button, Card, Divider, Typography } from "@mui/material";
import React from "react";
import { H5style, MetaStyle } from "../../../utils/constants";
import ProductCard from "./ProductCard";
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";

const ProductContainer = ({ title, data }) => {
    // const onCategoy = data.category;
  return (
    <Card
      sx={{
        width: "100%",
        minHeight: "35svh",
        height: "fit-content",
        padding: "1vw",
        gap: "10px",
        display: "flex",
        flexDirection: "column",
      }}
      elevation={3}
    >
      <div style={MetaStyle}>
        <Typography variant="h5" sx={H5style}>
          Category produk : {title}
        </Typography>
        <Button variant="contained">
            <PlusOneRoundedIcon />
        </Button>
      </div>
      <Divider />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          width: "100%",
          height: "fit-content",
          gap: "20px",
          placeItems: "center",
          padding: "1vw 0",
        }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Card>
  );
};

export default ProductContainer;
