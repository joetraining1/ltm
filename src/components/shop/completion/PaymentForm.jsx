import { Button, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  H5style,
  LabelStyle,
  NoRek,
  PaymentType,
} from "../../../utils/constants";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import useNotif from "../../../hooks/useNotif";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";

const PaymentForm = () => {
  const [theFile, setFile] = useState("");

  const { toastError } = useNotif();

  const FileExtractor = (submitted) => {
    if (submitted) {
      if (submitted.size > 2000000) {
        return toastError("Ukuran file melebihi batas.");
      }
      if (submitted.name.length > 11) {
        const name = submitted?.name;
        const lastExt = name.lastIndexOf(".");
        const fileName = name.substring(0, 10).concat("...");
        const ext = name.substring(lastExt + 1);
        return setFile(fileName.concat(ext));
      }
      return setFile(submitted?.name);
    }
    return null;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Typography variant="h5" sx={H5style}>
        Place Order
      </Typography>
      <TextField
        select
        label="Pembayaran"
        defaultValue="Bank Transfer"
        sx={{ width: "100%" }}
        size="small"
        InputLabelProps={{
          sx: LabelStyle,
        }}
        inputProps={{
          sx: H5style,
        }}
      >
        {PaymentType.map((item, index) => {
          return (
            <MenuItem key={item.id} value={item.value} sx={H5style}>
              {item.value}
            </MenuItem>
          );
        })}
      </TextField>
      <TextField
        select
        label="Tujuan"
        defaultValue="BCA - 3530696790"
        sx={{ width: "100%" }}
        size="small"
        InputLabelProps={{
          sx: LabelStyle,
        }}
        inputProps={{
          sx: H5style,
        }}
      >
        {NoRek.map((item, index) => {
          return (
            <MenuItem key={item.id} value={item.value} sx={H5style}>
              {item.value}
            </MenuItem>
          );
        })}
      </TextField>
      <TextField
        label="Nama penerima.."
        size="small"
        sx={{
          width: "100%",
        }}
        inputProps={{ sx: H5style }}
        InputProps={{
          sx: {
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
              {
                display: "none",
              },
          },
        }}
        InputLabelProps={{ sx: LabelStyle }}
      />
      <TextField
        label="Nomor Penerima (085xxx)"
        type="number"
        size="small"
        sx={{
          width: "100%",
        }}
        inputProps={{ sx: H5style }}
        InputProps={{
          sx: {
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
              {
                display: "none",
              },
          },
        }}
        InputLabelProps={{ sx: LabelStyle }}
      />
      <TextField
        label="Alamat Penerima"
        size="small"
        sx={{
          width: "100%",
        }}
        multiline={true}
        minRows={3}
        maxRows={3}
        inputProps={{ sx: H5style }}
        InputLabelProps={{ sx: LabelStyle }}
      />
      <Button
        component="label"
        variant="contained"
        sx={{
          background: "#fff",
          color: "#00ff00",
          width: "100%",
          fontFamily: "Signika Negative, sans-serif",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          "&:hover": {
            background: "#00ff00",
            color: "#fff",
          },
        }}
        startIcon={<CloudUploadRoundedIcon />}
      >
        Bukti Pembayaran
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={(e) => FileExtractor(e.target.files[0])}
        />
      </Button>
      <Typography
        variant="body"
        sx={{
          fontFamily: "Signika Negative, sans-serif",
          fontWeight: "700",
          color: "#262626",
          height: "35px",
          textAlign: "center",
        }}
      >
        {theFile
          ? theFile
          : "Bukti anda akan ditampilkan disini, file tidak boleh melebihi dari 2mb."}
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          fontFamily: "Signika Negative, sans-serif",
          fontWeight: "600",
          width: "100%",
          marginTop: 'auto'
        }}
        startIcon={<LocalShippingRoundedIcon />}
      >
        Pesan Sekarang
      </Button>
    </div>
  );
};

export default PaymentForm;
