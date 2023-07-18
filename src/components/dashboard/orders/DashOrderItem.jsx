import { Avatar, Button, Card, Divider, Grow, Typography } from "@mui/material";
import React from "react";
import {
  H5style,
  LabelStyle,
  LabelStyle2,
  SideNoteStyle,
} from "../../../utils/constants";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import profi from "../../../assets/pagani.jpg";

const DashOrderItem = ({ id, ind, spill, actionEdit }) => {
  return (
    <Grow timeout={ind * 100} in={true} unmountOnExit mountOnEnter>
      <Card
        sx={{
          width: "300px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          padding: "1vw 1vw 10px 1vw",
        }}
        elevation={3}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ height: 36, width: 36 }} src={profi} />
          <div style={{ marginLeft: "10px" }}>
            <Typography variant="body" sx={H5style}>
              Paganini
            </Typography>
            <Typography variant="body2" sx={SideNoteStyle}>
              pagani@gmail.com
            </Typography>
          </div>
          <Button
            variant="text"
            size="medium"
            sx={{
              fontFamily: "Signika Negative, sans-serif",
              fontWeight: "700",
              marginLeft: "auto",
              paddingRight: '0'
            }}
            onClick={() => spill()}
          >
            Lihat
          </Button>
        </div>
        <Divider sx={{ marginTop: "3%"}}/>
        <div style={{ display: "flex", width: "100%", marginTop: "2%" }}>
          <Typography variant="body" sx={LabelStyle2}>
            Order No. {id}
          </Typography>
          <Typography variant="body" sx={{ ...H5style, marginLeft: "auto" }}>
            DELIVERING
          </Typography>
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <Typography variant="body" sx={LabelStyle2}>
            Pembayaran
          </Typography>
          <Typography variant="body" sx={{ ...H5style, marginLeft: "auto" }}>
            Transfer Bank
          </Typography>
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <Typography variant="body" sx={LabelStyle2}>
            Total
          </Typography>
          <Typography variant="body" sx={{ ...H5style, marginLeft: "auto" }}>
            Rp 53,000
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            marginTop: "auto",
          }}
        >
          <AccessTimeRoundedIcon sx={SideNoteStyle} />
          <Typography sx={{ ...SideNoteStyle, marginLeft: "3%" }}>
            14 juni 2023
          </Typography>
          <Button variant="text" sx={{ marginLeft: "auto", ...LabelStyle }} onClick={() => actionEdit()}>
            Edit
          </Button>
          <Divider orientation="vertical" sx={{ height: '25px'}}/> 
          <Button
            variant="text"
            sx={{ color: "#FF0000", ...LabelStyle, paddingRight: 0 }}
          >
            Delete
          </Button>
        </div>
      </Card>
    </Grow>
  );
};

export default DashOrderItem;
