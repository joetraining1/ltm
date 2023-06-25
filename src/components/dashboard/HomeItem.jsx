import { Button, Card, Divider, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { H5style, MetaStyle, MetaStyle2 } from "../../utils/constants";
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
        <div style={MetaStyle}>
          <Typography variant="h6" sx={H5style}>
            Order No:
          </Typography>
          <Typography variant="h6" sx={H5style}>
            {ind}
          </Typography>
        </div>
        <Typography variant="h6" sx={H5style}>
          Approval
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "55%",
        }}
      >
        <Typography variant="body" sx={H5style}>
          Penerima :
        </Typography>
        <Typography variant="body" sx={H5style}>
          081234567890
        </Typography>
      </div>
      <Divider sx={{ margin: "2% 0" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body" sx={H5style}>
          User :
        </Typography>
        <Typography variant="body" sx={H5style}>
          noobmaster96
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
          onClick={() => navigate("/dashboard/orders")}
        >
          Lihat
        </Button>
      </div>
    </Card>
  );
};

export default HomeItem;
