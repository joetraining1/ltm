import { Typography } from "@mui/material";
import React from "react";
import { H5style, LabelStyle2 } from "../../../../utils/constants";

const InvoicesFooter = ({ note }) => {

  const defaultNote = "Terima kasih sudah memesan produk susu sapi olahan Marino's Milk & Yoghurt, penuhi nutrisi harian kebaikan susu mu dengan mengonsumsi produk susu pasteurisasi kami. Dimohon bagi pembeli untuk terus selalu memperhatikan status pesanan masing-masing untuk dapat segera menikmati produk olahan susu sapi Marino's Milk & Yoghurt."
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Typography variant="body" sx={{ ...LabelStyle2, textAlign: "center" }}>
        {note
          ? note
          : defaultNote}
      </Typography>
      <Typography
        variant="body"
        sx={{ ...H5style, textAlign: "center", margin: "1vw 0 5% 0" }}
      >
        CV. Langgeng Tani Makmur
      </Typography>
    </div>
  );
};

export default InvoicesFooter;
