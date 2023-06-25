import { Button, Card, Divider, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  DashMenu,
  H5style,
  iconStyle,
  menuItemStyle,
} from "../../utils/constants";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const DashBar = () => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: "350px",
        height: "fit-content",
        transition: "height 0.2s ease",
        padding: "1vw",
        display: "flex",
        flexDirection: "column",
        gap: "0.5vw",
        position: "relative",
      }}
      elevation={3}
      id="dashBar"
    >
      <Button
        size="small"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "0",
          width: "100%",
        }}
      >
        <MoreVertRoundedIcon sx={{ color: "#262626" }} />
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "600",
            color: "#262626",
            cursor: "pointer",
          }}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard Menu
        </Typography>
      </Button>
      <Divider />
      {DashMenu.map((item, index) => {
        return (
          <NavLink key={item.id} to={item.to} active="active-link" style={({ isActive }) => {
            return {
              '& button': {
                background: isActive ? '#262626' : '#fff' 
              }
            }
          }}>
            <Button
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                gap: "1vw",
                alignItems: "center",
              }}
              className="buttons"
            >
              <item.icon sx={iconStyle} />
              <Typography variant="h6" sx={menuItemStyle}>
                {item.title}
              </Typography>
            </Button>
          </NavLink>
        );
      })}
    </Card>
  );
};

export default DashBar;
