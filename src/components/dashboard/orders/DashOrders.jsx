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
import { useSelector } from "react-redux";
import NoData from "../../global/NoData";

const DashOrders = () => {
  const { id } = useParams();
  const [pageActive, setPageActive] = useState(0);
  const [datas, setDatas] = useState([]);
  const [detailOn, setDetailOn] = useState(id ? true : false);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.auth.authState);
  const [filter, setFilters] = useState([
    {
      id: 0,
      title: "All Item",
    },
  ]);
  const [activeF, setActiveF] = useState({
    id: 0,
    title: "All Item",
  });

  const getType = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get(`order/`).then((res) => {
      return res.data;
    });
    if (filter.length === 1) {
      const getStatus = await ApiClient.get(`status`).then((res) => res.data);
      setFilters([...filter, ...getStatus.result]);
    }
    setDatas(reqType.result);
    setIsLoading(false);
    return;
  };

  const filterCtg = async (id) => {
    setIsLoading(true);
    if (id === 0) {
      getType();
      return;
    }

    const product = await ApiClient.get(`order/status/${id}`).then((res) => {
      return res.data;
    });
    setDatas(product.result);
    setIsLoading(false);
    return;
  };

  const setterF = async (ctg_id, title) => {
    filterCtg(ctg_id);
    setActiveF({
      id: ctg_id,
      title: title,
    });
    return;
  };

  useEffect(() => {
    if (user?.type !== "") {
      if (datas.length === 0) {
        getType();
        return;
      }
      return;
    }
    return;
  }, [user]);

  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);

  useEffect(() => {
    if (!id) {
      return setDetailOn(false);
    }
    if (user.user_id !== "") {
      getType();
      return;
    }
    return;
  }, [id]);

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
    navigate('/dashboard/orders');
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
          gap: "1vw",
          height: "50px",
        }}
      >
       
        <Paper
          sx={{
            width: "12vw",
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
            defaultValue={activeF.title}
            value={activeF.title}
          >
            {filter.map((item, index) => {
              return (
                <MenuItem
                  onClick={() => setterF(item.id, item.title)}
                  key={item.id}
                  value={item.title}
                  sx={H5style}
                >
                  {item.title}
                </MenuItem>
              );
            })}
          </TextField>
        </Paper>
      {  
        // <Button
        //   variant="contained"
        //   sx={{
        //     width: "12vw",
        //     height: "53px",
        //     fontFamily: "Signika Negative, sans-serif",
        //     alignItems: "center",
        //     display: "flex",
        //     justifyContent: "space-between",
        //   }}
        //   onClick={() => handleOpen()}
        // >
        //   <PlusOneRoundedIcon />
        //   Tambah Pesanan
        // </Button>
      }
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
          {datas.length === 0 ? (
            <NoData prop={"pesanan apapun."} />
          ) : (
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
                    refresh={() => getType()}
                  />
                );
              })}
            </div>
          )}
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
      {datas.length < 10 ? null : (
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
