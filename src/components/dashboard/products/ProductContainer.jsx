import { Button, Card, Divider, Modal, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { H5style, LabelStyle, MetaStyle } from "../../../utils/constants";
import ProductCard from "./ProductCard";
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";

const ProductContainer = ({ title, data }) => {
  // const onCategoy = data.category;

  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);
  return (
    <React.Fragment>
      <Card
        sx={{
          width: "100%",
          minHeight: "35svh",
          height: "fit-content",
          padding: "1vw",
          gap: "10px",
          display: "flex",
          flexDirection: "column",
        }}
        elevation={3}
      >
        <div style={MetaStyle}>
          <Typography variant="h5" sx={H5style}>
            Category produk : {title}
          </Typography>
          <Button
            variant="contained"
            startIcon={<PlusOneRoundedIcon />}
            sx={LabelStyle}
            onClick={() => handleOpen()}
          >
            Tambah Produk
          </Button>
        </div>
        <Divider />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 220px))",
            width: "100%",
            height: "fit-content",
            gap: "20px",
            placeItems: "center",
            padding: "1vw 0",
          }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Card>
      <Modal
        open={modalOpen}
        onClose={() => handleClose()}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Paper
          sx={{
            width: "450px",
            height: "500px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            backgroundColor: "#fff",
          }}
        ></Paper>
      </Modal>
    </React.Fragment>
  );
};

export default ProductContainer;
