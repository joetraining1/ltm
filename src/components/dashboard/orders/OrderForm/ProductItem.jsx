import { Divider, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import {
  H5style,
  LabelStyle,
  SideNoteStyle,
} from "../../../../utils/constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateDataset } from "../../../../redux/slices/adminOFSlice";

const ProductItem = ({ product_id, title, price, qty, ctg }) => {
  const [errorMsg, setErrorMsg] = useState({});
  const [qtys, setQtys] = useState(qty);

  const dispatch = useDispatch();

  const handleChange = (qty) => {
    if (qty === undefined || qty === null || qty === "") {
      dispatch(
        updateDataset({
          product_id: product_id,
          qty: 0,
          amount: 0,
        })
      );
      return setQtys(qty);
    }
    const newamount = parseInt(qty) * price;
    dispatch(
      updateDataset({
        product_id: product_id,
        qty: parseInt(qty),
        amount: newamount,
      })
    );
    setQtys(qty);
    return;
  };

  return (
    <Paper
      key={product_id}
      sx={{
        width: "100%",
        height: "6svh",
        display: "flex",
        alignItems: "center",
        padding: "0.75em 1vw",
      }}
    >
      <div
        style={{
          width: "90%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="body" sx={{ ...LabelStyle }}>
          {title}
        </Typography>
        <Typography variant="body" sx={{ ...SideNoteStyle }}>
          {ctg}
        </Typography>
      </div>
      <Divider
        orientation="vertical"
        sx={{
          margin: "0 10px 0 auto",
        }}
      />
      <TextField
        type="number"
        label="jumlah.."
        value={qtys}
        defaultValue={qtys}
        onChange={(e) => handleChange(e.target.value)}
        sx={{
          width: "30%",
          minHeight: "5px",
          display: "flex",
          justifyContent: "center",
        }}
        size="small"
        InputLabelProps={{
          sx: {
            ...LabelStyle,
            top: "10%",
            fontSize: "0.95em",
          },
        }}
        InputProps={{
          sx: {
            "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              border: "none",
              outline: "none",
            },
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
              {
                display: "none",
              },
          },
        }}
        inputProps={{
          sx: {
            ...H5style,
            padding: "1% auto",
            textAlign: "center",
          },
        }}
        helperText={errorMsg?.msg}
        FormHelperTextProps={{
          sx: {
            color: "#ff0000",
            opacity: "0.8",
            fontSize: "0.7em",
            marginTop: 0,
            lineHeight: 0,
            ...LabelStyle,
          },
        }}
      />
    </Paper>
  );
};

export default ProductItem;
