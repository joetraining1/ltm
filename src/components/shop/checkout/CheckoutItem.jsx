import {
  Button,
  Card,
  Divider,
  Grow,
  InputAdornment,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Bottle from "../../../assets/milk2.png";
import { H5style } from "../../../utils/constants";
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import useNotif from "../../../hooks/useNotif";
import MilkIcon from "../../../assets/milksvg.svg";

const CheckoutItem = ({ ind }) => {
  const [qty, setQty] = useState("0");

  const { toastError } = useNotif();

  const inputHandler = (count) => {
    const IntQty = parseInt(count);
    if (IntQty >= 50000) {
      return toastError("Jumlah melebihi kapasitas stok.");
    } else {
      return setQty(count);
    }
  };

  const plusOne = () => {
    const IntQty = parseInt(qty);
    if (IntQty >= 50000) {
      return toastError("Jumlah melebihi kapasitas stok.");
    }
    const addQty1 = IntQty + 1;
    setQty(addQty1.toString());
    return;
  };

  const minusOne = () => {
    const IntQty = parseInt(qty);
    if (IntQty <= 0) {
      return null;
    }
    const rmvQty1 = IntQty - 1;
    setQty(rmvQty1.toString());
    return;
  };

  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={ind * 150}>
      <Card
        sx={{
          display: "flex",
          width: "100%",
          height: "200px",
          background: "#fff",
          padding: "1vw 2vw",
          gap: "2vw",
          position: "relative",
        }}
        elevation={3}
      >
        <img
          src={`${Bottle}`}
          style={{ objectFit: "cover", width: "11.2%", height: "100%" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            gap: "10px",
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
              height: "100%",
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
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                width: "300px",
                justifyContent: "flex-end",
              }}
            >
              <Typography variant="body" sx={H5style}>
                Quantity:{" "}
              </Typography>
              <Button
                variant="text"
                sx={{ color: "#FF0000" }}
                onClick={() => minusOne()}
              >
                <RemoveRoundedIcon />
              </Button>
              <InputBase
                type="number"
                sx={{
                  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                    {
                      display: "none",
                    },
                  "& input[type=number]": {
                    MozAppearance: "textfield",
                  },
                  fontFamily: "Signika Negative, sans-serif",
                  fontWeight: "600",
                  width: "50px",
                }}
                inputProps={{
                  sx: {
                    "text-align": "center",
                  },
                }}
                value={qty}
                onChange={(e) => inputHandler(e.target.value)}
              />
              <Button
                variant="text"
                sx={{ color: "#00FF00" }}
                onClick={() => plusOne()}
              >
                <PlusOneRoundedIcon />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Grow>
  );
};

export default CheckoutItem;
