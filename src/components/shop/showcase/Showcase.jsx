import {
  Button,
  Divider,
  InputBase,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import {
  FilterProduk,
  H4style,
  H5style,
  MetaStyle,
} from "../../../utils/constants";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Cart from "../cart/Cart";
import ShowcaseCard from "./ShowcaseCard";
import { useState } from "react";
import ApiClient from "../../../services/ApiClient";

const Showcase = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getType = async () => {
    setIsLoading(true)
    const reqType = await ApiClient.get('type').then((res) => {
      return res.data
    })
    setDatas(reqType.result)
    setIsLoading(false)
    return
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "fit-content",
        width: "100%",
        gap: "1vw",
      }}
    >
      <Typography variant="h4" sx={H4style}>
        All items
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-evenly",
          gap: "1vw",
          height: "50px",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            width: "100%",
            padding: "10px 1vw",
            height: "100%",
            justifyContent: "space-evenly",
            gap: "15px",
          }}
          elevation={1}
        >
          <InputBase
            sx={{
              width: "100%",
              height: "100%",
            }}
            inputProps={{
              sx: {
                fontFamily: "Signika Negative, sans-serif",
                fontWeight: "600",
                color: "#262626",
              },
            }}
            placeholder="Temukan produk.."
          />
          <Divider orientation="vertical" />
          <Button variant="text">
            <SearchRoundedIcon />
          </Button>
        </Paper>
        <Paper
          sx={{
            width: "30%",
            height: "53px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            label="filter"
            select
            sx={{ width: "100%" }}
            InputProps={{
              sx: {
                height: "100%",
                fontFamily: "Signika Negative, sans-serif",
                fontWeight: "600",
                minHeight: "10px",
                "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  border: "none",
                  outline: "none",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                fontFamily: "Signika Negative, sans-serif",
                fontWeight: "600",
                top: '18%',
                fontSize: '1.1em'
              },
            }}
            defaultValue="Susu Pasteurisasi"
          >
            {FilterProduk.map((item, index) => {
              return (
                <MenuItem key={item.id} value={item.value} sx={H5style}>
                  {item.value}
                </MenuItem>
              );
            })}
          </TextField>
        </Paper>
        <Cart mode="two" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "fit-content",
          gap: "1vw",
        }}
      >
        <Typography variant="h5" sx={H5style}>
          Susu Pasteurisasi
        </Typography>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            width: "100%",
            gap: "1vw",
          }}
        >
          <ShowcaseCard />
          <ShowcaseCard />
          <ShowcaseCard />
          <ShowcaseCard />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "fit-content",
          gap: "1vw",
        }}
      >
        <Typography variant="h5" sx={H5style}>
          Yoghurt
        </Typography>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            width: "100%",
            gap: "1vw",
          }}
        >
          <ShowcaseCard />
          <ShowcaseCard />
          <ShowcaseCard />
          <ShowcaseCard />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
