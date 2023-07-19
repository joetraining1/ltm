import { Card, Typography } from "@mui/material";
import React from "react";
import { H4style, H5style, LabelStyle2 } from "../../../utils/constants";
import PaymentMeta from "./PaymentMeta";
import PaymentForm from "./PaymentForm";
import PaymentData from "./PaymentData";

const Completion = () => {
  return (
    <React.Fragment>
      <Typography variant="h4" sx={H4style}>
        Menyelesaikan Pesanan
      </Typography>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "fit-content",
          minHeight: "75svh",
          margin: "1vw 0",
          padding: "1vw",
          gap: "1vw",
        }}
      >
        <Typography variant="h5" sx={LabelStyle2}>
          Detail Pesanan
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "1vw",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <PaymentData />
          </div>
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1vw",
              justifyContent: "space-evenly",
            }}
          >
            <PaymentMeta />
            <PaymentForm />
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default Completion;
