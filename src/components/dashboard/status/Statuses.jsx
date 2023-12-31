import React, { useState } from "react";
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  Button,
  Divider,
  InputBase,
  Paper,
  Typography,
  Pagination,
  PaginationItem,
  Modal,
} from "@mui/material";
import { H5style, StatusPesanan } from "../../../utils/constants";
import StatusCard from "./StatusCard";
import StatusForm from "./StatusForm";
import ApiClient from "../../../services/ApiClient";
import { useEffect } from "react";

const Statuses = () => {
  const [pageActive, setPageActive] = useState(0);
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const getStats = async () => {
    setIsLoading(true)
    const reqStats = await ApiClient.get('status').then((res) => {
      return res.data
    })
    setDatas(reqStats.result)
    setIsLoading(false)
    return
  }

  useEffect(() => {
    if(datas.length === 0){
      getStats()
    }
  }, [datas])


  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);

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

  const Hero = MultiArray(datas, 9);
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
        <Button
          variant="contained"
          sx={{
            width: "17%",
            height: "50px",
            fontFamily: "Signika Negative, sans-serif",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            marginLeft:'auto'
          }}
          onClick={() => handleOpen()}
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
            activeDataset?.length < 3
              ? "repeat(auto-fit, minmax(250px, 300px))"
              : "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1vw",
          overflow: "auto",
          alignContent: "start",
          transition: "width 0.4s ease, height 0.4s ease",
          padding: "1vw",
          height:
            activeDataset?.length < 4
              ? "34svh"
              : activeDataset?.length < 7
              ? "64svh"
              : "92svh",
        }}
      >
        {activeDataset?.map((item, index) => {
          return (
            <StatusCard
              title={item.title}
              ind={index}
              desc={item.description}
              id={item.id}
              dibuat={item.createdAt.slice(0,10)}
              key={item.id}
              refresh={() => getStats()}
            />
          );
        })}
      </div>
      {StatusPesanan.length < 10 ? null : (
        <Pagination
          count={Hero.length}
          page={pageActive + 1}
          renderItem={(item) => <PaginationItem sx={H5style} {...item} />}
          onChange={handleChangePage}
        />
      )}
      <Modal
        open={modalOpen}
        onClose={() => handleClose()}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Paper
          sx={{
            width: "450px",
            minHeight: "350px",
            height: "fit-content",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            padding: "2vw",
            alignItems: "center",
            borderRadius: "5px",
            gap: "0.5vw",
          }}
        >
          <StatusForm
            title="Tambah Status Pesanan"
            onClose={() => handleClose()}
            refresh={() => getStats()}
          />
        </Paper>
      </Modal>
    </div>
  );
};

export default Statuses;
