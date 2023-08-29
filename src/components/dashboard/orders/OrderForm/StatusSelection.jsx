import React from "react";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import { H5style, LabelStyle, colorHex } from "../../../../utils/constants";
import { Divider, MenuItem, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import ApiClient from "../../../../services/ApiClient";
import { useDispatch } from "react-redux";
import { addStatus } from "../../../../redux/slices/adminOFSlice";

const StatusSelection = () => {
  const [errorMsg, setErrorMsg] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState([]);
  const [active, setActive] = useState({
    id: 0,
    title: "",
  });

  const dispatch = useDispatch()


  const getType = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get("status").then((res) => {
      return res.data;
    });
    setDatas(reqType.result);
    setIsLoading(false);
    return;
  };

  useEffect(() => {
    if (datas.length === 0) {
      getType()
      return;
    }
    return;
  }, []);

  const handleClick = (id, title) => {
    dispatch(addStatus(id))
    setActive({
      id: id,
      title: title,
    });
    return;
  };

  return (
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
        value={active.title}
        defaultValue={active.title}
        SelectProps={{
          MenuProps: {
            sx: {
              "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                height: datas.length > 4 ? "auto" : "150px",
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
        {datas?.map((item, index) => {
          return (
            <MenuItem
              key={item.id}
              value={item.title}
              sx={H5style}
              onClick={() => handleClick(item.id, item.title)}
            >
              {item.title}
            </MenuItem>
          );
        })}
      </TextField>
    </Paper>
  );
};

export default StatusSelection;
