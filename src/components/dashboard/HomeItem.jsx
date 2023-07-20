import { Button, Card, Divider, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  H5style,
  LabelStyle2,
  MetaStyle,
  MetaStyle2,
  MetaStyle3,
} from "../../utils/constants";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

const HomeItem = ({ ind }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: "400px",
        height: "250px",
        display: "flex",
        flexDirection: "column",
        padding: "1.5vw",
      }}
    >
      <div style={MetaStyle}>
        <div style={MetaStyle3}>
          <Typography variant="h6" sx={{...LabelStyle2, width: '100%'}}>
            Order no.
          </Typography>
          <Typography
            sx={{
              width: "100%",
              fontFamily: "Signika Negative, sans-serif",
              fontWeight: "600",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {ind}
          </Typography>
        </div>
        <Typography variant="h6" sx={H5style}>
          Approval
        </Typography>
      </div>
      <div style={MetaStyle3}>
        <div style={MetaStyle2}>
          <Typography sx={LabelStyle2}>Penerima</Typography>
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
          081234567890
        </Typography>
      </div>
      <Divider sx={{ margin: "2% 0" }} />
      <div style={MetaStyle3}>
        <div style={MetaStyle2}>
          <Typography sx={LabelStyle2}>User</Typography>
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
          Noobmaster69
        </Typography>
      </div>
      <div style={MetaStyle3}>
        <div style={MetaStyle2}>
          <Typography sx={LabelStyle2}>Pembayaran</Typography>
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
          Transfer Bank
        </Typography>
      </div>
      <div style={{ ...MetaStyle, marginTop: "auto", marginBottom: "5%" }}>
        <Typography variant="h5" sx={H5style}>
          Total
        </Typography>
        <Typography variant="h5" sx={H5style}>
          Rp. 53,000
        </Typography>
      </div>
      <div style={{ ...MetaStyle }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <AccessTimeRoundedIcon sx={{ fontSize: "0.9em" }} />
          <Typography
            variant="body"
            sx={{
              fontWeight: "400",
              fontStyle: "italic",
              fontSize: "0.9em",
              color: "grey",
            }}
          >
            14 June 2023
          </Typography>
        </div>
        <Button
          variant="contained"
          size="small"
          sx={{
            width: "30%",
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "600",
          }}
          onClick={() => navigate(`/dashboard/orders/${ind}`)}
        >
          Lihat
        </Button>
      </div>
    </Card>
  );
};

export default HomeItem;
