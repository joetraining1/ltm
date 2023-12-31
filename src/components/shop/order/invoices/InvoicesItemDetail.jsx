import {
  Button,
  Card,
  Divider,
  Grow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Bottle from "../../../../assets/milk2.png";
import {
  H5style,
  LabelStyle,
  MetaStyle,
  MetaStyle2,
} from "../../../../utils/constants";
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

const InvoiceItemDetail = ({
  ind,
  qty,
  produk,
  price,
  kategori,
  amount,
  url,
}) => {
  const [countQty, setQty] = useState(0);

  const qtyFilter = (theQty) => {
    return setQty();
  };
  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={ind * 150}>
      <Card
        sx={{
          display: "flex",
          width: "100%",
          height: "200px",
          padding: "1vw 2vw",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "1.5vw",
        }}
        elevation={3}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
            height: "auto",
          }}
        >
          <img
            src={`${url}`}
            style={{
              objectFit: "cover",
              width: "50%",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Typography variant="h6" sx={H5style}>
            {kategori}
          </Typography>
          <Divider />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Typography variant="h5" sx={H5style}>
              {produk}
            </Typography>
            <Typography variant="h6" sx={H5style}>
              Rp. {price ? price : 0},000
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "end",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <div style={MetaStyle2}>
              <Typography variant="body" sx={H5style}>
                quantity
              </Typography>
              <Typography variant="body" sx={H5style}>
                {qty ? qty : 0} botol
              </Typography>
            </div>
            <div style={MetaStyle2}>
              <Typography variant="body" sx={H5style}>
                amount
              </Typography>
              <Typography variant="body" sx={H5style}>
                Rp. {amount ? amount : 0},000
              </Typography>
            </div>
          </div>
        </div>
      </Card>
    </Grow>
  );
};

export default InvoiceItemDetail;
