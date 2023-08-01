import {
  Button,
  Divider,
  InputBase,
  MenuItem,
  Modal,
  Pagination,
  PaginationItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import {
  FilterPesanan,
  H4style,
  H5style,
  StatusPesanan,
} from "../../../utils/constants";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import DashOrderItem from "./DashOrderItem";
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";
import OrderForm from "./OrderForm";
import ApiClient from "../../../services/ApiClient";

const DashOrders = () => {
  const { id } = useParams();
  const [pageActive, setPageActive] = useState(0);
  const [datas, setDatas] = useState([]);
  const [detailOn, setDetailOn] = useState(id ? true : false);
  const [isLoading, setIsLoading] = useState(false);


  const getType = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get(`order/`).then((res) => {
      return res.data;
    });
    setDatas(reqType.result);
    setIsLoading(false);
    return;
  };

  useEffect(() => {
    if(datas.length === 0){
      getType()
      return
    }
    return
  }, [datas])

  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);

  useEffect(() => {
    if(!id){
      return setDetailOn(false);
    } 
    return
  }, [id])

  const navigate = useNavigate();

  const handleChangePage = (event, value) => {
    setPageActive(value - 1);
  };

  const showQuick = (id) => {
    setDetailOn(true);
    navigate(`${id}`);
    return;
  };

  const editMode = (id) => {
    setDetailOn(true);
    navigate(`edit/${id}`);
    return;
  };

  const backButton = () => {
    navigate(-1);
    return setDetailOn(false);
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

  const Hero = MultiArray(datas, 9);

  let activeDataset;

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
        height: "fit-content",
        width: "100%",
        gap: "1vw",
      }}
    >
      <Typography variant="h4" sx={H4style}>
        Kelola Pesanan
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-evenly",
          gap: "1vw",
          height: "50px",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            width: "100%",
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
            placeholder="Temukan pesanan.."
          />
          <Divider orientation="vertical" />
          <Button variant="text">
            <SearchRoundedIcon />
          </Button>
        </Paper>
        <Paper
          sx={{
            width: "40%",
            height: "53px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            label="filter"
            select
            sx={{ width: "100%" }}
            InputProps={{
              sx: {
                height: "100%",
                fontFamily: "Signika Negative, sans-serif",
                fontWeight: "600",
                minHeight: "10px",
                "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  border: "none",
                  outline: "none",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                fontFamily: "Signika Negative, sans-serif",
                fontWeight: "600",
                top: "18%",
                fontSize: "1.1em",
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
        </Paper>
        <Button
          variant="contained"
          sx={{
            width: "32%",
            height: "53px",
            fontFamily: "Signika Negative, sans-serif",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
          onClick={() => handleOpen()}
        >
          <PlusOneRoundedIcon />
          Tambah Pesanan
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "fit-content",
          gap: "1vw",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            height: "fit-content",
            gap: "1vw",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                activeDataset?.length < 3
                  ? "repeat(auto-fit, minmax(250px, 300px))"
                  : "repeat(auto-fit, minmax(250px, 1fr))",
              width: detailOn ? "55%" : "100%",
              height: detailOn
                ? "100svh"
                : activeDataset?.length < 4
                ? "24svh"
                : activeDataset?.length < 7
                ? "46svh"
                : "70svh",
              gap: "1vw",
              overflow: "auto",
              alignContent: "start",
              transition: "width 0.4s ease, height 0.4s ease",
              padding: "1vw",
            }}
          >
            {activeDataset?.map((item, index) => {
              console.log(item)
              return (
                <DashOrderItem
                  key={index}
                  id={item.id}
                  metode={item.pembayaran}
                  status={item.status}
                  user={item.name}
                  email={item.email}
                  url={item.url}
                  total={item.total}
                  dibuat={item.createdAt}
                  ind={index}
                  spill={() => showQuick(item.id)}
                  actionEdit={() => editMode(item.id)}
                />
              );
            })}
          </div>
          {detailOn ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Button
                variant="text"
                sx={{
                  fontFamily: "Signika Negative, sans-serif",
                  fontWeight: "600",
                  fontSize: "1.3em",
                  color: "#262626",
                  width: "100px",
                }}
                onClick={() => backButton()}
                startIcon={<UndoRoundedIcon />}
              >
                back
              </Button>
              <Outlet />
            </div>
          ) : null}
        </div>
      </div>
      <Pagination
        count={Hero.length}
        page={pageActive + 1}
        renderItem={(item) => <PaginationItem sx={H5style} {...item} />}
        onChange={handleChangePage}
      />
      <Modal
        open={modalOpen}
        onClose={() => handleClose()}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Paper
          sx={{
            width: "1100px",
            minHeight: "350px",
            height: "70svh",
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
          <OrderForm onClose={() => handleClose()} />
        </Paper>
      </Modal>
    </div>
  );
};

export default DashOrders;
