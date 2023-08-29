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
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchPopUser from "./OrderForm/SearchPopUser";
import ProductSelection from "./OrderForm/ProductSelection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ApiClient from "../../../services/ApiClient";
import StatusSelection from "./OrderForm/StatusSelection";
import PaySelection from "./OrderForm/PaySelection";
import NorekSelection from "./OrderForm/NorekSelection";
import { addShipping } from "../../../redux/slices/adminOFSlice";
import FormData from "form-data";
import useNotif from "../../../hooks/useNotif";

const OrderForm = ({ onClose, refresh }) => {
  const user = useSelector((state) => state.auth.authState);
  const metas = useSelector((state) => state.aof.metadata);
  const datasets = useSelector((state) => state.aof.dataset);
  const stringShip = metas.shipping.toString()
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});
  const [userLogin, setUserLogin] = useState({
    type: "admin",
  });
  const [proofing, setProofing] = useState("");
  const [proofImg, setProofImg] = useState("");
  const [shipments, setShipments] = useState("");
  const [shipImg, setShipImg] = useState("");
  const [pageActive, setPageActive] = useState(0);
  // const [datas, setDatas] = useState([...Array(7)]);
  const [scp, setScp] = useState("");
  const [addr, setAddr] = useState("");
  const [sname, setSname] = useState("");
  const [snote, setSnote] = useState("");
  const [shipping, setShipping] = useState(metas.shipping ? stringShip.concat('000') : "0");

  const dispatch = useDispatch();
  const { infoToast, updateToast } = useNotif()

  console.log(metas);

  // note to do tomorrow : async for type, norek, status, and product selection
  // mutate redux metadata value
  // mutate redux dataset value
  // call the data and send to backend for process
  // post body structure metadata, dataset, ship, proof

  // useEffect(() => {
  //     dispatch(addAddr(addr))
  //   return;
  // }, [addr]);

  // post request should be here
  // before making request should extract redux metadata and dataset

  const handleChangePage = (event, value) => {
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

  // const Hero = MultiArray(datas, 5);

  let activeDataset;

  const handleShipping = (qty) => {
    if (qty === undefined || qty === null || qty === "") {
      dispatch(addShipping(0));
      return setShipping(qty);
    }
    if(qty.length > 3){
      const shipfee = qty.slice(0, -3)
      const shippings = parseInt(shipfee);
      dispatch(addShipping(shippings));
      setShipping(qty);
      return
    }
    dispatch(addShipping(0));
    setShipping(qty);
    return;
  };

  // const HeroItem = Hero.map((item, index) => {
  //   if (pageActive === index) {
  //     return (activeDataset = item.dataset);
  //   }
  //   return null;
  // });

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
          setProofImg(submitted)
          setProofing(fileName.concat(ext));
          return;
        }
        setShipImg(submitted)
        return setShipments(fileName.concat(ext));
      }
      if (type === "proofing") {
        setProofImg(submitted)
        setProofing(submitted?.name);
        return;
      }
      setShipImg(submitted)
      return setShipments(submitted?.name);
    }
    return null;
  };

  const checkout = async () => {
    infoToast("menambahkan pesanan..");
    setIsLoading(true);
    try {
      const FormPayload = new FormData();
      const payload = {
        user_id: metas.user_id,
        status_id: metas.status_id,
        payment_id: metas.payment_id,
        account_id: metas.account_id,
        name: sname,
        cp: scp,
        address: addr,
        note: snote,
        variant: metas.variant,
        unit: metas.unit,
        amount: metas.amount,
        shipping: metas.shipping,
        total: metas.total,
      }
      FormPayload.append("metadata", JSON.stringify(payload))
      FormPayload.append("dataset", JSON.stringify(datasets))
      if(shipImg !== ""){
        FormPayload.append("ship", shipImg);
      }
      if(proofImg !== ""){
        FormPayload.append("proof", proofImg);
      }
      const checkout = await ApiClient.post(`order`, FormPayload).then(
        (res) => {
          return res.data;
        }
      );
      setIsLoading(false);
      updateToast("Berhasil.", "success");
      refresh()
      onClose()
      return;
    } catch (error) {
      updateToast("Gagal.", "error");
      setIsLoading(false);
      return;
    }
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
        <ProductSelection />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <StatusSelection />
          <SearchPopUser />
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
              value={sname}
              onChange={(e) => setSname(e.target.value)}
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
              value={scp}
              onChange={(e) => setScp(e.target.value)}
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
              value={addr}
              onChange={(e) => setAddr(e.target.value)}
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
              value={snote}
              onChange={(e) => setSnote(e.target.value)}
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
          <PaySelection />
          <NorekSelection />
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
              value={shipping}
              onChange={(e) => handleShipping(e.target.value)}
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
              Rp. {metas.total},000
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
        <Button variant="contained" sx={LabelStyle} onClick={() => checkout()}>
          simpan
        </Button>
      </div>
    </React.Fragment>
  );
};

export default OrderForm;
