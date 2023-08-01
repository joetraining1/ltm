import React, { useRef } from "react";
import DashImage from "../../assets/dashb.jpg";
import { Button, Card, Typography } from "@mui/material";
import SideScroll from './mediascroll/SideScroll';
import HomeItem from "./HomeItem";
import UserCard from "./users/UserCard";

const DashHome = () => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "fit-content",
        width: "100%",
        gap: "1vw",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "50svh",
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%), url(${DashImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "4px",
          boxShadow: "2px 4px 10px 1px rgba(0,0,0,0.4)",
          padding: "2vw",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "600",
            color: "#fff",
            marginTop: "auto",
          }}
        >
          Dashboard: Home
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "600",
            color: "#fff",
          }}
        >
          Kelola pesanan, user, keranjang, maupun data administrative.
        </Typography>
      </div>
     
    </div>
  );
};

export default DashHome;
