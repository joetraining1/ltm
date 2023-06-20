import React from "react";
import { H5style, MetaStyle } from "../../../utils/constants";
import { Divider, Typography } from "@mui/material";

const PaymentMeta = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "40%",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div style={MetaStyle}>
        <Typography variant="h5" sx={H5style}>
          Total
        </Typography>
        <Typography variant="h5" sx={H5style}>
          Rp. 53,000
        </Typography>
      </div>
      <Divider />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '0'
      }}>
        <div style={MetaStyle}>
          <Typography variant="body" sx={H5style}>
            Variant Produk
          </Typography>
          <Typography variant="h6" sx={H5style}>
            2 
          </Typography>
        </div>
        <div style={MetaStyle}>
          <Typography variant="body" sx={H5style}>
            Jumlah Produk
          </Typography>
          <Typography variant="h6" sx={H5style}>
            5
          </Typography>
        </div>
        <div style={MetaStyle}>
          <Typography variant="body" sx={H5style}>
            Harga per variant
          </Typography>
          <Typography variant="h6" sx={H5style}>
            Rp. 7,000
          </Typography>
        </div>
        <div style={MetaStyle}>
          <Typography variant="body" sx={H5style}>
            Biaya Pengiriman
          </Typography>
          <Typography variant="h6" sx={H5style}>
            Rp. 18,000
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PaymentMeta;
