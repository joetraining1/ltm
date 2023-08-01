import { Avatar, Button, Card, Divider, Grow, Typography } from "@mui/material";
import React from "react";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import {
  H4style,
  H5style,
  LabelStyle,
  LabelStyle2,
  MetaStyle2,
  MetaStyle3,
  SideNoteStyle,
} from "../../../utils/constants";
import profi from "../../../assets/pagani.jpg";

const CartCard = ({ ind, spill, id, vari, uni, amou, dibuat, uurl, uname, uemail }) => {
  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={ind * 100}>
      <Card
        sx={{
          width: "310px",
          height: "200px",
          padding: "1vw",
          gap: "5px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ height: 36, width: 36 }} src={uurl} />
          <div style={{ marginLeft: "10px" }}>
            <Typography variant="body" sx={H5style}>
              {uname}
            </Typography>
            <Typography variant="body2" sx={SideNoteStyle}>
              {uemail}
            </Typography>
          </div>
        </div>
        <Divider />
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "0 5px",
            marginTop: '2%'
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            <Typography variant="body" sx={LabelStyle2}>jumlah produk</Typography>
            <Typography variant="body" sx={LabelStyle}>{vari ? vari : 0} produk</Typography>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            <Typography variant="body" sx={LabelStyle2}>jumlah unit</Typography>
            <Typography variant="body" sx={LabelStyle}>{uni ? uni : 0} unit</Typography>
          </div>
          <div style={{...MetaStyle3, marginTop: 'auto'}}>
            <div style={MetaStyle2}>
              <Typography sx={LabelStyle2}>Total</Typography>
            </div>
            <Typography
              sx={{
                width: "100%",
                fontFamily: "Signika Negative, sans-serif",
                fontWeight: "600",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              Rp. {amou ? amou : 0},000
            </Typography>
          </div>
        </div>
        <div
          style={{
            marginTop: "auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: 'flex-end',
            paddingRight: '5px'
          }}
        >
          <AccessTimeRoundedIcon sx={SideNoteStyle} />
          <Typography sx={{ ...SideNoteStyle, marginLeft: '3%'}}>
            {dibuat}
          </Typography>
        </div>
      </Card>
    </Grow>
  );
};

export default CartCard;
