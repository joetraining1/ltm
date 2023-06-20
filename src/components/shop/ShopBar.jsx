import { Button, Card, Divider, Typography } from "@mui/material";
import React from "react";
import { H5style, iconStyle, menuItemStyle } from "../../utils/constants";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import DvrRoundedIcon from "@mui/icons-material/DvrRounded";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import { Link, useNavigate } from "react-router-dom";

const ShopBar = () => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: "350px",
        height: "320px",
        transition: "height 0.2s ease",
        padding: "1vw",
        display: "flex",
        flexDirection: "column",
        gap: "0.5vw",
      }}
      elevation={3}
    >
      <Typography variant="h5" sx={H5style}>
        Shop Menu
      </Typography>
      <Divider />
      <Button
        onClick={() => navigate('/shop')}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          gap: "1vw",
          alignItems: "center",
        }}
      >
        <LocalOfferOutlinedIcon sx={iconStyle} />
        <Typography variant="h6" sx={menuItemStyle}>
          All Items
        </Typography>
      </Button>
      <Button
      onClick={() => navigate('orders')}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          gap: "1vw",
          alignItems: "center",
        }}
      >
        <DvrRoundedIcon sx={iconStyle} />
        <Typography variant="h6" sx={menuItemStyle}>
          Orders
        </Typography>
      </Button>
      <Button
        onClick={() => navigate('payment')}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          gap: "1vw",
          alignItems: "center",
        }}
      >
        <LibraryAddCheckOutlinedIcon sx={iconStyle} />
        <Typography variant="h6" sx={menuItemStyle}>
          Selesaikan Pesanan
        </Typography>
      </Button>
      <Button
        onClick={() => navigate('checkout')}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          gap: "1vw",
          alignItems: "center",
        }}
      >
        <ShoppingCartCheckoutRoundedIcon sx={iconStyle} />
        <Typography variant="h6" sx={menuItemStyle}>
          Checkout
        </Typography>
      </Button>
      <Button
        onClick={() => navigate('guide')}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          gap: "1vw",
          alignItems: "center",
        }}
      >
        <PrivacyTipOutlinedIcon sx={iconStyle} />
        <Typography variant="h6" sx={menuItemStyle}>
          Panduan Pemesanan
        </Typography>
      </Button>
    </Card>
  );
};

export default ShopBar;
