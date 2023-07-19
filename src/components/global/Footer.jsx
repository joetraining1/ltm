import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import BGmilk from "../../assets/cows4.png";

const Footer = () => {
  const HeadingStyle = {
    fontFamily: "Signika Negative, sans-serif",
    color: "#fff",
    fontWeight: "600",
    marginBottom: "1vw",
  };

  const LinkStyle = {
    color: "#fff",
    fontWeight: "600",
    fontSize: "1.2em",
    "&:hover": {
      color: "#F3DE2C",
    },
  };

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "40vh",
          background: "#2A4494",
          justifyContent: "center",
          alignItems: "center",
          padding: "2vw",
          boxShadow: "0 -1px 10px 1px rgba(0,0,0, 0.6)",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "1280px",
            height: "100%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Signika Negative, sans-serif",
                color: "#fff",
                fontWeight: "700",
              }}
            >
              Marino's <br /> Milk & Yoghurt
            </Typography>
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" sx={HeadingStyle}>
              Useful Links
            </Typography>
            <div
              style={{
                width: "70%",
                height: "7px",
                background: "#F3DE2C",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "1vw 0",
              }}
            >
              <HashLink to="/#home-hero" style={LinkStyle}>
                Home
              </HashLink>
              <Link to="product" style={LinkStyle}>
                Product
              </Link>
              <Link to="shop" style={LinkStyle}>
                Shop
              </Link>
              <Link to="/shop/checkout" style={LinkStyle}>
                Checkout
              </Link>
              <Link to="/shop/guide" style={LinkStyle}>
                Panduan Pemesanan
              </Link>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" sx={HeadingStyle}>
              Locations
            </Typography>
            <div
              style={{
                width: "70%",
                height: "7px",
                background: "#F3DE2C",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "1vw 0",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Signika Negative, sans-serif",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                Our Office :
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Signika Negative, sans-serif",
                  fontWeight: "600",
                  color: "#fff",
                  fontSize: "1.1em",
                }}
              >
                Jl. Taman Belimbing no. 34, <br /> Semarang Tengah, Kota
                Semarang
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Signika Negative, sans-serif",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                Our Factory :
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Signika Negative, sans-serif",
                  fontWeight: "600",
                  color: "#fff",
                  fontSize: "1.1em",
                }}
              >
                Jl. Musuk no. 34, <br /> Musuk, Boyolali
              </Typography>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={HeadingStyle}>
              Social Media
            </Typography>
            <div
              style={{
                width: "70%",
                height: "7px",
                background: "#F3DE2C",
              }}
            />
          </div>
        </div>
        <Typography variant="body" sx={{ color: "#fff", fontWeight: "600" }}>
          © Copyright 2023, CV. Langgeng Tani Makmur
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default Footer;
