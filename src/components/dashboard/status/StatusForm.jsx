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
  H5style,
  LabelStyle,
  LabelStyle2,
  colorHex,
} from "../../../utils/constants";
import LoupeRoundedIcon from "@mui/icons-material/LoupeRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import useNotif from "../../../hooks/useNotif";
import ApiClient from "../../../services/ApiClient";

const StatusForm = ({ onClose, title, nama, desc, refresh, port, id }) => {
  const [errorMsg, setErrorMsg] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [cname, setCname] = useState(nama ? nama : "");
  const [cdesc, setCdesc] = useState(desc ? desc : "");

  const { infoToast, updateToast } = useNotif();

  const upApi = async () => {
    setIsLoading(true);
    infoToast("memperbaharui data..");
    const payload = {
      title: cname,
      description: cdesc,
    };
    try {
      const reqData = await ApiClient.put(`status/${id}`, payload).then((response) => {
        return response.data;
      });
      setIsLoading(false);
      updateToast("Berhasil mengubah data.", "success");
      onClose();
      refresh();
      return;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      updateToast("Gagal mengubah data.", "error");
      return;
    }
  };

  const newApi = async () => {
    setIsLoading(true);
    infoToast("menambahkan data..");
    const payload = {
      title: cname,
      description: cdesc,
    };
    try {
      const reqData = await ApiClient.post("status", payload).then(
        (response) => {
          return response.data;
        }
      );
      setIsLoading(false);
      updateToast("Data ditambahkan.", "success");
      refresh()
      onClose();
      return;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      updateToast("Gagal.", "error");
      return;
    }
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
        <HelpOutlineRoundedIcon sx={{ color: colorHex.iconColor }} />
        <Divider
          orientation="vertical"
          sx={{
            margin: "0 0.3vw 0 1vw",
          }}
        />
        <TextField
          label="nama status.."
          value={cname}
          onChange={(e) => setCname(e.target.value)}
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
          label="deskripsi.."
          value={cdesc}
          onChange={(e) => setCdesc(e.target.value)}
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
        <Button variant="contained" sx={LabelStyle} onClick={port === "edit" ? () => upApi() : () => newApi()}>
          simpan
        </Button>
      </div>
    </React.Fragment>
  );
};

export default StatusForm;
