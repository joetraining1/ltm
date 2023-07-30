import {
  Button,
  Divider,
  InputBase,
  Pagination,
  PaginationItem,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { H5style } from "../../../utils/constants";
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import CartCard from "./CartCard";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import ApiClient from "../../../services/ApiClient";
import NoData from "../../global/NoData";

const Carts = () => {
  const { id } = useParams();
  const [pageActive, setPageActive] = useState(0);
  const [datas, setDatas] = useState([]);
  const [detailOn, setDetailOn] = useState(id ? true : false);

  const [isLoading, setIsLoading] = useState(false);

  const getType = async () => {
    setIsLoading(true)
    const reqType = await ApiClient.get('cart').then((res) => {
      return res.data
    })
    setDatas(reqType.result)
    setIsLoading(false)
    return
  }

  useEffect(() => {
    if(datas.length === 0){
      getType()
      return
    }
    return
  }, [datas])

  const navigate = useNavigate();
  const handleChangePage = (event, value) => {
    setPageActive(value - 1);
  };

  const showQuick = (id) => {
    setDetailOn(true);
    navigate(`${id}`);
    return;
  };

  useEffect(() => {
    if(!id){
      return setDetailOn(false);
    } 
    return
  }, [id])
  
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
        minHeight: "50svh",
        width: "100%",
        gap: "1vw",
      }}
    >
      <Typography variant="h4" sx={{ ...H5style, marginBottom: "1%" }}>
        Kelola Keranjang User
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
            placeholder="Temukan keranjang.."
          />
          <Divider orientation="vertical" />
          <Button variant="text">
            <SearchRoundedIcon />
          </Button>
        </Paper>
      </div>
      {
        // this is the section of mapped data, or data displayer
      }
      {datas.length === 0 ? <NoData /> : (<React.Fragment>
        <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          height:  detailOn
          ? "100svh"
          : activeDataset?.length < 4
          ? "24svh"
          : activeDataset?.length < 7
          ? "54svh"
          : "68svh",
          gap: "1vw",
          transition: "height 0.4s ease-in-out",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            width: detailOn ? "52%" : "100%",
            height: detailOn
              ? "95svh"
              : activeDataset?.length < 4
              ? "24svh"
              : activeDataset?.length < 7
              ? "54svh"
              : "68svh",
            gap: "1vw",
            overflow: "auto",
            alignContent: "start",
            transition: "width 0.4s ease, height 0.4s ease-in-out",
            padding: "1vw",
          }}
        >
          {activeDataset?.map((item, index) => {
            return (
              <CartCard
                key={item.id}
                vari={item.variant}
                amou={item.total}
                dibuat={item.createdAt?.slice(0,10)}
                id={item.id}
                uemail={item.email}
                uurl={item.url}
                uname={item.name}
                uni={item.unit}
                ind={index}
                spill={() => showQuick(item.id)}
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
      />
        </React.Fragment>)}
    </div>
  );
};

export default Carts;
