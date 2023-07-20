import {
  Button,
  Card,
  Divider,
  Grow,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import {
  H5style,
  LabelStyle,
  LabelStyle2,
  SideNoteStyle,
} from "../../../utils/constants";
import AccountForm from "./form/AccountForm";

const AccountCard = ({ bank, akun, user, id, pic, dibuat, ind }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => {
    setModalOpen(false);
    return;
  };
  const handleOpen = () => {
    setModalOpen(true);
    return;
  };

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
          paddingTop: "10px",
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
        <Divider sx={{ width: "90%" }} />

        <div
          style={{
            height: "100px",
            width: "100%",
            padding: "10px 1vw 0 1vw",
            marginTop: "auto",
            marginBottom: "5px",
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
            <div
              style={{ display: "flex", width: "70%", alignItems: "center" }}
            >
              <Typography variant="body" sx={LabelStyle2}>
                No. Rekening
              </Typography>
              <Typography
                variant="body"
                sx={{ ...LabelStyle2, marginLeft: "auto" }}
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
              <Typography variant="body" sx={LabelStyle2}>
                Pemilik
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
          <Button
            variant="text"
            sx={{ minWidth: "20px", marginLeft: "auto", ...LabelStyle }}
            endIcon={<EditRoundedIcon />}
            onClick={() => handleOpen()}
          >
            Edit
          </Button>
          <Divider orientation="vertical" />
          <Button variant="text" sx={{ minWidth: "20px" }}>
            <DeleteOutlineRoundedIcon sx={{ color: "#ff0000" }} />
          </Button>
        </div>
        <Modal
          open={modalOpen}
          onClose={() => handleClose()}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Paper
            sx={{
              width: "450px",
              minHeight: "350px",
              height: "fit-content",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1000,
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              padding: "2vw",
              alignItems: "center",
              borderRadius: "5px",
              gap: "0.5vw",
            }}
          >
            <AccountForm title="Edit Akun Bank" noRek={akun} bank={bank} onClose={() => handleClose()} />
          </Paper>
        </Modal>
      </Card>
    </Grow>
  );
};

export default AccountCard;
