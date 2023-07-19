import {
  Button,
  Divider,
  InputBase,
  MenuItem,
  Pagination,
  PaginationItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import {
  FilterPesanan,
  FilterProduk,
  H4style,
  H5style,
  StatusPesanan,
} from "../../../utils/constants";
import Cart from "../cart/Cart";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import OrderItem from "./OrderItem";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";

const Orders = () => {
  const { id } = useParams();
  const [pageActive, setPageActive] = useState(0);
  const [datas, setDatas] = useState([...Array(13)]);
  const [detailOn, setDetailOn] = useState(id ? true : false);
  const eleRef = useRef();

  const navigate = useNavigate();
  const handleChangePage = (event, value) => {
    setPageActive(value - 1);
  };

  const showQuick = (id) => {
    setDetailOn(true);
    navigate(`${id}`);
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
        height: "fit-content",
        width: "100%",
        gap: "1vw",
      }}
    >
      <Typography variant="h4" sx={H4style}>
        Catatan Pesanan
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
        <TextField
          label="filter"
          select
          sx={{ width: "40%" }}
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
      {
        //asdasd this is the mapped data using grid
      }
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
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            width: detailOn ? "55%" : "100%",
            height:
            detailOn ? "90svh" :
              activeDataset.length < 4
                ? "24svh"
                : activeDataset.length < 7
                ? "47svh"
                : "70svh",
            gap: "1vw",
            overflow: "auto",
            alignContent: "start",
            transition: "width 0.4s ease, height 0.4s ease",
            padding: "1vw",
            "&::-webkit-scrollbar": {
              background: "#fff",
            },
          }}
        >
          {activeDataset.map((item, index) => {
            return (
              <OrderItem
                key={index}
                ind={index}
                spill={() => showQuick(index)}
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
      <Pagination
        count={Hero.length}
        page={pageActive + 1}
        renderItem={(item) => <PaginationItem sx={H5style} {...item} />}
        onChange={handleChangePage}
        sx={{ margin: "auto" }}
      />
    </div>
  );
};

export default Orders;
