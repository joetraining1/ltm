import { Button, Divider, InputBase, Paper, Typography } from "@mui/material";
import React from "react";
import { H5style } from "../../../utils/constants";
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Users = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "50svh",
        background: "#fff",
        width: "100%",
        gap: "1vw",
      }}
    >
      <Typography variant="h4" sx={{ ...H5style, marginBottom: "1%" }}>
        Kelola User aplikasi
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          gap: "1vw",
          height: "50px",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            width: "50%",
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
            placeholder="Temukan user.."
          />
          <Divider orientation="vertical" />
          <Button variant="text">
            <SearchRoundedIcon />
          </Button>
        </Paper>
        <Button
          variant="contained"
          sx={{
            width: "16%",
            height: "50px",
            fontFamily: "Signika Negative, sans-serif",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <PlusOneRoundedIcon />
          Tambah user
        </Button>
      </div>
    </div>
  );
};

export default Users;
