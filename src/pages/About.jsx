import React from "react";
import Abouts from "../assets/about.png";
import { Avatar, Typography } from "@mui/material";
import { Logo } from "../utils/constants";

const About = () => {
  return (
    <section
      id="home-about"
      style={{
        width: "100%",
        height: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 60%), url(${Abouts})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "1280px",
          height: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "7%",
          gap: "1vw",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "700",
            color: "#008BF8",
          }}
        >
          Tentang Kami
        </Typography>
        <div
          style={{
            height: "7px",
            width: "150px",
            background: "#F3DE2C",
          }}
        />
        <img src={Logo} style={{ height: 'auto', width: '11%'}}/>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "700",
            color: "#fff",
            textShadow: '1px 2px 3px #000000'
          }}
        >
          Marino's Milk & Yoghurt
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "700",
            color: "#fff",
            textAlign: 'center',
            width: '50%',
            textShadow: '1px 2px 3px #000000'
          }}
        >
          Kami adalah brand minuman olahan bernutrisi kebaikan susu sapi perah murni.
          <br />
          Kami memiliki visi untuk dapat menyediakan produk berkualitas dan gizi yang dapat dan lebih dari olahan susu sapi perah ke masyarakat Indonesia.
          <br />
        </Typography>
      </div>
    </section>
  );
};

export default About;
