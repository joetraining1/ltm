import { Button, Card, Grow, Typography } from "@mui/material";
import React from "react";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { H5style } from "../../../utils/constants";
import { useState } from "react";
import useNotif from "../../../hooks/useNotif";
import ApiClient from "../../../services/ApiClient";
import { useSelector } from "react-redux";

const ShowcaseCard = ({ id, stock, title, url, price, ind }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { infoToast, updateToast, toastInfo } = useNotif();

  const user = useSelector((state) => state.auth.authState)

  const addToCart = async() => {
    if(user.type === ""){
      toastInfo('Silahkan login terlebih dahulu.')
      return
    }
    setIsLoading(true)
    infoToast('menambahkan produk..')
    try {
      const payload = {
        product_id: id,
        amount: 7,
        qty: 1,
        cart_id: user?.cart_id
      }
      const addCart = await ApiClient.post('cart_details', payload).then((res) => {
        return res.data
      })
      setIsLoading(false)
      updateToast('Berhasil menambahkan produk.', 'success')
      return
    } catch (error) {
      console.log(error)
      updateToast('Gagal', 'error')
      setIsLoading(false)
      return
    }
    return
  }
  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={(ind + 1) * 200}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "310px",
          height: "375px",
          background: "#fff",
          justifyContent: "space-evenly",
        }}
        elevation={3}
      >
        <div
          style={{
            background: `url(${url})`,
            width: "100%",
            height: "100%",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          style={{
            height: "70%",
            width: "100%",
            padding: "1vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" sx={H5style}>
              {title}
            </Typography>
            <Typography variant="h6" sx={H5style}>
              Rp. {price},000
            </Typography>
            <Typography variant="body2" sx={H5style}>
              stock: {stock} unit
            </Typography>
          </div>
          <Button
            variant="contained"
            sx={{
              marginTop: "auto",
              width: "100%",
              background: "#32CD32",
              "&:hover": {
                background: "#00FF00",
              },
              fontFamily: "Signika Negative, sans-serif",
              fontWeight: "700",
            }}
            size="small"
            startIcon={<AddShoppingCartRoundedIcon />}
            onClick={() => addToCart()}
          >
            Add to Cart
          </Button>
        </div>
      </Card>
    </Grow>
  );
};

export default ShowcaseCard;
