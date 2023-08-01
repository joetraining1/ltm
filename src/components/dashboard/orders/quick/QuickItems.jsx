import { Grow, Typography } from "@mui/material";
import React from "react";
import { H5style, LabelStyle2 } from "../../../../utils/constants";

const QuickItems = ({ ind, produk, qty, amount, price }) => {
  return (
    <Grow in={true} timeout={ind * 150}>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "start",
          marginBottom: "2px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="body" sx={H5style}>
            {produk}
          </Typography>
          <Typography variant="body" sx={LabelStyle2}>
            Rp. {price ? price : 0},000
          </Typography>
        </div>

        <Typography variant="body" sx={{ ...H5style, marginLeft: "auto" }}>
          x{qty ? qty : 0} botol
        </Typography>
        <Typography variant="h6" sx={{ ...H5style, marginLeft: "auto" }}>
          Total Rp {amount ? amount : 0},000
        </Typography>
      </div>
    </Grow>
  );
};

export default QuickItems;
