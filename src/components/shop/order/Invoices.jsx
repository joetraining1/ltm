import { Button, Card } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";

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
        sx={{ display: "flex", width: "100%", height: "50svh" }}
        elevation={3}
      ></Card>
    </div>
  );
};

export default Invoices;
