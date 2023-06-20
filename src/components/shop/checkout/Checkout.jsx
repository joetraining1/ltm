import { Button, Card, Divider, Typography } from "@mui/material";
import React from "react";
import { H5style, MetaStyle } from "../../../utils/constants";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";

const Checkout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "fit-content",
        gap: "1vw",
      }}
    >
      <Typography variant="h4" sx={H5style}>
        Checkout Pesanan
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "1vw",
          width: "100%",
          height: "fit-content",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "fit-content",
          }}
        ></div>
        <Card
          sx={{
            width: "50%",
            height: "400px",
            padding: "2vw",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          elevation={3}
        >
          <div style={MetaStyle}>
            <Typography variant="h6" sx={H5style}>
              Total
            </Typography>
            <Typography variant="h5" sx={H5style}>
              Rp. 35,000
            </Typography>
          </div>
          <Divider />
          <Button
            variant="contained"
            sx={{
              width: "100%",
              fontFamily: "Signika Negative, sans-serif",
              fontWeight: "600",
              display: "flex",
              gap: "10px",
              marginTop: "auto",
            }}
          >
            <ShoppingCartCheckoutRoundedIcon />
            Checkout
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;
