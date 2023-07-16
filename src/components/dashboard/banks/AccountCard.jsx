import { Button, Card, Divider, Grow, Typography } from "@mui/material";
import React from "react";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { H5style, LabelStyle, SideNoteStyle } from "../../../utils/constants";

const AccountCard = ({ bank, akun, user, id, pic, dibuat, ind }) => {
  return (
    <Grow in={true} unmountOnExit mountOnEnter timeout={ind * 100}>
      <Card
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          height: "300px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "175px",
            height: "175px",
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
        <div
          style={{
            height: "100px",
            width: "100%",
            padding: "10px 1vw 0 1vw",
            marginTop: "auto",
            marginBottom: '5px'
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
            <div style={{ display: "flex", width: "70%", alignItems: 'center' }}>
              <Typography variant="body" sx={H5style}>
                No. Rekening
              </Typography>
              <Typography
                variant="body"
                sx={{ ...H5style, marginLeft: "auto" }}
              >
                :
              </Typography>
            </div>
            <Typography
              variant="h6"
              sx={{
                ...H5style,
                width: "100%",
              }}
            >
              {akun}
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
              <Typography variant="body" sx={H5style}>
                Nama Bank
              </Typography>
              <Typography
                variant="body"
                sx={{ ...H5style, marginLeft: "auto" }}
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
              {bank}
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
              <Typography variant="body" sx={H5style}>
                Pemilik
              </Typography>
              <Typography
                variant="body"
                sx={{ ...H5style, marginLeft: "auto" }}
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
              {user}
            </Typography>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "15px 1vw",
            gap: "10px",
          }}
        >
          <AccessTimeRoundedIcon sx={SideNoteStyle} />
          <Typography sx={{ ...SideNoteStyle }}>{dibuat}</Typography>
          <Button variant="text" sx={{ minWidth: "20px", marginLeft: "auto", ...LabelStyle }} endIcon={<EditRoundedIcon />}>
            Edit
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

export default AccountCard;
