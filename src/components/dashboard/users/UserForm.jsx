import {
  MenuItem,
  TextField,
  Paper,
  Typography,
  Button,
  Divider,
  Avatar,
} from "@mui/material";
import React, { useState } from "react";
import {
  AvaSize,
  BankItem,
  CategoryItem,
  H5style,
  LabelStyle,
  LabelStyle2,
  TypeItem,
  colorHex,
} from "../../../utils/constants";
import MoreRoundedIcon from "@mui/icons-material/MoreRounded";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const UserForm = ({ onClose, mode, title, id, fone, nama, email, alamat, url }) => {
  const [errorMsg, setErrorMsg] = useState({});
  const [userLogin, setUserLogin] = useState({
    type: "admin",
  });
  const [proofing, setProofing] = useState(url ? url : "");
  const [emails, setEmails] = useState(email ? email : "")
  const [name, setName] = useState(nama ? nama : "")
  const [phone, setPhone] = useState(fone ? fone : "")

  const itemMap = TypeItem.map((i, ind) => {
    if (userLogin.type !== "admin") {
      return null;
    }
    return i;
  });

  const FileImageHandler = (submits) => {
    setProofing(URL.createObjectURL(submits));
    return;
  };

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
      <div
        style={{
          display: "flex",
          gap: "1vw",
          width: "100%",
          justifyContent: "space-evenly",
          alignItems: "end",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Avatar
            src={proofing !== "" ? proofing : null}
            sx={{
              height: mode !== "add" ? 154 : 96,
              width: mode !== "add" ? 154 : 96,
              boxShadow: "1px 1px 1px 2px rgba(0,0,0,0.4)",
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
            <AddPhotoAlternateIcon sx={{ color: "#1976d2" }} />
            <Divider
              orientation="vertical"
              sx={{
                margin: "0 0.3vw 0 1vw",
              }}
            />
            {proofing !== "" ? (
              <div
                style={{
                  display: "flex",
                  width: "67.5%",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  marginLeft: "auto",
                }}
              >
                <Button
                  component="label"
                  variant="text"
                  size="small"
                  sx={{
                    width: "100%",
                    fontFamily: "Signika Negative, sans-serif",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    color: "#ff0000",
                  }}
                  onClick={() => setProofing("")}
                >
                  hapus foto
                </Button>
                <Button
                  component="label"
                  variant="text"
                  size="small"
                  sx={{
                    width: "100%",
                    fontFamily: "Signika Negative, sans-serif",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Ubah foto
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(e) => FileImageHandler(e.target.files[0])}
                  />
                </Button>
              </div>
            ) : (
              <Button
                component="label"
                variant="text"
                size="small"
                sx={{
                  width: "35%",
                  fontFamily: "Signika Negative, sans-serif",
                  fontWeight: "700",
                  display: "flex",
                  margin: "auto auto auto 2.4vw",
                  alignItems: "center",
                }}
              >
                file foto
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => FileImageHandler(e.target.files[0])}
                />
              </Button>
            )}
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
            <EmailRoundedIcon sx={{ color: colorHex.iconColor }} />
            <Divider
              orientation="vertical"
              sx={{
                margin: "0 0.3vw 0 1vw",
              }}
            />
            <TextField
              label="email.."
              type="email"
              value={emails}
              sx={{
                width: "100%",
                minHeight: "5px",
                display: "flex",
                justifyContent: "center",
              }}
              size="small"
              onChange={(e) => setEmails(e.target.value)}
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
          {mode === "add" ? (
            <Paper
              sx={{
                width: "100%",
                height: "6svh",
                display: "flex",
                alignItems: "center",
                padding: "0.75em 1vw",
              }}
            >
              <VpnKeyRoundedIcon sx={{ color: colorHex.iconColor }} />
              <Divider
                orientation="vertical"
                sx={{
                  margin: "0 0.3vw 0 1vw",
                }}
              />
              <TextField
                label="password.."
                type="password"
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
          ) : null}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            gap: "10px",
          }}
        >
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
              label="Pilih tipe user"
              sx={{
                width: "100%",
                minHeight: "5px",
                display: "flex",
                justifyContent: "center",
              }}
              size="small"
              select
              InputLabelProps={{
                sx: {
                  ...LabelStyle,
                  top: "10%",
                  fontSize: "0.95em",
                },
              }}
              helperText={errorMsg?.msg}
              FormHelperTextProps={{
                sx: {
                  color: "#ff0000",
                  opacity: "0.8",
                  fontSize: "0.7em",
                  lineHeight: 0,
                  marginTop: "1%",
                  ...LabelStyle,
                },
              }}
              defaultValue={"User"}
              SelectProps={{
                MenuProps: {
                  sx: {
                    "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                      height: TypeItem.length < 4 ? "auto" : "150px",
                    },
                  },
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
                  paddingBottom: 0,
                },
              }}
            >
              {TypeItem.map((item, index) => {
                return (
                  <MenuItem key={item.id} value={item.title} sx={H5style}>
                    {item.title}
                  </MenuItem>
                );
              })}
            </TextField>
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
            <PersonRoundedIcon sx={{ color: colorHex.iconColor }} />
            <Divider
              orientation="vertical"
              sx={{
                margin: "0 0.3vw 0 1vw",
              }}
            />
            <TextField
              label="nama.."
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <PhoneRoundedIcon sx={{ color: colorHex.iconColor }} />
            <Divider
              orientation="vertical"
              sx={{
                margin: "0 0.3vw 0 1vw",
              }}
            />
            <TextField
              label="nomor telephone.."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              height: "10svh",
              display: "flex",
              alignItems: "start",
              padding: "1vw",
            }}
          >
            <FmdGoodRoundedIcon sx={{ color: colorHex.iconColor }} />
            <Divider
              orientation="vertical"
              sx={{
                margin: "0 0.3vw 0 1vw",
              }}
            />
            <TextField
              multiline
              minRows={3}
              maxRows={3}
              label="alamat.."
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
        </div>
      </div>
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
        <Button variant="contained" sx={LabelStyle}>
          simpan
        </Button>
      </div>
    </React.Fragment>
  );
};

export default UserForm;
