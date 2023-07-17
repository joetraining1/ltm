import { Button, Card, Grow } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const QuickPeek = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={200}>
      <Card
        sx={{
          width: "100%",
          height: "50vh",
          padding: "1vw",
          display: "flex",
          flexDirection: "column",
        }}
        elevation={3}
      >
        order number: {id}
        <br />
        kebutuhan :
        <br /> 
        - lihat status
        <br /> 
        - batalkan pesanan 
        <br />
        - lihat jumlah item 
        <br />
        - lihat jumlah produk
        <br />
        - lihat produk
        <br />
        - lihat biaya pengiriman
        <br />
        - lihat + edit/input pembayaran
        <br />
        - lihat resi kurir
        <Button
          variant="contained"
          sx={{
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "600",
            width: "150px",
            marginTop: "auto",
            marginLeft: "auto",
          }}
          onClick={() => navigate(`/shop/order/${id}`)}
        >
          Lihat invoice
        </Button>
      </Card>
    </Grow>
  );
};

export default QuickPeek;
