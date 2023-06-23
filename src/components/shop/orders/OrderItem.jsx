import { Button, Card, Grow, Typography } from "@mui/material";
import React from "react";
import { H5style, MetaStyle } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";

const OrderItem = ({ ind, spill }) => {

  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={ind * 100}>
      <Card
        sx={{
          width: "250px",
          height: "150px",
          display: "flex",
          flexDirection: "column",
          padding: "1vw",
        }}
        elevation={4}
      >
        <div style={MetaStyle}>
          <Typography variant="body" sx={H5style}>
            Order No: {ind}
          </Typography>
          <Typography variant="body" sx={H5style}>
            DELIVERING
          </Typography>
        </div>
        <div style={MetaStyle}>
          <Typography variant="body" sx={H5style}>
            Total 
          </Typography>
          <Typography variant="body" sx={H5style}>
            Rp. 53,000
          </Typography>
        </div>
        <div style={MetaStyle}>
          <Typography variant="body" sx={H5style}>
            Penerima 
          </Typography>
          <Typography variant="body" sx={H5style}>
            081234567890
          </Typography>
        </div>
        <Button size="small" variant="contained" sx={{ marginTop: 'auto', fontFamily: 'Signika Negative, sans-serif'}} onClick={() => spill()}>
        Lihat
        </Button>
      </Card>
    </Grow>
  );
};

export default OrderItem;
