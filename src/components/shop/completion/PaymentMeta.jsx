import React from "react";
import { H5style, MetaStyle, SideNoteStyle } from "../../../utils/constants";
import { Divider, Typography } from "@mui/material";

const PaymentMeta = ({ amount, variant, id, unit}) => {
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
          Rp {amount ? amount : 0},000
        </Typography>
      </div>
      <Divider />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "0",
        }}
      >
        <div style={MetaStyle}>
          <Typography variant="body" sx={H5style}>
            Order No.
          </Typography>
          <Typography variant="h6" sx={H5style}>
            0{id ? id : 0}
          </Typography>
        </div>
        <div style={MetaStyle}>
          <Typography variant="body" sx={H5style}>
            Variant Produk
          </Typography>
          <Typography variant="h6" sx={H5style}>
            {variant ? variant : 0}
          </Typography>
        </div>
        <div style={MetaStyle}>
          <Typography variant="body" sx={H5style}>
            Jumlah Produk
          </Typography>
          <Typography variant="h6" sx={H5style}>
            {unit? unit : 0}
          </Typography>
        </div>
        <div style={MetaStyle}>
          <Typography variant="body" sx={{...SideNoteStyle, marginLeft: 'auto', textAlign: 'right'}}>
            disarankan untuk melakukan pembayaran setelah biaya pengiriman tercetak
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PaymentMeta;
