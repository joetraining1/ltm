import {
  Avatar,
  Button,
  Card,
  Divider,
  Grow,
  MenuItem,
  Pagination,
  PaginationItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  AvaSize,
  H5style,
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
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import QuickItems from "./quick/QuickItems";
import proof1 from "../../../assets/proof1.png";
import resi1 from "../../../assets/resi1.png";
import PhotoViewer from "../../media/PhotoViewer";

const QuickLook = () => {
  const { id } = useParams();
  const [pageActive, setPageActive] = useState(0);
  const [datas, setDatas] = useState([...Array(10)]);

  const navigate = useNavigate();

  const handleChangePage = (event, value) => {
    setPageActive(value - 1);
  };

  const MultiArray = (arr, rows) => {
    const ArrSlice = arr.reduce((acc, val, ind) => {
      const currentRow = Math.floor(ind / rows);
      if (!acc[currentRow]) {
        acc[currentRow] = [val];
      } else {
        acc[currentRow].push(val);
      }
      return acc;
    }, []);
    const SortedArr = ArrSlice.map((item, index) => {
      return {
        pId: index,
        dataset: item,
      };
    });

    return SortedArr;
  };

  const Hero = MultiArray(datas, 3);

  let activeDataset;

  const HeroItem = Hero.map((item, index) => {
    if (pageActive === index) {
      return (activeDataset = item.dataset);
    }
    return null;
  });

  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={200}>
      <Card
        sx={{
          width: "100%",
          height: "95svh",
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              marginLeft: "auto",
            }}
          >
            <Typography variant="body" sx={LabelStyle2}>
              Status
            </Typography>
            <Typography variant="h6" sx={H5style}>
              DELIVERING
            </Typography>
          </div>
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
            <div style={{display: 'flex', width: '100%'}}>
              <Typography variant="body" sx={LabelStyle2}>
                Order No.
              </Typography>
              <Typography variant="body" sx={{ marginLeft: 'auto'}}>
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
              <Typography variant="body" sx={MetaValue}>
                Rp 18,000
              </Typography>
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
            flexDirection: "column",
            height: "30%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" sx={{ ...H5style, marginBottom: "5px" }}>
            Detail Pesanan
          </Typography>
          {activeDataset.map((item, index) => {
            return <QuickItems ind={index} key={index} />;
          })}
          <Pagination
            size="small"
            count={Hero.length}
            page={pageActive + 1}
            renderItem={(item) => <PaginationItem sx={H5style} {...item} />}
            onChange={handleChangePage}
            sx={{ marginTop: "auto" }}
          />
        </div>
        <Divider />
        <div style={MetaStyle3}>
          <PhotoViewer picurl={proof1} title="Bukti Pembayaran"/>
          <PhotoViewer picurl={resi1} title="Resi"/>
        </div>
        <Divider />
        <Typography variant="body" sx={{...LabelStyle2, height: '10%', width: '100%', textAlign: 'center'}}>
          Terima kasih telah memesan produk olahan susu sapi Marino's Milk & Yoghurt. Dimohon untuk mengecek berkala status dari pesanan anda masing-masing.
        </Typography>
        <div
          style={{
            display: "flex",
            width: "100%",
            marginTop: "auto",
            alignItems: "center",
          }}
        >
          <AccessTimeRoundedIcon sx={SideNoteStyle} />
          <Typography sx={{ ...SideNoteStyle, marginLeft: "3%" }}>
            14 juni 2023
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontFamily: "Signika Negative, sans-serif",
              fontWeight: "600",
              width: "150px",
              marginLeft: "auto",
            }}
            onClick={() => navigate(`/dashboard/order/${id}`)}
          >
            invoice
          </Button>
        </div>
      </Card>
    </Grow>
  );
};

export default QuickLook;
