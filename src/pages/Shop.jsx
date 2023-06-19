import { Card, Typography } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import ShopBar from "../components/shop/ShopBar";

const Shop = () => {
  const [mode, setMode] = useState(false);
  return (
    <div
      style={{
        height: "fit-content",
        minHeight: "54svh",
        marginTop: "6svh",
        display: "flex",
        background: "#fff",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        padding: "1vw 0",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Signika Negative, sans-serif",
          fontWeight: "700",
          color: "#008BF8",
        }}
      >
        Marino's Offers
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
          display: "flex",
          width: "1280px",
          height: "fit-content",
        }}
      >
      <ShopBar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Shop;
