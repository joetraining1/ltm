import React from "react";
import Milk from '../assets/hero.jpg';
import { Typography } from "@mui/material";
import { H5style } from "../utils/constants";

const Hero = () => {
  return (
    <section
      id="home-hero"
      style={{
        width: "100%",
        height: "100svh",
        marginTop: "6svh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${Milk})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0 10px 50px 10px rgba(0,0,0, 0.2)',
      }}
    >
    <div style={{
        display: 'flex',
        width: '1280px',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Typography sx={H5style}>Penuhi kebutuhan nutrisi kebaikan susu harianmu</Typography>
      </div>
    </section>
  );
};

export default Hero;
