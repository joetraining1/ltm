import { Button, Card, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { H5style, MetaStyle } from "../../utils/constants";

const HomeItem = ({ ind }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: "300px",
        height: "250px",
        display: "flex",
        flexDirection: "column",
        padding: "1.5vw",
      }}
    >
      <div style={MetaStyle}>
        <Typography variant="h6" sx={H5style}>
          Order No: 
        </Typography>
        <Typography variant="h6" sx={H5style}>
          {ind}
        </Typography>
      </div>
      <div style={MetaStyle}>
        <Typography variant="h6" sx={H5style}>
          Status : 
        </Typography>
        <Typography variant="h6" sx={H5style}>
          Approval
        </Typography>
      </div>
      <div style={MetaStyle}>
        <Typography variant="h6" sx={H5style}>
          Total
        </Typography>
        <Typography variant="h6" sx={H5style}>
          Rp. 53,000
        </Typography>
      </div>
      <div style={MetaStyle}>
        <Typography variant="h6" sx={H5style}>
          Penerima
        </Typography>
        <Typography variant="h6" sx={H5style}>
          081234567890
        </Typography>
      </div>
      <Button
        variant="contained"
        sx={{
          width: "100%",
          marginTop: "auto",
          fontFamily: "Signika Negative, sans-serif",
          fontWeight: "600",
        }}
        onClick={() => navigate("/dashboard/orders")}
      >
        Lihat
      </Button>
    </Card>
  );
};

export default HomeItem;
