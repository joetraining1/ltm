import {
  Button,
  Card,
  Divider,
  Pagination,
  PaginationItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { H5style, MetaStyle } from "../../../utils/constants";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";
import CheckoutItem from "./CheckoutItem";
import { LoadingButton } from "@mui/lab";
import useNotif from "../../../hooks/useNotif";
import Preload from "../../global/Preload";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pageActive, setPageActive] = useState(0);
  const [datas, setDatas] = useState([...Array(10)]);

  const { infoToast, updateToast } = useNotif();

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

  const Hero = MultiArray(datas, 3);

  const checkFunc = () => {
    infoToast("Checkout");
    setTimeout(() => {
      updateToast("Pesanan dibuat", "success");
    }, 2000);
    return;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "fit-content",
        gap: "1vw",
      }}
    >
      <Typography variant="h4" sx={H5style}>
        Checkout Pesanan
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "1vw",
          width: "100%",
          height: "fit-content",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "fit-content",
            display: "flex",
            flexDirection: "column",
            gap: "1vw",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "65svh",
              display: "flex",
              flexDirection: "column",
              gap: "1vw",
            }}
          >
            {Hero.map((item, index) => {
              if (pageActive === index) {
                return item.dataset.map((i, ind) => {
                  return <CheckoutItem key={ind} ind={ind} />;
                });
              }
              return null;
            })}
          </div>
          <Pagination
            count={Hero.length}
            page={pageActive + 1}
            onChange={handleChangePage}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{
                  fontFamily: "Signika Negative, sans-serif",
                  fontWeight: "600",
                }}
              />
            )}
          />
        </div>
        <Card
          sx={{
            width: "50%",
            height: "300px",
            padding: "2vw",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          elevation={3}
        >
          <div style={MetaStyle}>
            <Typography variant="h5" sx={H5style}>
              Total
            </Typography>
            <Typography variant="h5" sx={H5style}>
              Rp. 35,000
            </Typography>
          </div>
          <Divider />
          <div style={MetaStyle}>
            <Typography variant="h6" sx={H5style}>
              jumlah variant
            </Typography>
            <Typography variant="h6" sx={H5style}>
              2 variant
            </Typography>
          </div>
          <div style={MetaStyle}>
            <Typography variant="h6" sx={H5style}>
              jumlah produk
            </Typography>
            <Typography variant="h6" sx={H5style}>
              5 botol
            </Typography>
          </div>
          {isLoading ? (
            <Preload />
          ) : (
            <Button
              variant="contained"
              // disabled={isLoading}
              // loading={isLoading}
              onClick={() => checkFunc()}
              sx={{
                width: "100%",
                fontFamily: "Signika Negative, sans-serif",
                fontWeight: "600",
                display: "flex",
                gap: "10px",
                marginTop: "auto",
              }}
            >
              <ShoppingCartCheckoutRoundedIcon />
              Checkout
            </Button>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Checkout;
