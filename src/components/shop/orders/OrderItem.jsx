import { Button, Card, Divider, Grow, Typography } from "@mui/material";
import React from "react";
import {
  H5style,
  LabelStyle,
  LabelStyle2,
  MetaStyle,
  SideNoteStyle,
} from "../../../utils/constants";
import { useNavigate } from "react-router-dom";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

const OrderItem = ({ ind, spill }) => {
  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={ind * 100}>
      <Card
        sx={{
          width: "300px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          padding: "1vw",
        }}
        elevation={4}
      >
        <div style={MetaStyle}>
          <Typography variant="h6" sx={H5style}>
            Total :
          </Typography>
          <Typography variant="h6" sx={{ ...H5style, marginLeft: "10%" }}>
            Rp. 53,000
          </Typography>
        </div>
        <Divider sx={{ margin: "2%" }} />
        <div style={{ ...MetaStyle, padding: "0 5px" }}>
          <Typography variant="body" sx={LabelStyle2}>
            Order No: {ind}
          </Typography>
          <Typography variant="body" sx={H5style}>
            DELIVERING
          </Typography>
        </div>
        <div style={{ ...MetaStyle, padding: "0 5px" }}>
          <Typography variant="body" sx={LabelStyle2}>
            Penerima
          </Typography>
          <Typography variant="body" sx={H5style}>
            081234567890
          </Typography>
        </div>
        <div style={{ ...MetaStyle, padding: "0 5px" }}>
          <Typography variant="body" sx={LabelStyle2}>
            jumlah item
          </Typography>
          <Typography variant="body" sx={H5style}>
            53 botol
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
          <Typography sx={{ ...SideNoteStyle }}>14 Juni 2023</Typography>
          <Button
            variant="text"
            sx={{
              minWidth: "20px",
              ...LabelStyle,
              color: "#ff0000",
              marginLeft: "auto",
            }}
          >
            Delete
          </Button>
          <Divider orientation="vertical" />
          <Button
            size="medium"
            variant="text"
            sx={{
              fontFamily: "Signika Negative, sans-serif",
              fontWeight: "700",
              width: "50px",
              padding: "5px 0",
            }}
            onClick={() => spill()}
          >
            Lihat
          </Button>
        </div>
      </Card>
    </Grow>
  );
};

export default OrderItem;
