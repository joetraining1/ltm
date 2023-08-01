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
import FormData from "form-data";
import ApiClient from "../../../services/ApiClient";

const PaymentForm = ({ id, dataset, refresh }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const payItem = dataset.pay;
  const accItem = dataset.norek;

  const [theFile, setFile] = useState("");
  const [cpname, setCpname] = useState("");
  const [contact, setContact] = useState("");
  const [addr, setAddr] = useState("");
  const [curl, setCurl] = useState(null);
  const [payId, setPayId] = useState({
    id: 1,
    title: "",
  });
  const [accId, setAccId] = useState({
    id: 2,
    title: "",
  });

  const { toastError, infoToast, updateToast } = useNotif();

  const checkout = async () => {
    if (
      cpname === "" ||
      contact === "" ||
      addr === "" ||
      payId.title === "" ||
      accId.title === ""
    ) {
      setError(true);
      return toastError("Silahkan melengkapi form pesanan terlebih dahulu");
    }
    setError(false);
    infoToast("menambahkan informasi..");
    setIsLoading(true);
    try {
      const FormPayload = new FormData();
      FormPayload.append("name", cpname);
      FormPayload.append("cp", contact);
      FormPayload.append("address", addr);
      FormPayload.append("payment_id", payId.id);
      FormPayload.append("account_id", accId.id);
      FormPayload.append("status_id", 5);
      if (curl !== null) {
        FormPayload.append("image", curl);
      }
      const checkout = await ApiClient.put(
        `order/completion/${id}`,
        FormPayload
      )
        .then((res) => {
          return res.data;
        })
      setIsLoading(false);
      updateToast("Berhasil.", "success");
      refresh();
      return;
    } catch (error) {
      console.log(error);
      updateToast("Gagal.", "error");
      setIsLoading(false);
      return;
    }
  };

  const FileExtractor = (submitted) => {
    if (submitted) {
      if (submitted.size > 2000000) {
        return toastError("Ukuran file melebihi batas.");
      }
      setCurl(submitted);
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
        helperText={
          error
            ? payId.title === ""
              ? "metode pembayaran tidak boleh kosong"
              : ""
            : ""
        }
        FormHelperTextProps={{
          sx: {
            color: "#ff0000",
          },
        }}
        value={payId.title}
        defaultValue={payId.title}
        sx={{ width: "100%" }}
        size="small"
        InputLabelProps={{
          sx: LabelStyle,
        }}
        inputProps={{
          sx: H5style,
        }}
      >
        {payItem.map((item, index) => {
          return (
            <MenuItem
              key={item.id}
              value={item.title}
              sx={H5style}
              onClick={() =>
                setPayId({
                  id: item.id,
                  title: item.title,
                })
              }
            >
              {item.title}
            </MenuItem>
          );
        })}
      </TextField>
      <TextField
        select
        label="Tujuan"
        defaultValue={accId.title}
        helperText={
          error
            ? accId.title === ""
              ? "Tujuan pembayaran tidak boleh kosong"
              : ""
            : ""
        }
        FormHelperTextProps={{
          sx: {
            color: "#ff0000",
          },
        }}
        value={accId.title}
        sx={{ width: "100%" }}
        size="small"
        InputLabelProps={{
          sx: LabelStyle,
        }}
        inputProps={{
          sx: H5style,
        }}
      >
        {accItem.map((item, index) => {
          return (
            <MenuItem
              key={item.id}
              value={item.bank_name.concat(" - ").concat(item.norek)}
              sx={H5style}
              onClick={() =>
                setAccId({
                  id: item.id,
                  title: item.bank_name.concat(" - ").concat(item.norek),
                })
              }
            >
              {item.bank_name.concat(" - ").concat(item.norek)}
            </MenuItem>
          );
        })}
      </TextField>
      <TextField
        label="Nama penerima.."
        helperText={
          error ? (cpname === "" ? "nama tidak boleh kosong" : "") : ""
        }
        FormHelperTextProps={{
          sx: {
            color: "#FF0000",
          },
        }}
        value={cpname}
        onChange={(e) => setCpname(e.target.value)}
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
        helperText={
          error ? (contact === "" ? "nomor tidak boleh kosong" : "") : ""
        }
        FormHelperTextProps={{
          sx: {
            color: "#FF0000",
          },
        }}
        value={contact}
        onChange={(e) => setContact(e.target.value.toString())}
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
        value={addr}
        onChange={(e) => setAddr(e.target.value)}
        helperText={
          error ? (addr === "" ? "alamat tidak boleh kosong" : "") : ""
        }
        FormHelperTextProps={{
          sx: {
            color: "#FF0000",
          },
        }}
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
          marginTop: "auto",
        }}
        disabled={isLoading}
        onClick={() => checkout()}
        startIcon={<LocalShippingRoundedIcon />}
      >
        Pesan Sekarang
      </Button>
    </div>
  );
};

export default PaymentForm;
