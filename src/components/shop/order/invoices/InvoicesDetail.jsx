import React, { useState } from "react";
import PhotoViewer from "../../../media/PhotoViewer";
import proof1 from "../../../../assets/proof1.png";
import resi1 from "../../../../assets/resi1.png";
import { LabelStyle2 } from "../../../../utils/constants";
import { Button, Modal, Typography } from "@mui/material";

const InvoicesDetail = ({ proof, ship }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "auto",
        justifyContent: "space-evenly",
        gap: "1vw",
      }}
    >
      <PhotoViewer picurl={proof} title="Bukti Pembayaran" />
      <PhotoViewer picurl={ship} title="Resi Pengiriman" />
    </div>
  );
};

export default InvoicesDetail;
