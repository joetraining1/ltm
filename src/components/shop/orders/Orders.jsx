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
import { useEffect } from "react";
import ApiClient from "../../../services/ApiClient";
import { useSelector } from "react-redux";
import NoData from "../../global/NoData";

const Orders = () => {
  const { id } = useParams();
  const [states, setStates] = useState(false);
  const [pageActive, setPageActive] = useState(0);
  const [datas, setDatas] = useState([]);
  const [detailOn, setDetailOn] = useState(id ? true : false);
  const [isLoading, setIsLoading] = useState(false);
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

  const user = useSelector((state) => state.auth.authState);

  const filterCtg = async (id) => {
    setIsLoading(true);
    if (id === 0) {
      const reqType = await ApiClient.get(`order/${user?.id}`).then((res) => {
        return res.data;
      });
      setDatas(reqType.result);
      setIsLoading(false);
      return;
    }

    const product = await ApiClient.post(`order/user/${user?.id}`, {
      status_id: id,
    }).then((res) => {
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

  const getType = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get(`order/${user?.id}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => console.log(error));
    if (filter.length === 1) {
      const getStatus = await ApiClient.get(`status`).then((res) => res.data);
      setFilters([...filter, ...getStatus.result]);
    }
    setDatas(reqType?.result);
    setIsLoading(false);
    return;
  };

  useEffect(() => {
    if (user?.type !== "") {
      if (datas?.length === 0) {
        getType();
        return;
      }
      return;
    }
    return;
  }, [user]);

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

  const backButton = () => {
    navigate('/shop/orders');
    return setDetailOn(false);
  };

  const MultiArray = (arr, rows) => {
    const ArrSlice = arr?.reduce((acc, val, ind) => {
      const currentRow = Math.floor(ind / rows);
      if (!acc[currentRow]) {
        acc[currentRow] = [val];
      } else {
        acc[currentRow].push(val);
      }
      return acc;
    }, []);
    const SortedArr = ArrSlice?.map((item, index) => {
      return {
        pId: index,
        dataset: item,
      };
    });

    return SortedArr;
  };

  let activeDataset;

  const Hero = MultiArray(datas, 9);
  const HeroItem = Hero?.map((item, index) => {
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
      {user?.type !== "" ? (
        <React.Fragment>
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
                value={activeF.title}
                defaultValue={activeF.title}
              >
                {filter.map((item, index) => {
                  return (
                    <MenuItem
                      key={item.id}
                      onClick={() => setterF(item.id, item.title)}
                      value={item.title}
                      sx={H5style}
                    >
                      {item.title}
                    </MenuItem>
                  );
                })}
              </TextField>
            </Paper>
          </div>
          {
            //asdasd this is the mapped data using grid
          }
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
              height: detailOn
                ? "95svh"
                : 
                datas.length === 0 ? '20svh' :
                activeDataset?.length < 4
                ? "24svh"
                : activeDataset?.length < 7
                ? "47svh"
                : "70svh",
              gap: "1vw",
              transition: "width 0.4s ease, height 0.4s ease",
            }}
          >
            {datas.length === 0 ? (
              <NoData prop="pesanan apapun." />
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 300px))",
                  width: detailOn ? "55%" : "100%",
                  height: detailOn
                    ? "95svh"
                    : activeDataset?.length < 4
                    ? "24svh"
                    : activeDataset?.length < 7
                    ? "47svh"
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
                    <OrderItem
                      key={item.id}
                      ind={index}
                      spill={() => showQuick(item.id)}
                      cp={item.cp}
                      dibuat={item.createdAt}
                      id={item.id}
                      status={item.status}
                      total={item.total}
                      unit={item.unit}
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
          {datas?.length < 10 ? null : (
            <Pagination
              count={Hero?.length}
              page={pageActive + 1}
              renderItem={(item) => <PaginationItem sx={H5style} {...item} />}
              onChange={handleChangePage}
            />
          )}
        </React.Fragment>
      ) : (
        <Typography variant="h5" sx={{ ...H5style }}>
          Silahkan login terlebih dahulu.
        </Typography>
      )}
    </div>
  );
};

export default Orders;
