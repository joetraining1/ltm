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
import React, { useState } from "react";
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { H5style, TypeItem } from "../../../utils/constants";
import TypeCard from "./TypeCard";
import TypeForm from "./TypeForm";
import ApiClient from "../../../services/ApiClient";
import { useEffect } from "react";

const UserType = () => {
  const [pageActive, setPageActive] = useState(0);
  const [datas, setDatas] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getType = async () => {
    setIsLoading(true)
    const reqType = await ApiClient.get('type').then((res) => {
      return res.data
    })
    setDatas(reqType.result)
    setIsLoading(false)
    return
  }

  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);

  const handleChangePage = (event, value) => {
    setPageActive(value - 1);
  };

  useEffect(() => {
    if(datas.length === 0){
      getType()
      return
    }
    return
  }, [datas])

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
        Kelola Tipe Akun
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
            width: "20%",
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
          Tambah tipe akun
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
              ? "28svh"
              : activeDataset?.length < 7
              ? "54svh"
              : "68svh",
        }}
      >
        {activeDataset?.map((item, index) => {
          return (
            <TypeCard
              title={item.title}
              key={item.id}
              desc={item.description}
              dibuat={item.createdAt.slice(0,10)}
              ind={index}
              id={item.id}
              refresh={() => getType()}
            />
          );
        })}
      </div>
      {TypeItem.length < 10 ? null : (
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
            height: 'fit-content',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            backgroundColor: "#fff",
            display: 'flex',
            flexDirection: 'column',
            padding: '2vw',
            alignItems: 'center',
            borderRadius: '5px',
            gap: '0.5vw'
          }}
        >
          <TypeForm title="Tambah Tipe Akun" refresh={() => getType()} onClose={() => handleClose()}/>
        </Paper>
      </Modal>
    </div>
  );
};

export default UserType;
