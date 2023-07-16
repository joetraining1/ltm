import { Button, Divider, InputBase, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { H5style, PaymentItem } from "../../../utils/constants";
import PaymentCard from "./PaymentCard";

const Payements = () => {
  const [pageActive, setPageActive] = useState(0);
  const [datas, setDatas] = useState([]);

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

  let activeDataset;

  const Hero = MultiArray(PaymentItem, 9);
  const HeroItem = Hero.map((item, index) => {
    if (pageActive === index) {
      return (activeDataset = item.dataset);
    }
    return null;
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "50svh",
        background: "#fff",
        width: "100%",
        gap: "1vw",
      }}
    >
      <Typography variant="h4" sx={{ ...H5style, marginBottom: "1%" }}>
        Kelola Metode Pembayaran
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          gap: "1vw",
          height: "50px",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            width: "50%",
            padding: "10px 1vw",
            height: "100%",
            justifyContent: "space-evenly",
            gap: "15px",
          }}
          elevation={1}
        >
          <InputBase
            sx={{
              width: "100%",
              height: "100%",
            }}
            inputProps={{
              sx: {
                fontFamily: "Signika Negative, sans-serif",
                fontWeight: "600",
                color: "#262626",
              },
            }}
            placeholder="Temukan pembayaran.."
          />
          <Divider orientation="vertical" />
          <Button variant="text">
            <SearchRoundedIcon />
          </Button>
        </Paper>
        <Button
          variant="contained"
          sx={{
            width: "18%",
            height: "50px",
            fontFamily: "Signika Negative, sans-serif",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <PlusOneRoundedIcon />
          Tambah Metode
        </Button>
      </div>
      <div
        style={{
          display: "grid",
          width: "100%",
          gridTemplateColumns:
            activeDataset.length < 3
              ? "repeat(auto-fit, minmax(250px, 300px))"
              : "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1vw",
          overflow: "auto",
          alignContent: "start",
          transition: "width 0.4s ease, height 0.4s ease",
          padding: "1vw",
          height:
            activeDataset.length < 4
              ? "34svh"
              : activeDataset.length < 7
              ? "64svh"
              : "90svh",
        }}
      >
        {activeDataset?.map((item, index) => {
          return <PaymentCard title={item.title} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Payements;
