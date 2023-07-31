import React, { useState } from "react";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import {
  Button,
  Drawer,
  Pagination,
  PaginationItem,
  Typography,
} from "@mui/material";
import {
  H5style,
  LabelStyle,
  LabelStyle2,
  MetaStyle2,
} from "../../../utils/constants";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import CartItem from "./CartItem";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";
import ApiClient from "../../../services/ApiClient";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import NoData from "../../global/NoData";

const Cart = ({ mode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pageActive, setPageActive] = useState(0);
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [metas, setMetas] = useState({});

  const user = useSelector((state) => state.auth.authState);

  const getType = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get(`cart/${user?.id}`).then((res) => {
      return res.data;
    });
    setMetas(reqType.result.metadata);
    setDatas(reqType.result.dataset);
    setIsLoading(false);
    return;
  };

  useEffect(() => {
    if (isOpen !== isOpen) {
      getType();
      return;
    }
    return;
  }, [isOpen]);

  const handleOpen = () => {
    getType();
    setIsOpen(!isOpen);
    return;
  };

  const handleClose = () => {
    getType();
    return setIsOpen(!isOpen);
  };

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

  let activeDataset = [];

  const Hero = MultiArray(datas, 4);
  const HeroItem = Hero.map((item, index) => {
    if (pageActive === index) {
      return (activeDataset = item.dataset);
    }
    return null;
  });

  return (
    <React.Fragment>
      {mode === "one" ? (
        <Button variant="text" onClick={() => handleOpen()}>
          <ShoppingCartOutlinedIcon />
        </Button>
      ) : null}
      {mode === "two" ? (
        <Button
          onClick={() => handleOpen()}
          variant="contained"
          sx={{
            height: "104%",
            width: "15%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "600",
            fontSize: "1.1em",
          }}
        >
          <ShoppingCartRoundedIcon />
          CART
        </Button>
      ) : null}
      <Drawer
        open={isOpen}
        onClose={handleClose}
        anchor="right"
        PaperProps={{
          sx: {
            width: "400px",
            padding: "1vw",
          },
        }}
      >
        <Button
          variant="text"
          sx={{ ...H5style, width: "100px", fontSize: "1.2em" }}
          startIcon={<UndoRoundedIcon />}
          onClick={() => handleClose()}
        >
          BACK
        </Button>
        <Typography variant="h5" sx={{ ...H5style, margin: "0 auto" }}>
          Kelola Keranjang
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            marginTop: "1vw",
          }}
        >
          {user.type === "" ? (
            <Typography variant="h6" sx={{...H5style, textAlign: 'center'}}>Silahkan login terlebih dahulu.</Typography>
          ) : (datas?.length === 0 ? (
            <NoData prop={"produk di keranjangmu."} />
          ) : (
            activeDataset.map((item, index) => {
              return (
                <CartItem
                  ind={index}
                  key={item.id}
                  amounts={item.amount}
                  price={item.price}
                  qtys={item.qty}
                  id={item.id}
                  produk={item.nama_produk}
                  url={item.url}
                  refresh={() => getType()}
                />
              );
            })
          ))}
        </div>
        <Pagination
          count={Hero.length}
          page={pageActive + 1}
          renderItem={(item) => <PaginationItem sx={H5style} {...item} />}
          onChange={handleChangePage}
          sx={{ margin: "auto auto 0 auto" }}
        />
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "20%",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={LabelStyle}>
              Total
            </Typography>
            <Typography variant="h6" sx={LabelStyle}>
              :
            </Typography>
          </div>
          <Typography
            variant="h5"
            sx={{
              ...H5style,
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            Rp. {metas.total ? metas.total : 0},000
          </Typography>
        </div>
        <Button
          variant="contained"
          sx={{ ...LabelStyle, margin: "1vw 0" }}
          startIcon={<ShoppingCartCheckoutRoundedIcon />}
        >
          Checkout
        </Button>
      </Drawer>
    </React.Fragment>
  );
};

export default Cart;
