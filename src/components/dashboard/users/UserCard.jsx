import { Avatar, Button, Card, Divider, Grow, Typography } from "@mui/material";
import React from "react";
import {
  AvaSize,
  H5style,
  LabelStyle,
  LabelStyle2,
  SideNoteStyle,
} from "../../../utils/constants";
import Pagani from "../../../assets/pagani.jpg";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

const UserCard = ({ ind }) => {
  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={ind ? ind * 100 : 100}>
      <Card
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: "300px",
          height: "425px",
          padding: "1vw",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
          <AccessTimeRoundedIcon sx={SideNoteStyle} />
          <Typography sx={{ ...SideNoteStyle, marginLeft: "3%" }}>
            14 juni 2023
          </Typography>
        </div>
        <Avatar
          src={Pagani}
          sx={{
            height: AvaSize.profile,
            width: AvaSize.profile,
            margin: "0.5vw 0",
            boxShadow: "1px 1px 5px 1px rgba(0,0,0,0.4)",
          }}
        />
        <Typography variant="h6" sx={H5style}>
          Paganini
        </Typography>
        <Typography variant="body" sx={SideNoteStyle}>
          pagani@gmail.com
        </Typography>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            margin: "10px 0",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={H5style}>
              3
            </Typography>
            <Typography variant="body" sx={H5style}>
              pesanan aktif
            </Typography>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={{ ...H5style, color: "#00ff00" }}>
              17
            </Typography>
            <Typography variant="body" sx={H5style}>
              pesanan selesai
            </Typography>
          </div>
        </div>
        <Divider sx={{ width: '90%', margin: '3% 0'}}/>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px 1vw",
            width: "100%",
          }}
        >
          <Typography
            variant="body"
            sx={{
              ...LabelStyle2,
              width: "100%",
              textAlign: 'center'
            }}
          >
            081234567890
          </Typography>
          <Typography
            variant="body"
            sx={{
              ...LabelStyle2,
              width: "100%",
              textAlign: 'center'
            }}
          >
            jl. Suyudono Selatan no. 51, Jakarta Utara, Jakarta
          </Typography>
        </div>
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "10%",
            gap: "0.5vw",
          }}
        >
          <Button
            sx={LabelStyle}
            startIcon={<BorderColorRoundedIcon sx={{ scale: "0.8" }} />}
          >
            Edit
          </Button>
          <Divider orientation="vertical" />
          <Button sx={{ ...LabelStyle, color: "#ff0000" }}>Delete</Button>
        </div>
      </Card>
    </Grow>
  );
};

export default UserCard;
