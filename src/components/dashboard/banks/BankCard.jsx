import { Button, Card, Divider, Grow, Typography } from "@mui/material";
import React from "react";
import { H5style, LabelStyle2, SideNoteStyle } from "../../../utils/constants";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

const BankCard = ({ pic, nama, acronim, id, dibuat, ind }) => {
  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={ind * 100}>
      <Card
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          height: "275px",
          alignItems: "center",
          paddingTop: '25px'
        }}
      >
        <div
          style={{
            width: "150px",
            height: "150px",
            display: "grid",
            placeItems: "center",
          }}
        >
          <img
            src={pic}
            style={{
              objectFit: "cover",
              width: "100%",
            }}
          />
        </div>
        <Divider sx={{ width: "90%", margin: "3% 0" }} />

        <div
          style={{
            height: "100px",
            width: "100%",
            padding: "10px 1vw 0 1vw",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
              gap: "5px",
            }}
          >
            <div style={{ display: "flex", width: "70%" }}>
              <Typography variant="body" sx={LabelStyle2}>
                Nama Bank
              </Typography>
              <Typography
                variant="body"
                sx={{ ...LabelStyle2, marginLeft: "auto" }}
              >
                :
              </Typography>
            </div>
            <Typography
              variant="body"
              sx={{
                ...H5style,
                width: "100%",
              }}
            >
              {nama}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
              gap: "5px",
            }}
          >
            <div style={{ display: "flex", width: "70%" }}>
              <Typography variant="body" sx={LabelStyle2}>
                Acronim
              </Typography>
              <Typography
                variant="body"
                sx={{ ...LabelStyle2, marginLeft: "auto" }}
              >
                :
              </Typography>
            </div>
            <Typography
              variant="body"
              sx={{
                ...H5style,

                width: "100%",
              }}
            >
              {acronim}
            </Typography>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "5px 1vw 1vw 1vw",
            gap: "10px",
          }}
        >
          <AccessTimeRoundedIcon sx={SideNoteStyle} />
          <Typography sx={{ ...SideNoteStyle }}>{dibuat}</Typography>
          <Button variant="text" sx={{ minWidth: "20px", marginLeft: "auto" }}>
            <EditRoundedIcon />
          </Button>
          <Divider orientation="vertical" />
          <Button variant="text" sx={{ minWidth: "20px" }}>
            <DeleteOutlineRoundedIcon sx={{ color: "#ff0000" }} />
          </Button>
        </div>
      </Card>
    </Grow>
  );
};

export default BankCard;
