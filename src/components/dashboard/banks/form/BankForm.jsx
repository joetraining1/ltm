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

const BankForm = ({ onClose, title, bank, acro, picurl }) => {
  const [errorMsg, setErrorMsg] = useState({});
  const [proofing, setProofing] = useState("");

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
          value={bank ? bank : null}
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
          value={acro ? acro : null}
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
            {picurl ? picurl : "nama file.."}
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
        <Button variant="contained" sx={LabelStyle}>
          simpan
        </Button>
      </div>
    </React.Fragment>
  );
};

export default BankForm;
