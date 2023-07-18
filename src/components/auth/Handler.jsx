import React, { useState } from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import {
  Avatar,
  Button,
  Divider,
  Paper,
  Popover,
  Typography,
} from "@mui/material";
import Login from "./Login";
import Register from "./Register";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  AvaSize,
  H5style,
  LabelStyle,
  SideNoteStyle,
  iconStyle,
  menuItemStyle,
} from "../../utils/constants";
import Pagani from "../../assets/pagani.jpg";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import DvrRoundedIcon from "@mui/icons-material/DvrRounded";

import { useNavigate } from "react-router-dom";

const Handler = () => {
  const [anchorEL, setAnchorEl] = useState(null);
  const [condition, setCondition] = useState(true);
  const [mode, setMode] = useState("Login");

  const navigate = useNavigate();

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
      {condition ? (
        <Button onClick={handleClick}>
          <Avatar
            src={Pagani}
            sx={{
              width: AvaSize.navPic,
              height: AvaSize.navPic,
              boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.4)",
            }}
          />
        </Button>
      ) : (
        <Button variant="text" onClick={handleClick}>
          <AccountCircleRoundedIcon />
        </Button>
      )}
      <Popover
        id={id}
        open={open}
        onClose={handleClose}
        anchorEl={anchorEL}
        anchorOrigin={{
          vertical: 70,
          horizontal: -200,
        }}
      >
        {condition ? (
          <Paper
            sx={{
              width: "250px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              padding: "1vw 1vw 0.5vw 1vw",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                gap: "1vw",
                justifyContent: "space-evenly",
                height: "15%",
              }}
            >
              <Avatar
                src={Pagani}
                sx={{ width: AvaSize.profPic, height: AvaSize.profPic }}
              />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography sx={H5style} variant="h6">
                  Paganini
                </Typography>
                <Typography sx={SideNoteStyle} variant="body">
                  pagani@gmail.com
                </Typography>
              </div>
            </div>
            <Divider sx={{ width: "100%", margin: "10% 0 5% 0" }} />
            <Button
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                gap: "1vw",
                alignItems: "center",
              }}
              onClick={() => navigate("/shop/profile")}
            >
              <PermIdentityRoundedIcon sx={iconStyle} />
              <Typography variant="body" sx={H5style}>
                Profile
              </Typography>
            </Button>
            <Button
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                gap: "1vw",
                alignItems: "center",
              }}
              onClick={() => navigate("/shop/orders")}
            >
              <DvrRoundedIcon sx={iconStyle} />
              <Typography variant="body" sx={H5style}>
                Pesanan
              </Typography>
            </Button>
            <Button
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                gap: "1vw",
                alignItems: "center",
              }}
              onClick={() => navigate("/shop/payment")}
            >
              <ReceiptLongRoundedIcon sx={iconStyle} />
              <Typography variant="body" sx={H5style}>
                Pesanan Tertunda
              </Typography>
            </Button>
            <Divider sx={{ width: "100%", margin: "auto 0 5% 0" }} />
            <Button
              sx={{
                ...LabelStyle,
                width: "35%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginLeft: "auto",
                color: "#ff0000",
              }}
              onClick={() => setCondition(false)}
            >
              Logout
            </Button>
          </Paper>
        ) : (
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
            <Typography
              variant="body"
              sx={{ ...LabelStyle, fontSize: "0.8em", textAlign: "center" }}
            >
              CV. Langgeng Tani Makmur <br />© Copyright 2023
            </Typography>
          </Paper>
        )}
      </Popover>
    </React.Fragment>
  );
};

export default Handler;
