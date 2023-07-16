import { Avatar, Button, Card, Divider, Grow, Typography } from "@mui/material";
import React from "react";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { H4style, H5style, SideNoteStyle } from "../../../utils/constants";
import profi from "../../../assets/pagani.jpg";

const CartCard = ({ ind, spill }) => {
  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={ind * 100}>
      <Card
        sx={{
          width: "300px",
          height: "200px",
          padding: "10px 1vw",
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
            sx={{
              fontFamily: "Signika Negative, sans-serif",
              fontWeight: "600",
              marginLeft: "auto",
            }}
            onClick={() => spill()}
          >
            view
          </Button>
        </div>
        <Divider />
        <div
          style={{
            width: "100%",
            height: "100%",
            display: 'flex',
            flexDirection: 'column',
            padding: '0 5px'
          }}
        >
          <Typography sx={H5style}>info</Typography>
          <div
            style={{
              display: "flex",
              width: "100%",
              marginTop: "auto",
            }}
          >
          <Typography variant="body" sx={H5style}>total :</Typography>
            <Typography variant="body" sx={{ ...H5style, marginLeft: "auto" }}>
              Rp. 53,000
            </Typography>
          </div>
        </div>
        <div
          style={{
            marginTop: "auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "0 0 0 5px",
          }}
        >
          <AccessTimeRoundedIcon sx={SideNoteStyle} />
          <Typography sx={{ ...SideNoteStyle, marginLeft: "3%" }}>
            14 juni 2023
          </Typography>
          <Button variant="text" sx={{ minWidth: "20px", marginLeft: "auto" }}>
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

export default CartCard;
