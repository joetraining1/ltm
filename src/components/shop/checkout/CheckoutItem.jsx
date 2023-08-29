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
import { H5style, LabelStyle2 } from "../../../utils/constants";
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import useNotif from "../../../hooks/useNotif";
import MilkIcon from "../../../assets/milksvg.svg";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ApiClient from "../../../services/ApiClient";
import { useEffect } from "react";

const CheckoutItem = ({
  ind,
  id,
  produk,
  kategori,
  qtys,
  amounts,
  price,
  url,
  refresh,
}) => {
  const [qty, setQty] = useState(qtys ? qtys?.toString() : "0");

  const [amount, setAmount] = useState(amounts ? amounts.toString() : "0");

  const { toastError, infoToast, updateToast } = useNotif();

  const idCurrency = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(parseInt(amount));

  useEffect(() => {
    if (qty === undefined || qty === null || qty === "") {
      return setAmount("0");
    }
    const intQty = parseInt(qty);
    const rightAmount = intQty * price;
    setAmount(rightAmount.toString());
  }, [qty]);

  const deleteItem = async () => {
    const iCart = await ApiClient.delete(`cart_details/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        return;
      });
    refresh();
    return;
  };

  const updateItem = async (qty) => {
    const payload = {
      qty: qty === "" ? 0 : qty,
    };
    const iCart = await ApiClient.put(`cart_details/${id}`, payload)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        return;
      });
    refresh();
    return;
  };

  const inputHandler = (count) => {
    const IntQty = parseInt(count);
    if (IntQty >= 50000) {
      return toastError("Jumlah melebihi kapasitas stok.");
    } else {
      updateItem(IntQty);
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
      updateItem(addQty1);
      setQty(addQty1.toString());
      return;
    }
    intQty = parseInt(qty);
    if (intQty >= 50000) {
      return toastError("Jumlah melebihi kapasitas stok.");
    }
    const addQty1 = intQty + 1;
    updateItem(addQty1);
    setQty(addQty1.toString());
    return;
  };

  const minusOne = () => {
    let IntQty;
    if (qty === "") {
      IntQty = 0;
      updateItem(IntQty);
      setQty(IntQty.toString());
      return null;
    }
    IntQty = parseInt(qty);
    if (IntQty <= 0) {
      return null;
    }
    const rmvQty1 = IntQty - 1;
    updateItem(rmvQty1);
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
          src={`${url}`}
          style={{ objectFit: "cover", width: "20%", height: "100%" }}
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
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={LabelStyle2}>
              {kategori}
            </Typography>
            <Button
              variant="text"
              sx={{
                marginLeft: "auto",
                minWidth: "10px",
                color: "#ff0000",
                padding: "5px",
              }}
              onClick={() => deleteItem()}
            >
              <DeleteOutlineRoundedIcon />
            </Button>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" sx={H5style}>
                {produk}
              </Typography>
              <Typography variant="h6" sx={{ ...H5style, marginLeft: "auto" }}>
                {idCurrency.concat(",000")}
              </Typography>
            </div>
            <Typography variant="h6" sx={H5style}>
              Rp. {price},000
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
                quantity:{" "}
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
                    textAlign: "center",
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
