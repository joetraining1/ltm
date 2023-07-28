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
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import LoupeRoundedIcon from "@mui/icons-material/LoupeRounded";
import { useRef } from "react";
import useNotif from "../../../hooks/useNotif";
import ApiClient from "../../../services/ApiClient";

const TypeForm = ({ onClose, title, nama, desc, id, refresh, port }) => {
  const [errorMsg, setErrorMsg] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [typeTitle, setTypeTitle] = useState(nama ? nama : undefined);
  const [typeDesc, setTypeDesc] = useState(desc ? desc : undefined);

  const titleRef = useRef();
  const descRef = useRef();

  const { infoToast, updateToast } = useNotif();

  const sendType = async () => {
    setIsLoading(true);
    infoToast("menambahkan data..");
    const payload = {
      title: titleRef.current.value,
      description: descRef.current.value,
    };
    try {
      const reqData = await ApiClient.post("type", payload).then((response) => {
        return response.data;
      });
      setIsLoading(false);
      updateToast("Berhasil menambahkan data.", "success");
      onClose();
      refresh();
      return;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      updateToast("Gagal menambahkan data.", "error");
      return;
    }
  };

  const updateType = async () => {
    setIsLoading(true);
    infoToast("memperbaharui data..");
    const payload = {
      title: titleRef.current.value,
      description: descRef.current.value,
    };
    try {
      const reqData = await ApiClient.put(`type/${id}`, payload).then(
        (response) => {
          return response.data;
        }
      );
      setIsLoading(false);
      updateToast("Berhasil mengubah data.", "success");
      refresh()
      onClose();
      return;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      updateToast("Gagal mengubah data.", "error");
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
        <ManageAccountsRoundedIcon sx={{ color: colorHex.iconColor }} />
        <Divider
          orientation="vertical"
          sx={{
            margin: "0 0.3vw 0 1vw",
          }}
        />
        <TextField
          label="nama tipe akun.."
          value={typeTitle}
          onChange={(e) => setTypeTitle(e.target.value)}
          inputRef={titleRef}
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
          inputRef={descRef}
          label="deskripsi.."
          value={typeDesc}
          onChange={(e) => setTypeDesc(e.target.value)}
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
        {port === "edit" ? (
          <Button
            variant="contained"
            sx={LabelStyle}
            disabled={isLoading}
            onClick={() => updateType()}
          >
            simpan
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={LabelStyle}
            disabled={isLoading}
            onClick={() => sendType()}
          >
            simpan
          </Button>
        )}
      </div>
    </React.Fragment>
  );
};

export default TypeForm;
