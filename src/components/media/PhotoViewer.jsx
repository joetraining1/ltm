import { Button, Modal, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { LabelStyle2 } from "../../utils/constants";

const PhotoViewer = ({ picurl, title }) => {
  const [open, setOpen] = useState(false);
  const [proofing, setProofing] = useState(picurl ? picurl : "");
  const [picFile, setPicFile] = useState("");
  
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Typography variant="body" sx={{ ...LabelStyle2, textAlign: "left" }}>
        {title}
      </Typography>
      <Button
        sx={{
          display: "flex",
          width: "100%",
          height: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleOpen}
      >
        <img
          src={picurl}
          style={{
            objectFit: "cover",
            width: "225px",
            height: "150px",
            borderRadius: "4px",
            filter: "drop-shadow(2px 3px 2px rgba(0,0,0,0.3))"
          }}
        />
      </Button>
      <Modal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
       
      >
        <img
          onClick={handleClose}
          src={picurl}
          style={{
            width: "20%",
            height: "auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            backgroundColor: "#fff",
            borderRadius: "0.5vw",
          }}
        />
      </Modal>
    </div>
  );
};

export default PhotoViewer;
