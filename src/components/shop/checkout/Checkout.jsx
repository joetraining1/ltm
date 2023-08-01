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
import { useDispatch, useSelector } from "react-redux";
import ApiClient from "../../../services/ApiClient";
import { useEffect } from "react";
import { co } from "../../../redux/slices/orderFormSlice";
import { useNavigate } from "react-router-dom";
import NoData from "../../global/NoData";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pageActive, setPageActive] = useState(0);
  const [datas, setDatas] = useState([]);
  const [metas, setMetas] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { infoToast, updateToast } = useNotif();
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

  const checkout = async () => {
    infoToast("mengirimkan pesanan..");
    setIsLoading(true);
    const payload = {
      user_id: user.id,
      cart_id: user.cart_id,
    };
    const checkout = await ApiClient.post(`order/checkout`, payload)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        updateToast("Gagal.", "error");
        setIsLoading(false);
        return;
      });
    dispatch(co(checkout.result.order_id));
    setIsLoading(false);
    updateToast("Berhasil.", "success");
    navigate("/shop/payment");
    return;
  };

  useEffect(() => {
    if (user.type !== "") {
      getType();
      return;
    }
    return;
  }, [user]);

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
  const Hero = MultiArray(datas, 3);

  const HeroItem = Hero.map((item, index) => {
    if (pageActive === index) {
      return (activeDataset = item.dataset);
    }
    return null;
  });

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
            {user.type === "" ? (
              <Typography variant="h5" sx={{ ...H5style, textAlign: "center" }}>
                Silahkan login terlebih dahulu.
              </Typography>
            ) : datas.length === 0 ? (
              <NoData prop={"produk apapun."} />
            ) : (
              Hero.map((item, index) => {
                if (pageActive === index) {
                  return item.dataset.map((i, ind) => {
                    return (
                      <CheckoutItem
                        key={i.id}
                        ind={ind}
                        refresh={() => getType()}
                        kategori={i.kategori}
                        url={i.url}
                        id={i.id}
                        produk={i.nama_produk}
                        amounts={i.amount}
                        qtys={i.qty}
                        price={i.price}
                      />
                    );
                  });
                }
                return null;
              })
            )}
          </div>
          {datas.length < 4 ? null : (
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
          )}
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
              Rp. {metas.total ? metas.total : 0},000
            </Typography>
          </div>
          <Divider />
          <div style={MetaStyle}>
            <Typography variant="h6" sx={H5style}>
              jumlah variant
            </Typography>
            <Typography variant="h6" sx={H5style}>
              {metas.variant ? metas.variant : 0} variant
            </Typography>
          </div>
          <div style={MetaStyle}>
            <Typography variant="h6" sx={H5style}>
              jumlah produk
            </Typography>
            <Typography variant="h6" sx={H5style}>
              {metas.unit ? metas.unit : 0} botol
            </Typography>
          </div>

          <Button
            variant="contained"
            disabled={isLoading || datas.length === 0 ? true : false}
            loading={isLoading}
            onClick={() => checkout()}
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
        </Card>
      </div>
    </div>
  );
};

export default Checkout;
