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
import { H5style, LabelStyle2, SideNoteStyle } from "../../../utils/constants";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import PaymentForm from "./PaymentForm";
import useNotif from "../../../hooks/useNotif";
import ApiClient from "../../../services/ApiClient";

const PaymentCard = ({ title, dibuat, ind, desc, id, refresh }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { infoToast, updateToast } = useNotif();

  const deleteType = async () => {
    setIsLoading(true);
    infoToast('menghapus data..')
    try {
      const delTy = await ApiClient.delete(`payment/${id}`);
      setIsLoading(false);
      updateToast('Berhasil menghapus data.', 'success')
      refresh();
      return;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      updateToast('Gagal.', 'error')
      return;
    }
  };

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
          height: "200px",
          alignItems: "center",
          padding: "1vw",
        }}
      >
        <Typography variant="h5" style={H5style}>
          {title}
        </Typography>
        <Divider sx={{ width: "100%", margin: "4% 0 0 0" }} />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            height: "60%",
            justifyContent: "center",
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
          <Typography sx={{ ...SideNoteStyle }}>{dibuat?.slice(0,10)}</Typography>
          <Button
            variant="text"
            sx={{ minWidth: "20px", marginLeft: "auto" }}
            onClick={() => handleOpen()}
          >
            <EditRoundedIcon />
          </Button>
          <Divider orientation="vertical" />
          <Button variant="text" sx={{ minWidth: "20px" }} onClick={() => deleteType()}>
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
            <PaymentForm
              title="Edit Metode Bayar"
              nama={title}
              desc={desc}
              id={id}
              onClose={() => handleClose()}
              port="edit"
              refresh={() => refresh()}
            />
          </Paper>
        </Modal>
      </Card>
    </Grow>
  );
};

export default PaymentCard;
