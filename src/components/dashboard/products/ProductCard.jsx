import { Button, Divider, Grow, Typography } from "@mui/material";
import React from "react";
import {
  H5style,
  LabelStyle,
  LabelStyle2,
  MetaStyle,
  MetaStyle2,
  MetaStyle3,
  MetaStyle4,
  SideNoteStyle,
} from "../../../utils/constants";
import Bottle from "../../../assets/milk2.png";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

const ProductCard = ({ ind }) => {
  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={ind * 100}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "400px",
          width: "210px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60%",
            width: "100%",
          }}
        >
          <img src={`${Bottle}`} style={{ objectFit: "cover", width: "32%" }} />
        </div>
        <Typography variant="h6" sx={H5style}>
          Strawberry Variant
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "50%",
          }}
        >
          <div style={MetaStyle3}>
            <div style={MetaStyle2}>
              <Typography sx={LabelStyle2}>Harga</Typography>
              <Typography sx={LabelStyle2}>:</Typography>
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
              Rp. 7,000
            </Typography>
          </div>
          <div style={MetaStyle3}>
            <div style={MetaStyle2}>
              <Typography sx={LabelStyle2}>Stock</Typography>
              <Typography sx={LabelStyle2}>:</Typography>
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
              1000 unit
            </Typography>
          </div>
          <Divider sx={{ margin: "5px 0" }} />
          <Typography variant="body" sx={{ width: "100%", ...LabelStyle2, textAlign: 'center' }}>
            Susu Pasteurisasi dengan rasa buah strawberry
          </Typography>
          <div style={{ ...MetaStyle3, marginTop: "auto" }}>
            <div style={MetaStyle4}>
              <AccessTimeRoundedIcon sx={SideNoteStyle} />
              <Typography sx={SideNoteStyle}>14 juni 2023</Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Button
                variant="text"
                sx={{
                  fontFamily: "Signika Negative, sans-serif",
                  fontWeight: "600",
                  padding: "0",
                  minWidth: "40px",
                  width: "auto",
                }}
              >
                <EditRoundedIcon />
              </Button>
              <Divider orientation="vertical" sx={{ height: "30px" }} />
              <Button
                variant="text"
                sx={{
                  color: "#FF0000",
                  padding: "0",
                  minWidth: "40px",
                  width: "auto",
                }}
              >
                <DeleteOutlineRoundedIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Grow>
  );
};

export default ProductCard;
