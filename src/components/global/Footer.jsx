import { IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import BGmilk from "../../assets/cows4.png";
import { Logo } from "../../utils/constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
    textShadow: "1px 2px 3px #000000",
  };

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "50vh",
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
              gap: "1vw",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Signika Negative, sans-serif",
                color: "#fff",
                fontWeight: "700",
                textShadow: "1px 2px 3px #000000",
                fontSize: "2.5em",
              }}
            >
              Marino's <br /> Milk & Yoghurt
            </Typography>
            <img
              src={Logo}
              style={{
                width: "35%",
                filter: "drop-shadow(5px 5px 10px rgba(0,0,0,1))",
              }}
            />
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h4"
              sx={{ ...HeadingStyle, textShadow: "1px 2px 3px #000000" }}
            >
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
                padding: "1vw 10px",
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
            <Typography
              variant="h4"
              sx={{ ...HeadingStyle, textShadow: "1px 2px 3px #000000" }}
            >
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
                padding: "1vw 10px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Signika Negative, sans-serif",
                  fontWeight: "600",
                  color: "#fff",
                  textShadow: "1px 2px 3px #000000",
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
                  fontSize: "1em",
                  textShadow: "1px 1px 1px #000000",
                }}
              >
                Jl. Taman Blimbing No.34, Peterongan, <br />
                Kec. Semarang Sel., Kota Semarang
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Signika Negative, sans-serif",
                  fontWeight: "600",
                  color: "#fff",
                  textShadow: "1px 2px 3px #000000",
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
                  fontSize: "1em",
                  textShadow: "1px 1px 1px #000000",
                }}
              >
                Dukuh Getakrejo RT 04/RW 02 Desa Sukorejo, Kecamatan Musuk,
                Kabupaten Boyolali
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
            <Typography
              variant="h4"
              sx={{ ...HeadingStyle, textShadow: "1px 2px 3px #000000" }}
            >
              Social Media
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
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Signika Negative, sans-serif",
                  fontWeight: "600",
                  color: "#fff",
                  textShadow: "1px 2px 3px #000000",
                }}
              >
                Follow Us On :
              </Typography>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "auto",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <IconButton
                  aria-label="Facebook.com"
                  onClick={() => window.open("https://www.facebook.com")}
                >
                  <FacebookIcon style={{ color: "#fff", width: "100%" }} />
                </IconButton>
                <IconButton
                  aria-label="Instagram.com"
                  onClick={() => window.open("https://www.instagram.com")}
                >
                  <InstagramIcon style={{ color: "#fff", width: "100%" }} />
                </IconButton>
                <IconButton
                  aria-label="Google.com"
                  onClick={() => window.open("https://www.google.com")}
                >
                  <GoogleIcon style={{ color: "#fff", width: "100%" }} />
                </IconButton>
                <IconButton
                  aria-label="Linkedin.com"
                  onClick={() => window.open("https://www.linkedin.com")}
                >
                  <LinkedInIcon style={{ color: "#fff", width: "100%" }} />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontWeight: "600",
            textShadow: "1px 2px 3px #000000",
            fontFamily: "Signika Negative, sans-serif",
          }}
        >
          © Copyright 2023, CV. Langgeng Tani Makmur
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default Footer;
