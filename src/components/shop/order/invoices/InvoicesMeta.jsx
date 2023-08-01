import React from "react";
import {
  H5style,
  LabelStyle2,
  MetaStyle2,
  MetaStyle3,
  MetaStyle5,
  MetaValue,
  MetaValue2,
} from "../../../../utils/constants";
import { Typography } from "@mui/material";

const InvoicesMeta = ({
  id,
  dibuat,
  metode,
  bank,
  norek,
  cp,
  alamat,
  variant,
  unit,
  amount,
  shipping,
  total,
}) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        gap: "1vw",
        alignItems: "center",
      }}
    >
      <div style={MetaStyle5}>
        <div style={MetaStyle3}>
          <div style={MetaStyle2}>
            <Typography variant="body" sx={LabelStyle2}>
              Tanggal Pesanan
            </Typography>
            <Typography variant="body" sx={LabelStyle2}>
              :
            </Typography>
          </div>
          <Typography variant="body" sx={MetaValue}>
            {dibuat?.slice(0,10)}
          </Typography>
        </div>
        <div style={MetaStyle3}>
          <div style={MetaStyle2}>
            <Typography variant="body" sx={LabelStyle2}>
              Metode Pembayaran
            </Typography>
            <Typography variant="body" sx={LabelStyle2}>
              :
            </Typography>
          </div>
          <Typography variant="body" sx={MetaValue}>
            {metode}
          </Typography>
        </div>
        <div style={MetaStyle3}>
          <div style={MetaStyle2}>
            <Typography variant="body" sx={LabelStyle2}>
              Tujuan transfer
            </Typography>
            <Typography variant="body" sx={LabelStyle2}>
              :
            </Typography>
          </div>
          <Typography variant="body" sx={MetaValue}>
            {bank} - {norek}
          </Typography>
        </div>
        <div style={MetaStyle3}>
          <div style={MetaStyle2}>
            <Typography variant="body" sx={LabelStyle2}>
              Nomor Penerima
            </Typography>
            <Typography variant="body" sx={LabelStyle2}>
              :
            </Typography>
          </div>
          <Typography variant="body" sx={MetaValue}>
            {cp}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "start",
          }}
        >
          <div style={MetaStyle2}>
            <Typography variant="body" sx={LabelStyle2}>
              Alamat Penerima
            </Typography>
            <Typography variant="body" sx={LabelStyle2}>
              :
            </Typography>
          </div>
          <Typography variant="body" sx={MetaValue}>
            {alamat}
          </Typography>
        </div>
      </div>
      <div style={MetaStyle5}>
        <div style={MetaStyle3}>
          <div style={MetaStyle2}>
            <Typography variant="body" sx={LabelStyle2}>
              Jumlah variant
            </Typography>
            <Typography variant="body" sx={LabelStyle2}>
              :
            </Typography>
          </div>
          <Typography variant="body" sx={MetaValue}>
            {variant ? variant : 0} produk
          </Typography>
        </div>
        <div style={MetaStyle3}>
          <div style={MetaStyle2}>
            <Typography variant="body" sx={LabelStyle2}>
              Jumlah produk
            </Typography>
            <Typography variant="body" sx={LabelStyle2}>
              :
            </Typography>
          </div>
          <Typography variant="body" sx={MetaValue}>
            {unit ? unit : 0} produk
          </Typography>
        </div>
        <div style={MetaStyle3}>
          <div style={MetaStyle2}>
            <Typography variant="body" sx={LabelStyle2}>
              Total produk
            </Typography>
            <Typography variant="body" sx={LabelStyle2}>
              :
            </Typography>
          </div>
          <Typography variant="body" sx={MetaValue}>
            Rp {amount ? amount : 0},000
          </Typography>
        </div>
        <div style={MetaStyle3}>
          <div style={MetaStyle2}>
            <Typography variant="body" sx={LabelStyle2}>
              Pengiriman
            </Typography>
            <Typography variant="body" sx={LabelStyle2}>
              :
            </Typography>
          </div>
          <Typography variant="body" sx={MetaValue}>
            Rp {shipping ? shipping : 0},000
          </Typography>
        </div>
        <div style={MetaStyle3}>
          <div style={MetaStyle2}>
            <Typography variant="body" sx={LabelStyle2}>
              Total Harga
            </Typography>
            <Typography variant="body" sx={LabelStyle2}>
              :
            </Typography>
          </div>
          <Typography variant="h6" sx={MetaValue}>
            Rp {total ? total : 0},000
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default InvoicesMeta;
