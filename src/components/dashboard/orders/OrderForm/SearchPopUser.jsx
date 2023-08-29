import React, { useEffect, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";

import {
  Avatar,
  Button,
  Divider,
  Paper,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import {
  H5style,
  LabelStyle,
  LabelStyle2,
  colorHex,
} from "../../../../utils/constants";
import PendingRoundedIcon from "@mui/icons-material/PendingRounded";
import useNotif from "../../../../hooks/useNotif";
import ApiClient from "../../../../services/ApiClient";
import NoData from "../../../global/NoData";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../../redux/slices/adminOFSlice";

const SearchPopUser = () => {
  const [errorMsg, setErrorMsg] = useState({});
  const [anchorEL, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [keywords, setKeywords] = useState("");
  const { infoToast, updateToast, toastSuccess } = useNotif();
  const [datas, setDatas] = useState([]);
  const [selected, setSelected] = useState({
    user_id: 0,
    name: "",
    email: "",
  });

  const userId = useSelector((state) => state.aof.metadata);

  const dispatch = useDispatch();

  const selectUser = (id, name, email) => {
    dispatch(addUser(id));
    setSelected({
      user_id: id,
      name: name,
      email: email,
    });
    toastSuccess("Berhasil menambahkan user.");
    setIsOpen(false);
    return;
  };

  const rmvUser = () => {
    dispatch(addUser(0));
    setSelected({
      user_id: 0,
      name: "",
      email: "",
    });
    return;
  };

  const sendQ = async () => {
    setIsLoading(true);
    try {
      const payload = {
        keyword: keywords,
      };
      const product = await ApiClient.post("user/search", payload).then(
        (res) => {
          return res.data;
        }
      );
      setDatas(product.result);
      setIsLoading(false);
      return;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      return;
    }
  };

  const handleClick = (event) => {
    setKeywords(event.target.value);
    if (isOpen === false) {
      setIsOpen(!isOpen);
    }
    return;
  };

  useEffect(() => {
    if (keywords === "") {
      setIsOpen(false);
      return;
    }
    sendQ();
    return;
  }, [keywords]);

  // sequence search bar, type "" setloading false popover false
  // keyword on set true

  return (
    <React.Fragment>
      {selected.user_id !== 0 ? (
        <Paper
          sx={{
            width: "100%",
            height: "6svh",
            display: "flex",
            alignItems: "center",
            padding: "0.75em 1vw",
          }}
        >
          <Typography sx={{...H5style}}>{selected.name}</Typography>
          <Button onClick={() => rmvUser()} variant="text" sx={{...LabelStyle, color: '#ff0000', marginLeft: 'auto'}}>hapus</Button>
        </Paper>
      ) : (
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
            value={keywords}
            onChange={(e) => handleClick(e)}
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
      )}
      {isOpen ? (
        <Paper
          elevation={5}
          sx={{
            position: "absolute",
            top: "35%",
            zIndex: "1500",
            width: "350px",
            height: "350px",
            display: "flex",
            flexDirection: "column",
            padding: "1vw",
            gap: "10px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ ...H5style, textAlign: "center", marginBottom: "auto" }}
          >
            Pilih User
          </Typography>
          <div
            style={{
              display: "flex",
              width: "100%",
              overflow: "scroll",
              height: "250px",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
            }}
          >
            {isLoading ? (
              "Loading..."
            ) : datas.length === 0 ? (
              <Typography sx={{ ...H5style }}>User tidak ditemukan.</Typography>
            ) : (
              datas.map((item) => {
                return (
                  <Button
                    key={item.id}
                    variant="outlined"
                    sx={{
                      width: "90%",
                      height: "80px",
                      display: "flex",
                      minHeight: "80px",
                      padding: "10px 1vw",
                      gap: "1vw",
                      justifyContent: "flex-start",
                    }}
                    onClick={() => selectUser(item.id, item.name, item.email)}
                  >
                    <Avatar
                      src={item.url}
                      sx={{
                        width: 48,
                        height: 48,
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "start",
                      }}
                    >
                      <Typography
                        variant="body"
                        sx={{
                          ...H5style,
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography variant="body" sx={{ ...LabelStyle2 }}>
                        {item.email}
                      </Typography>
                    </div>
                  </Button>
                );
              })
            )}
          </div>
          <Button
            variant="text"
            size="small"
            sx={{ ...LabelStyle, marginTop: "auto" }}
            onClick={() => setIsOpen(false)}
          >
            cancel
          </Button>
        </Paper>
      ) : null}
    </React.Fragment>
  );
};

export default SearchPopUser;
