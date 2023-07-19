import React from "react";
import DashBar from "../components/dashboard/DashBar";
import { Outlet } from "react-router-dom";
import { Typography } from "@mui/material";
import BGmilk from "../assets/cows4.png";

const Dashboard = () => {
  return (
    <React.Fragment>
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
          gap: "1vw",
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
          Dashboard
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
            gap: "1vw",
            justifyContent: "space-evenly",
          }}
        >
          <DashBar />
          <div style={{ width: "80%", height: "100%", minHeight: "54svh" }}>
            <Outlet />
          </div>
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

export default Dashboard;
