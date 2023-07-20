import { Avatar, Typography } from "@mui/material";
import React from "react";
import Paganini from "../../../../assets/pagani.jpg";
import {
  AvaSize,
  H5style,
  LabelStyle2,
  SideNoteStyle,
} from "../../../../utils/constants";
import { useParams } from "react-router-dom";

const InvoicesHead = ({}) => {
  const { id } = useParams();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "1vw",
        alignItems: "center",
        height: "10%",
        paddingLeft: "2vw",
      }}
    >
      <Avatar
        sx={{ height: AvaSize.profile2, width: AvaSize.profile2 }}
        src={Paganini}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Typography variant="h5" sx={H5style}>
          Paganini
        </Typography>
        <Typography variant="body" sx={{ ...LabelStyle2, fontStyle: "italic" }}>
          pagani@gmail.com
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          marginLeft: "auto",
          width: "40%",
        }}
      >
        <div
          style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
        >
          <Typography variant="h6" sx={LabelStyle2}>
            Order No.
          </Typography>
          <Typography variant="h6" sx={{ marginLeft: "2%", ...H5style }}>
            00{id}
          </Typography>
        </div>
        <Typography variant="body" sx={LabelStyle2}>
          Status
        </Typography>
        <Typography variant="h6" sx={H5style}>
          DELIVERING
        </Typography>
        <Typography
          variant="body"
          sx={{
            ...LabelStyle2,
            fontStyle: "italic",
            textAlign: "right",
            fontSize: "0.8em",
          }}
        >
          Pesanan dalam pengiriman, pembeli dimohon untuk mengecek berkala
          status dari pesanan masing-masing.
        </Typography>
      </div>
    </div>
  );
};

export default InvoicesHead;
