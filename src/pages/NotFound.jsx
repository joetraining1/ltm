import { Typography } from "@mui/material";
import React from "react";
import BGmilk from "../assets/cows4.png";

const NotFound = () => {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60svh",
          flexDirection: "column",
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
          Error 404: Not Found
        </Typography>
        <div
          style={{
            height: "7px",
            width: "150px",
            background: "#F3DE2C",
          }}
        />
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

export default NotFound;
