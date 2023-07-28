import { Avatar, Button, Card, Divider, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import InvoicesMeta from "./invoices/InvoicesMeta";
import InvoicesItem from "./invoices/InvoicesItem";
import InvoicesDetail from "./invoices/InvoicesDetail";
import InvoicesHead from "./invoices/InvoicesHead";
import InvoicesFooter from "./invoices/InvoicesFooter";
import { H5style, LabelStyle2 } from "../../../utils/constants";
import Logo from "../../../assets/marino.png";

const Invoices = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "fit-content",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <Button
        sx={{
          fontFamily: "Signika Negative, sans-serif",
          fontWeight: "600",
          color: "#262626",
          fontSize: "1.3em",
        }}
        variant="text"
        onClick={() => navigate(-1)}
        startIcon={<UndoRoundedIcon />}
      >
        Back
      </Button>
      <Card
        sx={{
          display: "flex",
          width: "100%",
          height: "180svh",
          flexDirection: "column",
          padding: "2vw",
          alignItems: "center",
          gap: "1vw",
        }}
        elevation={3}
      >
        <img src={Logo} style={{ objectFit: "cover", width: "10%" }} />
        <Typography variant="h4" sx={H5style}>
          Marino's Milk & Yohurt
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1vw",
          }}
        >
          <Typography variant="h6" sx={LabelStyle2}>
            Kepada :{" "}
          </Typography>
          <Typography variant="h6" sx={H5style}>
          Pagani
        </Typography>
        </div>
        <Divider style={{ width: "100%" }} />
        <InvoicesHead />
        <Divider style={{ width: "100%" }} />
        <InvoicesMeta />
        <Divider style={{ width: "100%" }} />
        <InvoicesItem />
        <Divider style={{ width: "100%", marginTop: "auto" }} />
        <InvoicesDetail />
        <Divider style={{ width: "100%" }} />
        <InvoicesFooter />
      </Card>
    </div>
  );
};

export default Invoices;
