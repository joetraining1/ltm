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
  colorHex,
} from "../../../../utils/constants";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";

const AccountForm = ({ onClose, title, bank, noRek }) => {
  const [errorMsg, setErrorMsg] = useState({});

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
          label="Pilih bank"
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
          value={bank ? bank : null}
          defaultValue="BCA"
          SelectProps={{
            MenuProps: {
              sx: {
                "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                  height: "150px",
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
          {BankItem.map((item, index) => {
            return (
              <MenuItem key={item.id} value={item.acronim} sx={H5style}>
                {item.acronim}
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
          gap: "1vw",
          padding: "0.75em 1vw",
        }}
      >
        <AccountBalanceWalletOutlinedIcon sx={{ color: colorHex.iconColor }} />
        <Divider orientation="vertical" />
        <TextField
          label="nomor rekening.."
          sx={{
            width: "100%",
            minHeight: "5px",
            display: "flex",
            justifyContent: "center",
          }}
          size="small"
          value={noRek ? noRek : null}
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

export default AccountForm;
