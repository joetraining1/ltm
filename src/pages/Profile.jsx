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
  MetaStyle,
  MetaStyle2,
  MetaStyle3,
  SideNoteStyle,
} from "../utils/constants";
import { useState } from "react";
import ApiClient from "../services/ApiClient";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import UserForm from "../components/dashboard/users/UserForm";
import NoData from "../components/global/NoData";
import { co } from "../redux/slices/orderFormSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [lastOrder, setLastOrder] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [types, setTypes] = useState([]);
  const [done, setDone] = useState(0);
  const [aqtiv, setAqtiv] = useState(0);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getTypes = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get("type").then((res) => {
      return res.data;
    });
    setTypes(reqType.result);
    setIsLoading(false);
    return;
  };

  const getType = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get("user").then((res) => {
      return res.data;
    });
    setDatas(reqType.result);
    setIsLoading(false);
    return;
  };

  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);

  const user = useSelector((state) => state.auth.authState);

  const completeIt = () => {
    dispatch(co)
    navigate(`/shop/payment`)
    return
  }

  const getUser = async () => {
    setIsLoading(true);
    try {
      const userApi = await ApiClient.get(`user/${user?.id}`).then((res) => {
        return res.data;
      });
      setLastOrder(userApi.last);
      setUserData(userApi.result);
      setAqtiv(userApi.active);
      setDone(userApi.done);
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
    getTypes();
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
            height: "85%",
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
            <Typography variant="h6" sx={{ ...H5style, textAlign: "center" }}>
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
            <Typography variant="h6" sx={{ ...H5style }}>
              Informasi Tambahan
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
            <div
              style={{
                width: "100%",
                height: "40%",
                margin: "auto 0",
                justifyContent: "space-evenly",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1vw",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h4" sx={{ ...H5style }}>
                  {aqtiv}
                </Typography>
                <Typography variant="body" sx={{ ...H5style }}>
                  pesanan aktif
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1vw",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h4" sx={{ ...H5style }}>
                  {done}
                </Typography>
                <Typography variant="body" sx={{ ...H5style }}>
                  pesanan selesai
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{ ...LabelStyle, width: "100%" }}
                onClick={() => handleOpen()}
              >
                Edit
              </Button>
            </div>
          </div>
        </Card>
        <Card
          elevation={3}
          sx={{
            width: "60%",
            height: "75%",
            display: "flex",
            flexDirection: "column",
            padding: "2vw",
          }}
        >
          <Typography variant="h5" sx={{ ...H5style }}>
            Pesanan pending
          </Typography>
          {lastOrder.length === 0 ? (
            <NoData prop={"pesanan apapun."} />
          ) : (
            <React.Fragment>
              <div
                style={{
                  width: "100%",
                  height: "40%",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div style={MetaStyle}>
                  <Typography variant="h5" sx={H5style}>
                    Total
                  </Typography>
                  <Typography variant="h5" sx={H5style}>
                  {console.log(lastOrder)}
                    Rp. {lastOrder[0]?.amount},000
                  </Typography>
                </div>
                <Divider />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: "0",
                  }}
                >
                  <div style={MetaStyle}>
                    <Typography variant="body" sx={H5style}>
                      Order No.
                    </Typography>
                    <Typography variant="h6" sx={H5style}>
                      0{lastOrder[0]?.id}
                    </Typography>
                  </div>
                  <div style={MetaStyle}>
                    <Typography variant="body" sx={H5style}>
                      Variant Produk
                    </Typography>
                    <Typography variant="h6" sx={H5style}>
                      {lastOrder[0]?.variant}
                    </Typography>
                  </div>
                  <div style={MetaStyle}>
                    <Typography variant="body" sx={H5style}>
                      Jumlah Produk
                    </Typography>
                    <Typography variant="h6" sx={H5style}>
                      {lastOrder[0]?.unit}
                    </Typography>
                  </div>
                  <div style={MetaStyle}>
                    <Typography
                      variant="body"
                      sx={{
                        ...SideNoteStyle,
                        marginLeft: "auto",
                        textAlign: "right",
                      }}
                    >
                      disarankan untuk melakukan pembayaran setelah biaya
                      pengiriman tercetak
                    </Typography>
                  </div>
                </div>
              </div>
              <Button
                variant="contained"
                sx={{
                  marginTop: "auto",
                  ...LabelStyle,
                }}
                onClick={() => completeIt()}
              >
                selesaikan
              </Button>
            </React.Fragment>
          )}
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
            alamat={userData.alamat}
            fone={userData.phone}
            nama={userData.name}
            url={userData.url}
            email={userData.email}
            id={userData.id}
            onClose={() => handleClose()}
            refresh={() => getUser()}
            type={userData.type}
            tData={types}
          />
        </Paper>
      </Modal>
    </div>
  );
};

export default Profile;
