import { Button, Card, Divider, Grow, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import { GuideToOrder, H5style } from "../../../utils/constants";

const Guide = () => {
  const navigate = useNavigate();

  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={300}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1vw",
          width: "100%",
          height: "fit-content",
          padding: "1vw",
          marginBottom: "10%",
        }}
      >
        <Button
          variant="text"
          onClick={() => navigate(-1)}
          sx={{
            width: "150px",
            fontFamily: "Signika Negative, sans-serif",
            color: "#262626",
            fontWeight: "600",
            fontSize: "1.2em",
          }}
          startIcon={<UndoRoundedIcon sx={{ scale: "1.2" }} />}
        >
          Back
        </Button>
        <Typography variant="h4" style={H5style}>
          Panduan Pemesanan
        </Typography>
        {GuideToOrder.map((item, ind) => {
          return (
            <Card
              sx={{
                display: "flex",
                padding: "1vw 2vw",
                width: "100%",
                height: "130px",
                justifyContent: "space-evenly",
                gap: "2vw",
                alignItems: "center",
              }}
              elevation={3}
              key={item.id}
            >
              <item.icon
                sx={{
                  width: "80px",
                  height: "100%",
                  color: "#136F63",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "100%",
                  gap: "10px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Signika Negative, sans-serif",
                    fontWeight: "600",
                    textAlign: "justify",
                  }}
                >
                  {item.title}
                </Typography>
                <Divider />
                <Typography
                  variant="body"
                  sx={{
                    fontFamily: "Signika Negative, sans-serif",
                    fontWeight: "600",
                    textAlign: "justify",
                  }}
                >
                  {item.description}
                </Typography>
              </div>
            </Card>
          );
        })}
      </div>
    </Grow>
  );
};

export default Guide;
