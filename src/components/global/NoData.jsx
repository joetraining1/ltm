import React from "react";
import { Typography } from "@mui/material";
import { LabelStyle } from "../../utils/constants";

const NoData = ({ prop }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "35svh",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        flexDirection: "column",
        gap: '3vw'
      }}
    >
      <Typography
        variant="h6"
        sx={{
          ...LabelStyle,
          color: "#464F51",
          textAlign: 'center'
        }}
      >
        Oops! <br />kamu belum menambahkan {prop ? prop : " data apapun."}
      </Typography>
      <div className="loader">
        <div className="snow">
          <span
            style={{
              "--i": "11",
            }}
          ></span>
          <span
            style={{
              "--i": "12",
            }}
          ></span>
          <span
            style={{
              "--i": "15",
            }}
          ></span>
          <span
            style={{
              "--i": "17",
            }}
          ></span>
          <span
            style={{
              "--i": "18",
            }}
          ></span>
          <span
            style={{
              "--i": "13",
            }}
          ></span>
          <span
            style={{
              "--i": "14",
            }}
          ></span>
          <span
            style={{
              "--i": "19",
            }}
          ></span>
          <span
            style={{
              "--i": "20",
            }}
          ></span>
          <span
            style={{
              "--i": "10",
            }}
          ></span>
          <span
            style={{
              "--i": "18",
            }}
          ></span>
          <span
            style={{
              "--i": "13",
            }}
          ></span>
          <span
            style={{
              "--i": "14",
            }}
          ></span>
          <span
            style={{
              "--i": "19",
            }}
          ></span>
          <span
            style={{
              "--i": "20",
            }}
          ></span>
          <span
            style={{
              "--i": "10",
            }}
          ></span>
          <span
            style={{
              "--i": "18",
            }}
          ></span>
          <span
            style={{
              "--i": "13",
            }}
          ></span>
          <span
            style={{
              "--i": "14",
            }}
          ></span>
          <span
            style={{
              "--i": "19",
            }}
          ></span>
          <span
            style={{
              "--i": "20",
            }}
          ></span>
          <span
            style={{
              "--i": "10",
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default NoData;
