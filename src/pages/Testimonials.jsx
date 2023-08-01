import React from "react";
import Testi from "../assets/testi.jpg";
import { Avatar, Card, Typography } from "@mui/material";
import { H5style, LabelStyle2, Logo } from "../utils/constants";
import Kartur from "../assets/kartur1.png";
import BBS from "../assets/bbs2.png";
import Kariadi from "../assets/kariadi1.png";
import Halal from "../assets/halal1.png";

const Testimonials = () => {
  const picSize = "70%";
  const containerSize = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    height: "auto",
  };
  return (
    <section
      id="home-testimonials"
      style={{
        width: "100%",
        height: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${Testi})`,
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
        }}
      >
        <Card
          sx={{
            width: "45%",
            height: "50%",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            padding: "2vw",
            alignItems: "center",
            gap: "1vw",
          }}
        >
          <Typography variant="h4" sx={{ ...H5style, color: "#008BF8" }}>
            Who's with Marino's ?
          </Typography>
          <div
            style={{
              height: "7px",
              width: "150px",
              background: "#F3DE2C",
            }}
          />
          <Typography variant="body" sx={{ ...LabelStyle2 }}>
            see for yourself our esteemed partners below
          </Typography>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "auto",
              justifyContent: "space-evenly",
              alignItems: "end",
            }}
          >
            <div
              style={{
                ...containerSize,
              }}
            >
              <img
                src={Kartur}
                style={{ objectFit: "cover", width: picSize }}
              />
            </div>
            <div
              style={{
                ...containerSize,
              }}
            >
              <img src={Kariadi} style={{ objectFit: "cover", width: "90%" }} />
            </div>
            <div
              style={{
                ...containerSize,
              }}
            >
              <img src={BBS} style={{ objectFit: "cover", width: picSize }} />
            </div>
            <div
              style={{
                ...containerSize,
              }}
            >
              <img src={Halal} style={{ objectFit: "cover", width: picSize }} />
            </div>
          </div>
          <Typography variant="h6" sx={{ ...LabelStyle2, textAlign: "center" }}>
            Kami menyediakan layanan pelanggan dengan mengirimkan produk olahan
            susu sapi Marino's Milk & Yoghurt secara rutin kepada pelanggan yang
            sudah bergabung bersama kami. Bersama-sama membantu dalam upaya
            menyediakan nutrisi kebaikan olahan susu sapi perah ke seluruh rakyat
            Indonesia
          </Typography>
        </Card>
        <img
          src={Logo}
          style={{
            width: "20%",
            margin: "0 auto",
            filter: "drop-shadow(5px 5px 10px rgba(0,0,0,1))",
          }}
        />
      </div>
    </section>
  );
};

export default Testimonials;
