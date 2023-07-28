import React, { useState } from "react";
import { H5style, LabelStyle2, SideNoteStyle } from "../../../utils/constants";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import {
  Button,
  Card,
  Divider,
  Grow,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import StatusForm from "./StatusForm";

const StatusCard = ({ title, ind, desc, dibuat, id }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);

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
          padding: "1vw",
        }}
      >
        <Typography variant="h5" style={{ ...H5style, margin: "10px 0" }}>
          {title}
        </Typography>
        <Divider sx={{ width: "100%", margin: "3% 0 5% 0" }} />

        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            height: "60%",
            alignItems: "start",
            justifyContent: 'center'
          }}
        >
          <Typography
            variant="body"
            sx={{ ...LabelStyle2, textAlign: "center" }}
          >
            {desc}
          </Typography>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "auto",
          }}
        >
          <AccessTimeRoundedIcon sx={SideNoteStyle} />
          <Typography sx={{ ...SideNoteStyle }}>{dibuat}</Typography>
          <Button
            variant="text"
            sx={{ minWidth: "20px", marginLeft: "auto" }}
            onClick={() => handleOpen()}
          >
            <EditRoundedIcon />
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
            <StatusForm
              title="Edit Status Pesanan"
              nama={title}
              desc={desc}
              onClose={() => handleClose()}
            />
          </Paper>
        </Modal>
      </Card>
    </Grow>
  );
};

export default StatusCard;
