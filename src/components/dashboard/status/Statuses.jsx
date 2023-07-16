import React, { useState } from "react";
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Button, Divider, InputBase, Paper, Typography } from "@mui/material";
import { H5style, StatusPesanan } from "../../../utils/constants";
import StatusCard from "./StatusCard";

const Statuses = () => {
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

  const Hero = MultiArray(StatusPesanan, 9);
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
        Kelola Status Pesanan
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
            placeholder="Temukan jenis status.."
          />
          <Divider orientation="vertical" />
          <Button variant="text">
            <SearchRoundedIcon />
          </Button>
        </Paper>
        <Button
          variant="contained"
          sx={{
            width: "17%",
            height: "50px",
            fontFamily: "Signika Negative, sans-serif",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <PlusOneRoundedIcon />
          Tambah status
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
          return (
            <StatusCard title={item.title} key={item.id}/>
          );
        })}
      </div>
    </div>
  );
};

export default Statuses;
