import React, { useState } from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Button, Paper, Popover, Typography } from "@mui/material";
import Login from "./Login";
import Register from "./Register";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { LabelStyle } from "../../utils/constants";

const Handler = () => {
  const [anchorEL, setAnchorEl] = useState(null);
  const [mode, setMode] = useState("Login");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEL);
  const id = open ? "be-popin" : undefined;

  return (
    <React.Fragment>
      <Button variant="text" onClick={handleClick}>
        <AccountCircleRoundedIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        onClose={handleClose}
        anchorEl={anchorEL}
        anchorOrigin={{
          vertical: 40,
          horizontal: -200,
        }}
      >
        <Paper
          sx={{
            width: "350px",
            height: mode === "Login" ? "380px" : "480px",
            transition: "height 0.2s ease",
            padding: "2vw",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {mode === "Login" ? (
            <Login setMode={() => setMode("Register")} />
          ) : null}
          {mode === "Register" ? (
            <Register setMode={() => setMode("Login")} />
          ) : null}
          <Typography variant="body" sx={{ ...LabelStyle, fontSize: "0.8em", textAlign: 'center' }}>
            CV. Langgeng Tani Makmur <br />© Copyright 2023
          </Typography>
        </Paper>
      </Popover>
    </React.Fragment>
  );
};

export default Handler;
