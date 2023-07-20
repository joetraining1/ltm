import React from "react";
import Findus from "../assets/findus.jpg";
import { Button, Card, Typography } from "@mui/material";
import { LabelStyle, LabelStyle2 } from "../utils/constants";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import FactoryRoundedIcon from "@mui/icons-material/FactoryRounded";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import Office from "../assets/office.png";
import Factory from '../assets/facto1.png';

const FindUs = () => {
  return (
    <section
      id="home-find-us"
      style={{
        width: "100%",
        height: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${Findus})`,
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
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Signika Negative, sans-serif",
            fontWeight: "700",
            color: "#fff",
            textShadow: '1px 2px 3px #000000'
          }}
        >
          Temukan Kami
        </Typography>
        <div
          style={{
            height: "7px",
            width: "150px",
            background: "#F3DE2C",
          }}
        />
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            paddingTop: '5%',
            alignItems: "start",
            justifyContent: "space-evenly",
          }}
        >
          <Card
            style={{
              width: "40%",
              height: "70%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "10%",
                display: "flex",
                alignItems: "center",
                padding: "2vw 1.5vw",
                borderRadius: "10px",
              }}
            >
              <Typography variant="h4" sx={{...LabelStyle,  color: "#FF007F"}}>
                Our Factory
              </Typography>
              <a href="https://goo.gl/maps/iBBy7iDR3x516GpYA" target="blank" style={{ marginLeft: 'auto'}}>
                <Button sx={{ marginLeft: "auto" }}>
                  <NearMeRoundedIcon
                    sx={{ fontSize: "2em" }}
                  />
                </Button>
              </a>
            </div>
            <div
              style={{
                width: "100%",
                height: "50%",
                backgroundImage: `url(${Factory})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div style={{
              height: '40%',
              width: '100%',
              display: 'flex',
              padding: '1.5vw'
            }}>
              <Typography variant="h6" sx={LabelStyle2}>
                Boyolali adalah kota yang terkenal dengan hasil susu sapi perah yang melimpah. 
                Dan jadi pilihan tepat bagi Marino's untuk merawat sapi perah dan meletakkan peternakan kami.
                <a href="https://goo.gl/maps/iBBy7iDR3x516GpYA" style={{ ...LabelStyle, color: "#008BF8"}}> klik untuk menuju Lokasi</a>
              </Typography>
            </div>
          </Card>
          <Card
            style={{
              width: "40%",
              height: "70%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "10%",
                display: "flex",
                alignItems: "center",
                padding: "2vw 1.5vw",
                borderRadius: "10px",
              }}
            >
              <Typography variant="h4" sx={{...LabelStyle, color: "#008BF8"}}>
                Our Office
              </Typography>
              <a href="https://goo.gl/maps/ZTYNgB8vFjNP3dqB8" target="blank" style={{ marginLeft: 'auto'}}>
                <Button sx={{ marginLeft: "auto" }}>
                  <NearMeRoundedIcon
                    sx={{ fontSize: "2em" }}
                  />
                </Button>
              </a>
            </div>
            <div
              style={{
                width: "100%",
                height: "50%",
                backgroundImage: `url(${Office})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div style={{
              height: '40%',
              width: '100%',
              display: 'flex',
              padding: '1.5vw'
            }}>
              <Typography variant="h6" sx={LabelStyle2}>
                Kami hadir di dekat anda! di tengah Kota Semarang adalah outlet sekaligus kantor Marino's Milk & Yoghurt.
                 Anda dapat memesan langsung dari sini jika kalian warga Kota Semarang yah!
                 <a href="https://goo.gl/maps/ZTYNgB8vFjNP3dqB8" style={{ ...LabelStyle, color: "#008BF8"}}> klik untuk menuju Lokasi</a>
              </Typography>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
