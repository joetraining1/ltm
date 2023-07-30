import {
  Avatar,
  Button,
  Card,
  Divider,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import {
  H4style,
  H5style,
  LabelStyle,
  LabelStyle2,
  MetaStyle2,
  MetaStyle3,
} from "../utils/constants";
import { useState } from "react";
import ApiClient from "../services/ApiClient";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import UserForm from "../components/dashboard/users/UserForm";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [lastOrder, setLastOrder] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);

  const user = useSelector((state) => state.auth.authState);

  const getUser = async () => {
    setIsLoading(true);
    try {
      const userApi = await ApiClient.get(`user/${user?.id}`).then((res) => {
        return res.data;
      });
      setLastOrder(userApi.last);
      setUserData(userApi.result);
      setIsLoading(false);
      return;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      return;
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "fit-content",
        width: "100%",
        gap: "1vw",
      }}
    >
      <Typography variant="h4" sx={H4style}>
        Profile
      </Typography>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          height: "50svh",
          alignItems: "start",
          gap: "1vw",
        }}
      >
        <Card
          elevation={3}
          sx={{
            width: "100%",
            height: "80%",
            display: "flex",
            padding: "2vw",
            justifyContent: "space-evenly",
            alignItems: "start",
            gap: "1vw",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "75%",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Avatar
              src={userData?.url ? userData.url : ""}
              sx={{
                width: 154,
                height: 154,
                boxShadow: "1px 1px 5px 2px rgba(0,0,0,0.7)",
              }}
            />
            <Typography variant="h5" sx={{ ...H5style, textAlign: 'center' }}>
              {userData.name}
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Typography variant="body" sx={{ ...LabelStyle2 }}>
                {userData.phone}
              </Typography>
              <Typography variant="body" sx={{ ...LabelStyle2 }}>
                {userData.email}
              </Typography>
            </div>
            <Typography variant="h6" sx={{ ...H5style, marginTop: "auto" }}>
              user id: 0{userData.id}
            </Typography>
            <Typography variant="body" sx={{ ...LabelStyle2 }}>
              {userData.createdAt ? userData.createdAt.slice(0, 10) : ""}
            </Typography>
          </div>
          <Divider orientation="vertical" />
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Button
                variant="text"
                sx={{ ...LabelStyle }}
                onClick={() => handleOpen()}
              >
                Edit
              </Button>
            </div>
            <Divider />
            <Typography variant="h6" sx={{ ...H5style }}>
              Detail informasi
            </Typography>
            <div style={{ ...MetaStyle3, gap: "1vw", alignItems: "start" }}>
              <div style={MetaStyle2}>
                <Typography variant="body" style={{ ...LabelStyle2 }}>
                  alamat
                </Typography>
                <Typography variant="body" style={{ ...LabelStyle2 }}>
                  :
                </Typography>
              </div>
              <Typography
                variant="body"
                sx={{ ...H5style, marginLeft: "auto", width: "100%" }}
              >
                {userData.alamat !== null
                  ? userData.alamat
                  : "lengkapi informasi anda"}
              </Typography>
            </div>
            <div style={{ ...MetaStyle3, gap: "1vw", alignItems: "start" }}>
              <div style={MetaStyle2}>
                <Typography variant="body" style={{ ...LabelStyle2 }}>
                  tipe akun
                </Typography>
                <Typography variant="body" style={{ ...LabelStyle2 }}>
                  :
                </Typography>
              </div>
              <Typography
                variant="body"
                sx={{ ...H5style, marginLeft: "auto", width: "100%" }}
              >
                {userData.type !== null
                  ? userData.type
                  : "lengkapi informasi anda"}
              </Typography>
            </div>
          </div>
        </Card>
        <Card
          elevation={3}
          sx={{
            width: "60%",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            padding: "2vw",
          }}
        >
          <Typography variant="h5" sx={{ ...H5style }}>
            Pesanan pending
          </Typography>
        </Card>
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
          <UserForm
            title={`Edit user ${userData.name}`}
            mode="add"
            alamat={userData.alamat}
            fone={userData.phone}
            nama={userData.name}
            url={userData.url}
            email={userData.email}
            onClose={() => handleClose()}
          />
        </Paper>
      </Modal>
    </div>
  );
};

export default Profile;
