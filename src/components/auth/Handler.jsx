import React, { useState } from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Button, Popover } from "@mui/material";
import Login from "./Login";
import Register from "./Register";

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
        anchorEl={anchorEL}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            sx: {
              width: "350px",
              height: mode === "Login" ? "400px" : "700px",
              transition: "height 0.2s ease",
            },
          },
        }}
      >
        {mode === "Login" ? (
          <Login setMode={() => setMode("Register")} />
        ) : null}
        {mode === "Register" ? (
          <Register setMode={() => setMode("Login")} />
        ) : null}
      </Popover>
    </React.Fragment>
  );
};

export default Handler;
