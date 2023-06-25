import { Button, Typography } from "@mui/material";
import React from "react";
import {
  H5style,
  LabelStyle,
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

const ProductCard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "300px",
        width: "220px",
        alignItems: "center",
      }}
    >
      <img
        src={`${Bottle}`}
        style={{ objectFit: "cover", width: "30%", placeSelf: "center" }}
      />
      <Typography variant="h6" sx={H5style}>
        Strawberry Variant
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <div style={MetaStyle3}>
          <div style={MetaStyle2}>
            <Typography sx={LabelStyle}>Harga</Typography>
            <Typography sx={LabelStyle}>:</Typography>
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
            <Typography sx={LabelStyle}>Stock</Typography>
            <Typography sx={LabelStyle}>:</Typography>
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
        <div style={{ ...MetaStyle3, marginTop: "auto" }}>
          <div style={MetaStyle4}>
            <AccessTimeRoundedIcon sx={SideNoteStyle} />
            <Typography sx={SideNoteStyle}>14 juni 2023</Typography>
          </div>
          <div style={{ display: "flex", justifyContent: 'flex-end', alignItems: 'center' }}>
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
  );
};

export default ProductCard;
