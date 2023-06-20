import { Button, Card, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Bottle from "../../../assets/milk2.png";
import {
  H5style,
  LabelStyle,
  MetaStyle,
  MetaStyle2,
} from "../../../utils/constants";
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

const PaymentItem = () => {
  const [countQty, setQty] = useState(0);

  const qtyFilter = (theQty) => {
    return setQty();
  };
  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        height: "200px",
        padding: "1vw 2vw",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: "1.5vw",
      }}
      elevation={3}
    >
      <img
        src={`${Bottle}`}
        style={{
          objectFit: "cover",
          width: "10%",
        }}
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <Typography variant="h6" sx={H5style}>
          Susu Pasteurisasi
        </Typography>
        <Divider />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Typography variant="h5" sx={H5style}>
            Variant Strawberry
          </Typography>
          <Typography variant="h6" sx={H5style}>
            Rp. 7,000
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "end",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <div style={MetaStyle2}>
            <Typography variant="body" sx={H5style}>
              quantity
            </Typography>
            <Typography variant="body" sx={H5style}>
              5 botol
            </Typography>
          </div>
          <div style={MetaStyle2}>
            <Typography variant="body" sx={H5style}>
              amount
            </Typography>
            <Typography variant="body" sx={H5style}>
              Rp. 35,000
            </Typography>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PaymentItem;
