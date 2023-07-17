import { Button, Card, Divider, Grow, Typography } from "@mui/material";
import React from "react";
import { H5style, LabelStyle2, SideNoteStyle } from "../../../utils/constants";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

const PaymentCard = ({ title, dibuat, ind, desc, id }) => {
  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={ind * 100}>
      <Card
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          height: "200px",
          alignItems: "center",
          padding: "1vw",
        }}
      >
        <Typography variant="h5" style={H5style}>
          {title}
        </Typography>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            height: "60%",
            alignItems: "center",
          }}
        >
          <Typography variant="body" sx={{ ...LabelStyle2, textAlign: "left" }}>
            {desc}
          </Typography>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "auto",
          }}
        >
          <AccessTimeRoundedIcon sx={SideNoteStyle} />
          <Typography sx={{ ...SideNoteStyle }}>{dibuat}</Typography>
          <Button variant="text" sx={{ minWidth: "20px", marginLeft: "auto" }}>
            <EditRoundedIcon />
          </Button>
          <Divider orientation="vertical" />
          <Button variant="text" sx={{ minWidth: "20px" }}>
            <DeleteOutlineRoundedIcon sx={{ color: "#ff0000" }} />
          </Button>
        </div>
      </Card>
    </Grow>
  );
};

export default PaymentCard;
