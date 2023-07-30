import {
  Avatar,
  Button,
  Card,
  Divider,
  Grow,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  AvaSize,
  H5style,
  LabelStyle,
  LabelStyle2,
  SideNoteStyle,
} from "../../../utils/constants";
import Pagani from "../../../assets/pagani.jpg";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import UserForm from "./UserForm";
import useNotif from "../../../hooks/useNotif";
import ApiClient from "../../../services/ApiClient";

const UserCard = ({
  ind,
  id,
  name,
  picurl,
  esurat,
  addr,
  nomer,
  dibuat,
  tipe,
  done,
  active,
  refresh,
  tData
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { infoToast, updateToast } = useNotif();

  const deleteType = async () => {
    setIsLoading(true);
    infoToast('menghapus user..')
    try {
      const delTy = await ApiClient.delete(`user/${id}`);
      setIsLoading(false);
      updateToast('User dihapus.', 'success')
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
    <Grow in={true} unmountOnExit mountOnEnter timeout={ind ? ind * 100 : 100}>
      <Card
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: "300px",
          height: "425px",
          padding: "1vw",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
          <AccessTimeRoundedIcon sx={SideNoteStyle} />
          <Typography sx={{ ...SideNoteStyle, marginLeft: "3%" }}>
            {dibuat?.slice(0,10)}
          </Typography>
          <Typography variant="body" sx={{ ...H5style, marginLeft: "auto" }}>
            {tipe}
          </Typography>
        </div>
        <Avatar
          src={picurl}
          sx={{
            height: AvaSize.profile,
            width: AvaSize.profile,
            margin: "0.5vw 0",
            boxShadow: "1px 1px 5px 2px rgba(0,0,0,0.7)",
          }}
        />
        <Typography variant="h6" sx={H5style}>
          {name}
        </Typography>
        <Typography variant="body" sx={SideNoteStyle}>
          {esurat}
        </Typography>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            margin: "10px 0",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={H5style}>
              {active}
            </Typography>
            <Typography variant="body" sx={H5style}>
              pesanan aktif
            </Typography>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={{ ...H5style, color: "#00ff00" }}>
              {done}
            </Typography>
            <Typography variant="body" sx={H5style}>
              pesanan selesai
            </Typography>
          </div>
        </div>
        <Divider sx={{ width: "90%", margin: "3% 0" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px 1vw",
            width: "100%",
          }}
        >
          <Typography
            variant="body"
            sx={{
              ...LabelStyle2,
              width: "100%",
              textAlign: "center",
            }}
          >
            {nomer}
          </Typography>
          <Typography
            variant="body"
            sx={{
              ...LabelStyle2,
              width: "100%",
              textAlign: "center",
            }}
          >
            {addr}
          </Typography>
        </div>
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "10%",
            gap: "0.5vw",
          }}
        >
          <Button
            sx={LabelStyle}
            startIcon={<BorderColorRoundedIcon sx={{ scale: "0.8" }} />}
            onClick={() => handleOpen()}
          >
            Edit
          </Button>
          <Divider orientation="vertical" />
          <Button disabled={isLoading} sx={{ ...LabelStyle, color: "#ff0000" }} onClick={() => deleteType()}>Delete</Button>
        </div>
        <Modal
          open={modalOpen}
          onClose={() => handleClose()}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Paper
            sx={{
              width: "750px",
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
            <UserForm title="Edit Data User" tData={tData} id={id} type={tipe} alamat={addr} email={esurat} fone={nomer} nama={name} refresh={() => refresh()} url={picurl} onClose={() => handleClose()} />
          </Paper>
        </Modal>
      </Card>
    </Grow>
  );
};

export default UserCard;
