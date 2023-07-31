import {
  MenuItem,
  TextField,
  Paper,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import {
  BankItem,
  CategoryItem,
  H5style,
  LabelStyle,
  LabelStyle2,
  colorHex,
} from "../../../utils/constants";
import LoupeRoundedIcon from "@mui/icons-material/LoupeRounded";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import MoreRoundedIcon from "@mui/icons-material/MoreRounded";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import useNotif from "../../../hooks/useNotif";
import FormData from "form-data";
import ApiClient from "../../../services/ApiClient";

const ProductForm = ({
  onClose,
  title,
  ctgId,
  produk,
  stock,
  price,
  desc,
  url,
  refresh,
  port,
  id
}) => {
  const StringSlicer = (files) => {
    const lastExt = files.lastIndexOf(".");
    const fileName = files.substring(31, 41).concat("...");
    const ext = files.substring(lastExt + 1);
    return fileName.concat(ext);
  };
  const [errorMsg, setErrorMsg] = useState({});
  const [proofing, setProofing] = useState(url ? StringSlicer(url) : "");
  const [cctg, setCctg] = useState(ctgId ? ctgId : 1);
  const [ctitle, setCtitle] = useState(produk ? produk : "");
  const [cprice, setCprice] = useState(price ? price : 0);
  const [cstock, setCtock] = useState(stock ? stock : 0);
  const [cdesc, setCdesc] = useState(desc ? desc : "");
  const [curl, setCurl] = useState(null);
  const [isLoading, setIsLoading] = useState(false)


  const { infoToast, updateToast } = useNotif();

  const newApi = async () => {
    setIsLoading(true);
    infoToast("manambahkan produk..");
    try {
      const FormPayload = new FormData();
      FormPayload.append("title", ctitle);
      FormPayload.append("description", cdesc);
      FormPayload.append("price", cprice);
      FormPayload.append("stock", cstock);
      FormPayload.append("ctg_id", cctg);
      if (curl !== null) {
        FormPayload.append("image", curl);
      }

      const photoApi = await ApiClient.post(`product`, FormPayload).then((res) => {
        return res.data;
      });
      setIsLoading(false);
      updateToast("Berhasil.", "success");
      refresh();
      onClose();
      return;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      updateToast("Gagal.", "error");
      return;
    }
  };

  const upApi = async () => {
    setIsLoading(true);
    infoToast("menyimpan perubahan..");
    try {
      const FormPayload = new FormData();
      console.log(cctg)
      FormPayload.append("title", ctitle);
      FormPayload.append("description", cdesc);
      FormPayload.append("price", cprice);
      FormPayload.append("stock", cstock);
      FormPayload.append("ctg_id", cctg);
      if (curl !== null) {
        FormPayload.append("image", curl);
      }
      if (curl === "") {
        FormPayload.append("image", "clear photo");
      }

      const photoApi = await ApiClient.put(`product/${id}`, FormPayload).then(
        (res) => {
          return res.data;
        }
      );
      setIsLoading(false);
      updateToast("Berhasil.", "success");
      refresh();
      onClose();
      return;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      updateToast("Gagal.", "error");
      return;
    }
  };

  const FileExtractor = (submitted) => {
    if (submitted === "") {
      setCurl("clear image");
      setProofing("");
      return;
    }
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
        return setProofing(fileName.concat(ext));
      }
      return setProofing(submitted?.name);
    }
    return null;
  };

  return (
    <React.Fragment>
      <Typography variant="h6" sx={H5style}>
        {title}
      </Typography>
      <div
        style={{
          height: "5px",
          width: "200px",
          background: "#F3DE2C",
          marginBottom: "5%",
        }}
      />
      <Paper
        sx={{
          width: "100%",
          height: "6svh",
          display: "flex",
          alignItems: "center",
          padding: "0.75em 1vw",
        }}
      >
        <LocalOfferOutlinedIcon sx={{ color: colorHex.iconColor }} />
        <Divider
          orientation="vertical"
          sx={{
            margin: "0 0.3vw 0 1vw",
          }}
        />
        <TextField
          label="nama produk.."
          value={ctitle}
          onChange={(e) => setCtitle(e.target.value)}
          sx={{
            width: "100%",
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
            },
          }}
          inputProps={{
            sx: {
              ...H5style,
              padding: "1% auto",
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
      <Paper
        sx={{
          width: "100%",
          height: "6svh",
          display: "flex",
          alignItems: "center",
          padding: "0.75em 1vw",
        }}
      >
        <PriceChangeOutlinedIcon sx={{ color: colorHex.iconColor }} />
        <Divider
          orientation="vertical"
          sx={{
            margin: "0 0.3vw 0 1vw",
          }}
        />
        <TextField
          type="number"
          label="harga produk.."
          value={cprice}
          onChange={(e) => setCprice(parseInt(e.target.value))}
          sx={{
            width: "100%",
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
              textAlign: "right",
            },
          }}
          InputProps={{
            sx: {
              "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                border: "none",
                outline: "none",
              },
              textAlign: "right",
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                {
                  display: "none",
                },
              ".css-hveq0y-MuiInputBase-input-MuiOutlinedInput-input": {
                paddingRight: 0,
              },
            },
          }}
          inputProps={{
            sx: {
              ...H5style,
              padding: "1% 0 1% auto",
              textAlign: "right",
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
        <Typography variant="body" sx={{ ...H5style, textAlign: "left" }}>
          ,000
        </Typography>
        <Divider
          orientation="vertical"
          sx={{
            margin: "0 1vw",
          }}
        />
        <TextField
          type="number"
          label="stock.."
          value={cstock}
          onChange={(e) => setCtock(parseInt(e.target.value))}
          sx={{
            width: "100%",
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
      <Paper
        sx={{
          width: "100%",
          height: "15svh",
          display: "flex",
          alignItems: "start",
          padding: "1vw",
        }}
      >
        <LoupeRoundedIcon sx={{ color: colorHex.iconColor }} />
        <Divider
          orientation="vertical"
          sx={{
            margin: "0 0.3vw 0 1vw",
          }}
        />
        <TextField
          multiline
          minRows={5}
          maxRows={5}
          value={cdesc}
          onChange={(e) => setCdesc(e.target.value)}
          label="deskripsi.."
          sx={{
            width: "100%",
            minHeight: "5px",
            "& .css-1r6xk0x-MuiInputBase-root-MuiOutlinedInput-root": {
              padding: "0 0.9em",
            },
          }}
          size="small"
          InputLabelProps={{
            sx: {
              ...LabelStyle,
              top: "-8%",
              fontSize: "0.95em",
              display: "flex",
              justifyContent: "center",
            },
          }}
          InputProps={{
            sx: {
              "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                border: "none",
                outline: "none",
                padding: "0 auto",
              },
            },
          }}
          inputProps={{
            sx: {
              ...H5style,
              padding: "0 auto",
            },
          }}
          helperText={errorMsg?.msg}
          FormHelperTextProps={{
            sx: {
              color: "#ff0000",
              opacity: "0.8",
              fontSize: "0.7em",
              marginTop: "1%",
              lineHeight: 0,
              ...LabelStyle,
            },
          }}
        />
      </Paper>
      <Paper
        sx={{
          width: "100%",
          height: "6svh",
          display: "flex",
          alignItems: "center",
          padding: "0.75em 1vw",
        }}
      >
        <AddPhotoAlternateIcon sx={{ color: "#1976d2" }} />
        <Divider
          orientation="vertical"
          sx={{
            margin: "0 0.3vw 0 1vw",
          }}
        />
        {proofing !== "" ? (
          <Typography variant="body" style={{ ...H5style, marginLeft: "15px" }}>
            {proofing}
          </Typography>
        ) : (
          <Typography
            variant="body"
            style={{ ...LabelStyle2, marginLeft: "15px" }}
          >
            nama file..
          </Typography>
        )}
        <Button
          component="label"
          variant="text"
          size="small"
          sx={{
            width: "25%",
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "700",
            display: "flex",
            margin: "auto 0",
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          {proofing ? "ubah foto" : "file foto"}
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => FileExtractor(e.target.files[0])}
          />
        </Button>
      </Paper>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          marginTop: "5%",
          gap: "1vw",
        }}
      >
        <Button
          variant="text"
          sx={{ ...LabelStyle, color: "#ff0000", marginLeft: "auto" }}
          onClick={() => onClose()}
        >
          cancel
        </Button>
        <Button variant="contained" sx={LabelStyle} disabled={isLoading} onClick={port === "edit" ? () => upApi() : () => newApi()}>
          simpan
        </Button>
      </div>
    </React.Fragment>
  );
};

export default ProductForm;
