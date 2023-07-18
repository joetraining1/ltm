import { Avatar, Button, Card, Divider, Grow, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AvaSize, H5style, SideNoteStyle, StatusPesanan } from "../../../utils/constants";
import Paganini from "../../../assets/pagani.jpg";

const QuickEdit = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={200}>
      <Card
        sx={{
          width: "100%",
          height: "70vh",
          padding: "2vw",
          display: "flex",
          flexDirection: "column",
          gap: "1vw",
        }}
        elevation={3}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "1vw",
            alignItems: "center",
            height: "10%",
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
              justifyContent: "flex-start",
              height: "100%",
            }}
          >
            <Typography variant="h5" sx={H5style}>
              Paganini
            </Typography>
            <Typography variant="body" sx={SideNoteStyle}>
              pagani@gmail.com
            </Typography>
          </div>
          <TextField
          label="Status"
          select
          sx={{ width: "40%", marginLeft: 'auto' }}
          InputProps={{
            sx: {
              height: "53px",
              fontFamily: "Signika Negative, sans-serif",
              fontWeight: "600",
              minHeight: "10px",
            },
          }}
          InputLabelProps={{
            sx: {
              fontFamily: "Signika Negative, sans-serif",
              fontWeight: "600",
            },
          }}
          defaultValue="DELIVERING"
        >
          {StatusPesanan.map((item, index) => {
            return (
              <MenuItem key={item.id} value={item.title} sx={H5style}>
                {item.title}
              </MenuItem>
            );
          })}
        </TextField>
        </div>
        <Divider />
        order number: {id}
        <br />
        kebutuhan :
        <br />
        - lihat status
        <br />
        - lihat jumlah item
        <br />
        - lihat jumlah produk
        <br />
        - lihat produk
        <br />
        - lihat + edit biaya pengiriman
        <br />
        - lihat + edit/input pembayaran
        <br />- lihat + edit/input resi kurir
        <Button
          variant="contained"
          sx={{
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "600",
            width: "150px",
            marginTop: "auto",
            marginLeft: "auto",
          }}
          onClick={() => navigate(`/dashboard/order/${id}`)}
        >
          Lihat invoice
        </Button>
      </Card>
    </Grow>
  );
};

export default QuickEdit;
