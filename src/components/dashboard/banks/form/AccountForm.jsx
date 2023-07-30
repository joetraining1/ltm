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
import ApiClient from "../../../../services/ApiClient";
import useNotif from "../../../../hooks/useNotif";

const AccountForm = ({ onClose, title, bank, noRek, refresh, bId, port, bankList, id }) => {
  const [errorMsg, setErrorMsg] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [cname, setCname] = useState(bank ? bank : "BCA");
  const [cdesc, setCdesc] = useState(noRek ? noRek : "");
  const [cBank, setCbank] = useState({
    bank_name: bank ? bank : "BCA",
    bank_id: bId ? bId : 1
  })


  const { infoToast, updateToast } = useNotif();

  const upApi = async () => {
    setIsLoading(true);
    infoToast("memperbaharui data..");
    const payload = {
      ...cBank,
      norek: cdesc
    };
    try {
      const reqData = await ApiClient.put(`account/${id}`, payload).then(
        (response) => {
          return response.data;
        }
      );
      setIsLoading(false);
      updateToast("Berhasil mengubah data.", "success");
      onClose();
      refresh();
      return;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      updateToast("Gagal.", "error");
      return;
    }
  };

  const newApi = async () => {
    setIsLoading(true);
    infoToast("menambahkan data..");
    const payload = {
      ...cBank,
      norek: cdesc
    };
    try {
      const reqData = await ApiClient.post("account", payload).then(
        (response) => {
          return response.data;
        }
      );
      setIsLoading(false);
      updateToast("Data ditambahkan.", "success");
      refresh();
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
          value={cBank.bank_name}
          defaultValue={cBank.bank_name}
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
          {bankList?.map((item, index) => {
            return (
              <MenuItem key={item.id} value={item.acronim} sx={H5style} onClick={() => setCbank({
                bank_id: item.id,
                bank_name: item.acronim
              })}>
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
          value={cdesc}
          onChange={(e) => setCdesc(e.target.value)}
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
        <Button
          variant="contained"
          sx={LabelStyle}
          disabled={isLoading}
          onClick={port === "edit" ? () => upApi() : () => newApi()}
        >
          simpan
        </Button>
      </div>
    </React.Fragment>
  );
};

export default AccountForm;
