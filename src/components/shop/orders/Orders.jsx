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
import React, { useState } from "react";
import {
  FilterPesanan,
  FilterProduk,
  H4style,
  H5style,
} from "../../../utils/constants";
import Cart from "../cart/Cart";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Outlet, useNavigate } from "react-router-dom";
import OrderItem from "./OrderItem";
import UndoRoundedIcon from '@mui/icons-material/UndoRounded';

const Orders = () => {
  const [pageActive, setPageActive] = useState(0);
  const [datas, setDatas] = useState([...Array(10)]);
  const [detailOn, setDetailOn] = useState(false);

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

  const Hero = MultiArray(datas, 9);

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
          {FilterPesanan.map((item, index) => {
            return (
              <MenuItem key={item.id} value={item.value} sx={H5style}>
                {item.value}
              </MenuItem>
            );
          })}
        </TextField>
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
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              width: detailOn ? "45%" : "100%",
              height: "55svh",
              gap: "1vw",
              overflow: "auto",
              alignContent: "start",
              transition: "width 0.4s ease",
              padding: "1vw",
              '&::-webkit-scrollbar': {
                background: '#fff',
              }
            }}
          >
            {Hero.map((item, index) => {
              if (index === pageActive) {
                return item.dataset.map((i, ind) => {
                  return (
                    <OrderItem
                      key={ind}
                      ind={ind}
                      spill={() => showQuick(ind)}
                    />
                  );
                });
              }
              return null;
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
                  width: '100px'
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
    </div>
  );
};

export default Orders;
