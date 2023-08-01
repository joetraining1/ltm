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
} from "../../../../utils/constants";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import CommentBankRoundedIcon from "@mui/icons-material/CommentBankRounded";
import FormData from "form-data";
import ApiClient from "../../../../services/ApiClient";
import useNotif from "../../../../hooks/useNotif";

const BankForm = ({
  onClose,
  title,
  bank,
  acro,
  picurl,
  id,
  refresh,
  port,
}) => {
  const StringSlicer = (files) => {
    const lastExt = files.lastIndexOf(".");
    const fileName = files.substring(31, 41).concat("...");
    const ext = files.substring(lastExt + 1);
    return fileName.concat(ext);
  };

  const { infoToast, updateToast } = useNotif();

  const [errorMsg, setErrorMsg] = useState({});
  const [proofing, setProofing] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [bid, setBid] = useState(id ? id : "");
  const [bname, setBname] = useState(bank ? bank : "");
  const [acros, setAcros] = useState(acro ? acro : "");
  const [urls, setUrls] = useState(picurl ? StringSlicer(picurl) : "");
  const [curl, setCurl] = useState(null);

  const newApi = async () => {
    setIsLoading(true);
    infoToast("menyimpan data bank..");
    try {
      const FormPayload = new FormData();
      FormPayload.append("title", bname);
      FormPayload.append("acronim", acros);
      FormPayload.append("image", curl);

      const photoApi = await ApiClient.post(`bank`, FormPayload).then((res) => {
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
    infoToast("menyimpan perubahan data bank..");
    try {
      const FormPayload = new FormData();
      FormPayload.append("title", bname);
      FormPayload.append("acronim", acros);
      if (curl !== null) {
        FormPayload.append("image", curl);
      }

      const photoApi = await ApiClient.put(`bank/${id}`, FormPayload).then(
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

  const FileImageHandler = (submits) => {
    setCurl(submits);
    setProofing(URL.createObjectURL(submits));
    return;
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
          gap: "1vw",
          padding: "0.75em 1vw",
        }}
      >
        <AccountBalanceRoundedIcon sx={{ color: colorHex.iconColor }} />
        <Divider orientation="vertical" />
        <TextField
          label="nama bank.."
          value={bname}
          onChange={(e) => setBname(e.target.value)}
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
              paddingBottom: "1%",
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
          gap: "1vw",
          padding: "0.75em 1vw",
        }}
      >
        <CommentBankRoundedIcon sx={{ color: colorHex.iconColor }} />
        <Divider orientation="vertical" />
        <TextField
          label="acronim bank.."
          sx={{
            width: "100%",
            minHeight: "5px",
            display: "flex",
            justifyContent: "center",
          }}
          value={acros}
          onChange={(e) => setAcros(e.target.value)}
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
              paddingBottom: "1%",
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
          gap: "1vw",
        }}
      >
        <AddPhotoAlternateIcon sx={{ color: "#1976d2" }} />
        <Divider orientation="vertical" />
        {proofing !== "" ? (
          <Typography variant="body" style={{ ...H5style, marginLeft: "15px" }}>
            {proofing}
          </Typography>
        ) : (
          <Typography
            variant="body"
            style={{ ...LabelStyle2, marginLeft: "15px" }}
          >
            {urls !== "" ? urls : "nama file.."}
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
        <Button
          variant="contained"
          sx={LabelStyle}
          onClick={port === "edit" ? () => upApi() : () => newApi()}
        >
          simpan
        </Button>
      </div>
    </React.Fragment>
  );
};

export default BankForm;
