import {
  Button,
  Card,
  Divider,
  Grow,
  InputBase,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Bottle from "../../../assets/milk2.png";
import { H5style, LabelStyle, LabelStyle2, MetaStyle2, MetaStyle3 } from "../../../utils/constants";
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import useNotif from "../../../hooks/useNotif";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

const CartItem = ({ ind, price }) => {
  const [qty, setQty] = useState("0");
  const [amount, setAmount] = useState("0");
  const idCurrency = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(parseInt(amount));

  const tempPrice = '7'

  useEffect(() => {
    const intPrice = parseInt(tempPrice);
    if (qty === undefined || qty === null || qty === "") {
      return setAmount("0");
    }
    const intQty = parseInt(qty);
    const rightAmount = intQty * intPrice;
    setAmount(rightAmount.toString());
  }, [qty]);

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
    let intQty;
    if (qty === "") {
      intQty = 0;
      if (intQty >= 50000) {
        return toastError("Jumlah melebihi kapasitas stok.");
      }
      const addQty1 = intQty + 1;
      setQty(addQty1.toString());
      return;
    }
    intQty = parseInt(qty);
    if (intQty >= 50000) {
      return toastError("Jumlah melebihi kapasitas stok.");
    }
    const addQty1 = intQty + 1;
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
          height: "170px",
          background: "#fff",
          padding: "10px 1vw 10px 0",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={Bottle} style={{ objectFit: "cover", width: "40%" }} />
        </div>
        <Divider orientation="vertical" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            paddingLeft: "10px",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={H5style}>
              Strawberry Variant
            </Typography>
            <Button
              variant="text"
              sx={{
                marginLeft: "auto",
                minWidth: "10px",
                color: "#ff0000",
                padding: "5px",
              }}
            >
              <DeleteOutlineRoundedIcon />
            </Button>
          </div>
          <Typography variant="body" sx={LabelStyle}>Rp. {tempPrice.concat(',000')}</Typography>
          <Typography
            variant="h6"
            style={{
              ...H5style,
              width: "100%",
              textAlign: "right",
              marginTop: "auto",
              paddingRight: "10px",
            }}
          >
           {idCurrency.concat(',000')}
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "flex-end",
              gap: "2px",
            }}
          >
            <Typography variant="body" sx={{ ...H5style, fontSize: "1em" }}>
              Quantity :{" "}
            </Typography>
            <Button
              variant="text"
              sx={{ color: "#FF0000", minWidth: "10px" }}
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
              sx={{ color: "#00FF00", minWidth: "10px" }}
              onClick={() => plusOne()}
            >
              <PlusOneRoundedIcon />
            </Button>
          </div>
        </div>
      </Card>
    </Grow>
  );
};

export default CartItem;
