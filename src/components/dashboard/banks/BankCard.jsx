import { Button, Card, Divider, Grow, Typography } from "@mui/material";
import React from "react";
import BCA from "../../../assets/bca.png";
import { H5style, SideNoteStyle } from "../../../utils/constants";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

const BankCard = () => {
  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={100}>
      <Card
      elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: "300px",
          height: "300px",
          alignItems: "center",
        }}
      >
        <img
          src={BCA}
          style={{
            objectFit: "cover",
            width: "90%",
            margin: "40px 0 20px 0",
          }}
        />
        <Divider />
        <div
          style={{
            height: "100%",
            width: "100%",
            padding: "1vw",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <div style={{ display: "flex", width: "90%" }}>
              <Typography variant="body" sx={H5style}>
                Acronim
              </Typography>
              <Typography
                variant="body"
                sx={{ ...H5style, marginLeft: "auto" }}
              >
                :
              </Typography>
            </div>
            <Typography
              variant="body"
              sx={{
                ...H5style,
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              BCA
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <div style={{ display: "flex", width: "90%" }}>
              <Typography variant="body" sx={H5style}>
                Nama Bank
              </Typography>
              <Typography
                variant="body"
                sx={{ ...H5style, marginLeft: "auto" }}
              >
                :
              </Typography>
            </div>
            <Typography
              variant="body"
              sx={{
                ...H5style,
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              Bank Central Asia
            </Typography>
          </div>
          </div>
          <div
            style={{
              marginTop: "auto",
              width: "100%",
              display: "flex",
              alignItems: "center",
              padding: "10px 1vw",
            }}
          >
            <AccessTimeRoundedIcon sx={SideNoteStyle} />
            <Typography sx={{ ...SideNoteStyle, marginLeft: "3%" }}>
              14 juni 2023
            </Typography>
            <Button
              variant="text"
              sx={{ minWidth: "20px", marginLeft: "auto" }}
            >
              <EditRoundedIcon />
            </Button>
            <Button variant="text" sx={{ minWidth: "20px" }}>
              <DeleteOutlineRoundedIcon sx={{ color: "#ff0000" }} />
            </Button>
          </div>
      </Card>
    </Grow>
  );
};

export default BankCard;
