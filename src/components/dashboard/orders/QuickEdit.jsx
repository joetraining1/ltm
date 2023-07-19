import {
  Avatar,
  Button,
  Card,
  Divider,
  Grow,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  AvaSize,
  H5style,
  LabelStyle,
  LabelStyle2,
  MetaStyle2,
  MetaStyle3,
  MetaStyle5,
  MetaValue,
  MetaValue2,
  SideNoteStyle,
  StatusPesanan,
} from "../../../utils/constants";
import Paganini from "../../../assets/pagani.jpg";
import QuickPhotoUploader from "./quick/QuickPhotoUploader";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";


const QuickEdit = () => {
  const [shipFee, setShipFee] = useState("18000");
  const { id } = useParams();
  const resiRef = useRef();

  const navigate = useNavigate();

  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={200}>
      <Card
        sx={{
          width: "100%",
          height: "65vh",
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
            sx={{ width: "40%", marginLeft: "auto" }}
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
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            gap: "1vw",
            alignItems: "center",
          }}
        >
          <div style={MetaStyle5}>
            <div style={{ display: "flex", width: "100%" }}>
              <Typography variant="body" sx={LabelStyle2}>
                Order No.
              </Typography>
              <Typography variant="body" sx={{ marginLeft: "auto" }}>
                00{id}
              </Typography>
            </div>

            <Typography variant="body" sx={MetaValue2}>
              Bank Transfer
            </Typography>
            <Typography variant="body" sx={MetaValue2}>
              BCA - 3530696790
            </Typography>

            <Typography variant="body" sx={MetaValue2}>
              081234567890
            </Typography>

            <Typography variant="body" sx={MetaValue2}>
              Jl. Suyudono Selatan, Tebet, Jakarta Utara, Jakarta
            </Typography>
          </div>
          <div style={MetaStyle5}>
            <div style={MetaStyle3}>
              <div style={MetaStyle2}>
                <Typography variant="body" sx={LabelStyle2}>
                  Jumlah variant
                </Typography>
                <Typography variant="body" sx={LabelStyle2}>
                  :
                </Typography>
              </div>
              <Typography variant="body" sx={MetaValue}>
                2 produk
              </Typography>
            </div>
            <div style={MetaStyle3}>
              <div style={MetaStyle2}>
                <Typography variant="body" sx={LabelStyle2}>
                  Jumlah produk
                </Typography>
                <Typography variant="body" sx={LabelStyle2}>
                  :
                </Typography>
              </div>
              <Typography variant="body" sx={MetaValue}>
                5 produk
              </Typography>
            </div>
            <div style={MetaStyle3}>
              <div style={MetaStyle2}>
                <Typography variant="body" sx={LabelStyle2}>
                  Total produk
                </Typography>
                <Typography variant="body" sx={LabelStyle2}>
                  :
                </Typography>
              </div>
              <Typography variant="body" sx={MetaValue}>
                Rp 35,000
              </Typography>
            </div>
            <div style={MetaStyle3}>
              <div style={MetaStyle2}>
                <Typography variant="body" sx={LabelStyle2}>
                  Pengiriman
                </Typography>
                <Typography variant="body" sx={LabelStyle2}>
                  :
                </Typography>
              </div>
              <Typography variant="body" sx={MetaValue}></Typography>
            </div>
            <div style={MetaStyle3}>
              <div style={MetaStyle2}>
                <Typography variant="body" sx={LabelStyle2}>
                  Total Harga
                </Typography>
                <Typography variant="body" sx={LabelStyle2}>
                  :
                </Typography>
              </div>
              <Typography variant="h6" sx={MetaValue}>
                Rp 53,000
              </Typography>
            </div>
          </div>
        </div>
        <Divider />
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            gap: "1vw",
            alignItems: "center",
          }}
        >
          <div style={MetaStyle2}>
            <Typography variant="body" sx={H5style}>
              Biaya pengiriman
            </Typography>
            <Typography variant="body" sx={H5style}>
              :
            </Typography>
          </div>
          Rp.
          <TextField
            type="number"
            label="Biaya kirim.."
            value={shipFee}
            sx={{
              width: "100%",
              "& input[type=number]": {
                MozAppearance: "textfield",
              },
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                {
                  display: "none",
                },
            }}
            inputProps={{
              sx: {
                ...H5style,
              },
            }}
            InputLabelProps={{
              sx: {
                ...LabelStyle,
              },
            }}
            size="small"
          />
        </div>
        <QuickPhotoUploader title="Bukti pembayaran" />
        <QuickPhotoUploader title="Nomor Resi" />
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            gap: "3.2vw",
            alignItems: "start",
          }}
        >
          <div style={MetaStyle2}>
            <Typography variant="body" sx={H5style}>
              Catatan
            </Typography>
            <Typography variant="body" sx={H5style}>
              :
            </Typography>
          </div>
          <TextField
            label="catatan order.."
            inputProps={{ sx: H5style }}
            InputLabelProps={{ sx: LabelStyle }}
            sx={{ width: "100%" }}
            size="small"
            multiline={true}
            minRows={4}
            maxRows={4}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            marginTop: "auto",
          }}
        >
          <AccessTimeRoundedIcon sx={SideNoteStyle} />
          <Typography sx={{ ...SideNoteStyle, marginLeft: "3%" }}>
            14 juni 2023
          </Typography>
          <Button
            variant="text"
            sx={{ marginLeft: "auto", ...LabelStyle }}
            onClick={() => navigate(`/dashboard/orders/${id}`)}
          >
            lihat
          </Button>
          <Button
            variant="contained"
            sx={{
              fontFamily: "Signika Negative, sans-serif",
              fontWeight: "600",
              width: "150px",
            }}
            onClick={() => navigate(`/dashboard/order/${id}`)}
          >
            Simpan
          </Button>
        </div>
      </Card>
    </Grow>
  );
};

export default QuickEdit;
