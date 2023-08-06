import {
  MenuItem,
  TextField,
  Paper,
  Typography,
  Button,
  Divider,
  Avatar,
  Pagination,
  PaginationItem,
} from "@mui/material";
import React, { useState } from "react";
import {
  AccountItem,
  AvaSize,
  BankItem,
  CategoryItem,
  H5style,
  LabelStyle,
  LabelStyle2,
  MetaStyle2,
  MetaStyle3,
  NoRek,
  PaymentItem,
  StatusPesanan,
  TypeItem,
  colorHex,
} from "../../../utils/constants";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PendingRoundedIcon from "@mui/icons-material/PendingRounded";
import AtmRoundedIcon from "@mui/icons-material/AtmRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const OrderForm = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});
  const [userLogin, setUserLogin] = useState({
    type: "admin",
  });
  const [proofing, setProofing] = useState("");
  const [shipments, setShipments] = useState("");
  const [pageActive, setPageActive] = useState(0);
  const [datas, setDatas] = useState([...Array(7)]);

  const handleChangePage = (event, value) => {
    // make an array to fill with product data
    // make an object to fill with metadata form

    setPageActive(value - 1);
  };

  const MultiArray = (arr, rows) => {
    const ArrSlice = arr.reduce((acc, val, ind) => {
      const currentRow = Math.floor(ind / rows);
      if (!acc[currentRow]) {
        acc[currentRow] = [val];
      } else {
        acc[currentRow].push(val);
      }
      return acc;
    }, []);
    const SortedArr = ArrSlice.map((item, index) => {
      return {
        pId: index,
        dataset: item,
      };
    });

    return SortedArr;
  };

  const Hero = MultiArray(datas, 5);

  let activeDataset;

  const HeroItem = Hero.map((item, index) => {
    if (pageActive === index) {
      return (activeDataset = item.dataset);
    }
    return null;
  });

  const itemMap = TypeItem.map((i, ind) => {
    if (userLogin.type !== "admin") {
      return null;
    }
    return i;
  });

  const FileImageHandler = (submits, type) => {
    if (type === "proofing") {
      setProofing(URL.createObjectURL(submits));
      return;
    }
    setShipments(URL.createObjectURL(submits));
    return;
  };

  const FileExtractor = (submitted, type) => {
    console.log(type);
    if (submitted) {
      if (submitted.size > 2000000) {
        return toastError("Ukuran file melebihi batas.");
      }
      if (submitted.name.length > 11) {
        const name = submitted?.name;
        const lastExt = name.lastIndexOf(".");
        const fileName = name.substring(0, 10).concat("...");
        const ext = name.substring(lastExt + 1);
        if (type === "proofing") {
          setProofing(fileName.concat(ext));
          return;
        }
        return setShipments(fileName.concat(ext));
      }
      if (type === "proofing") {
        setProofing(submitted?.name);
        return;
      }
      return setShipments(submitted?.name);
    }
    return null;
  };

  return (
    <React.Fragment>
      <Typography variant="h5" sx={H5style}>
        Tambah Pesanan
      </Typography>
      <div
        style={{
          height: "5px",
          width: "200px",
          background: "#F3DE2C",
          marginBottom: "2%",
        }}
      />
      <div
        style={{
          display: "grid",
          gap: "1vw",
          width: "100%",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          placeItems: "start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            gap: "10px",
            height: "100%",
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
            <AddBoxOutlinedIcon sx={{ color: colorHex.iconColor }} />
            <Divider
              orientation="vertical"
              sx={{
                margin: "0 0.3vw 0 1vw",
              }}
            />
            <TextField
              label="Pilih product"
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
              defaultValue="Susu Pasteurisasi"
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
              {CategoryItem.map((item, index) => {
                return (
                  <MenuItem key={item.id} value={item.title} sx={H5style}>
                    {item.title}
                  </MenuItem>
                );
              })}
            </TextField>
          </Paper>
          {activeDataset.map((item, index) => {
            return (
              <Paper
                key={index}
                sx={{
                  width: "100%",
                  height: "6svh",
                  display: "flex",
                  alignItems: "center",
                  padding: "0.75em 1vw",
                }}
              >
                <Typography variant="body" sx={{ ...LabelStyle }}>
                  Stawberry Variant
                </Typography>
                <Divider
                  orientation="vertical"
                  sx={{
                    margin: "0 10px 0 auto",
                  }}
                />
                <TextField
                  type="number"
                  label="jumlah.."
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
                      "text-align": "center",
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
          })}
          {datas.length < 6 ? null : (
            <Pagination
              count={Hero.length}
              sx={{
                marginTop: "auto",
              }}
              page={pageActive + 1}
              renderItem={(item) => <PaginationItem sx={H5style} {...item} />}
              onChange={handleChangePage}
            />
          )}
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
            <HelpOutlineRoundedIcon sx={{ color: colorHex.iconColor }} />
            <Divider
              orientation="vertical"
              sx={{
                margin: "0 0.3vw 0 1vw",
              }}
            />
            <TextField
              label="Pilih status pesanan"
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
              defaultValue="ON PROSES"
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
              {StatusPesanan.map((item, index) => {
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
            <PersonAddAltRoundedIcon sx={{ color: colorHex.iconColor }} />
            <Divider
              orientation="vertical"
              sx={{
                margin: "0 0.3vw 0 1vw",
              }}
            />
            <TextField
              label="Cari user.."
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
                },
              }}
            />
            <Divider
              orientation="vertical"
              sx={{
                marginLeft: "1vw",
              }}
            />
            <Button
              variant="text"
              sx={{ minWidth: "10px", marginLeft: "20px" }}
              disabled={isLoading}
            >
              {isLoading ? (
                <PendingRoundedIcon />
              ) : (
                <SearchRoundedIcon sx={{ color: colorHex.iconColor }} />
              )}
            </Button>
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
            <PersonOutlinedIcon sx={{ color: colorHex.iconColor }} />
            <Divider
              orientation="vertical"
              sx={{
                margin: "0 0.3vw 0 1vw",
              }}
            />
            <TextField
              label="nama penerima.."
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
              type="number"
              label="nomor penerima.."
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
          <Paper
            sx={{
              width: "100%",
              height: "10svh",
              display: "flex",
              alignItems: "start",
              padding: "1vw",
            }}
          >
            <EditNoteOutlinedIcon sx={{ color: colorHex.iconColor }} />
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
              label="catatan.."
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            gap: "10px",
            height: "100%",
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
            <AtmRoundedIcon sx={{ color: colorHex.iconColor }} />
            <Divider
              orientation="vertical"
              sx={{
                margin: "0 0.3vw 0 1vw",
              }}
            />
            <TextField
              label="Metode Pembayaran"
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
              defaultValue="Transfer Bank"
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
              {PaymentItem.map((item, index) => {
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
            <AccountBalanceWalletRoundedIcon
              sx={{ color: colorHex.iconColor }}
            />
            <Divider
              orientation="vertical"
              sx={{
                margin: "0 0.3vw 0 1vw",
              }}
            />
            <TextField
              label="Tujuan pembayaran"
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
              defaultValue="BCA - 3530696790"
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
              {NoRek.map((item, index) => {
                return (
                  <MenuItem key={item.id} value={item.value} sx={H5style}>
                    {item.value}
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
            <AddPhotoAlternateIcon sx={{ color: "#1976d2" }} />
            <Divider
              orientation="vertical"
              sx={{
                margin: "0 0.3vw 0 1vw",
              }}
            />
            {proofing !== "" ? (
              <Typography
                variant="body"
                style={{ ...H5style, marginLeft: "15px" }}
              >
                {proofing}
              </Typography>
            ) : (
              <Typography
                variant="body"
                style={{ ...LabelStyle2, marginLeft: "15px" }}
              >
                bukti pembayaran..
              </Typography>
            )}
            <Button
              component="label"
              variant="text"
              size="small"
              sx={{
                width: "30%",
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
                onChange={(e) => FileExtractor(e.target.files[0], "proofing")}
              />
            </Button>
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
            <ReceiptRoundedIcon sx={{ color: "#1976d2" }} />
            <Divider
              orientation="vertical"
              sx={{
                margin: "0 0.3vw 0 1vw",
              }}
            />
            {shipments !== "" ? (
              <Typography
                variant="body"
                style={{ ...H5style, marginLeft: "15px" }}
              >
                {shipments}
              </Typography>
            ) : (
              <Typography
                variant="body"
                style={{ ...LabelStyle2, marginLeft: "15px" }}
              >
                resi pengiriman..
              </Typography>
            )}
            <Button
              component="label"
              variant="text"
              size="small"
              sx={{
                width: "30%",
                fontFamily: "Signika Negative, sans-serif",
                fontWeight: "700",
                display: "flex",
                margin: "auto 0",
                alignItems: "center",
                marginLeft: "auto",
              }}
            >
              {shipments ? "ubah foto" : "file foto"}
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => FileExtractor(e.target.files[0], "")}
              />
            </Button>
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
            <LocalShippingOutlinedIcon sx={{ color: colorHex.iconColor }} />
            <Divider
              orientation="vertical"
              sx={{
                margin: "0 0.3vw 0 1vw",
              }}
            />
            <TextField
              type="number"
              label="biaya pengiriman.."
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
                  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                    {
                      display: "none",
                    },
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
          <div style={{ ...MetaStyle3, marginTop: "auto" }}>
            <div style={MetaStyle2}>
              <Typography variant="h6" sx={H5style}>
                Total
              </Typography>
              <Typography variant="h6" sx={H5style}>
                :
              </Typography>
            </div>
            <Typography
              variant="h5"
              sx={{ width: "100%", ...H5style, textAlign: "right" }}
            >
              Rp. 53,000
            </Typography>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          marginTop: "auto",
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

export default OrderForm;
