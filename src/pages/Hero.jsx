import React from "react";
import Milk from "../assets/hero.jpg";
import { Button, Typography } from "@mui/material";
import { H5style, LabelStyle } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <section
      id="home-hero"
      style={{
        width: "100%",
        height: "100svh",
        marginTop: "6svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${Milk})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: "0 10px 50px 10px rgba(0,0,0, 0.2)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "1280px",
          height: "100%",
          justifyContent: "flex-start",
          alignItems: "start",
          flexDirection: "column",
          paddingTop: "5%",
          gap: "1vw",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "700",
            color: "#FFFC31",
            textShadow: '1px 2px 3px #000000'
          }}
        >
          Marino's <br /> Milk & Yoghurt
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "700",
            color: "#fff",
            textShadow: '1px 2px 3px #000000'
          }}
        >
          Penuhi kebutuhan <br /> nutrisi kebaikan susu harianmu!
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "700",
            color: "#008BF8",
            background: "#fff",
            '&:hover': {
              background: '#008BF8',
              color: '#fff'
            }
          }}
          onClick={() => navigate('shop')}
        >
          Pesan Sekarang
        </Button>
      </div>
    </section>
  );
};

export default Hero;
