import React from "react";
import { LabelStyle } from "../../utils/constants";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import useNotif from "../../hooks/useNotif";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import ApiClient from "../../services/ApiClient";
import { login } from "../../redux/slices/authSlice";
import Cookies from "js-cookie";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef();
  const passRef = useRef();
  const phoneRef = useRef();
  const namaRef = useRef();

  const dispatch = useDispatch();

  const { infoToast, updateToast } = useNotif();

  const regisSeq = async () => {
    setIsLoading(true);
    infoToast('Mengirimkan pendaftaran..')
    try{
      const RegPayload = {
        name: namaRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
        password: passRef.current.value,
      }
      const regApi = await ApiClient.post('register', RegPayload).then((res) => {
        return res.data
      })
      dispatch(login(regApi?.result));
      Cookies.set("accessToken", regApi?.access_token);
      Cookies.set("refreshToken", regApi?.refresh_token);
      setIsLoading(false);
      updateToast("Selamat Datang!", "success");
    }catch(err){
      console.log(err)
      setIsLoading(false)
      updateToast('Gagal.', 'error')
      return
    }
    return
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        gap: "10px",
        marginTop: "10%",
        height: "60%",
      }}
    >
      <TextField
        label="Nama"
        inputRef={namaRef}
        size="small"
        sx={{ width: "100%" }}
        InputLabelProps={{
          sx: LabelStyle,
        }}
        inputProps={{
          sx: {
            ...LabelStyle,
          },
        }}
      />
      <TextField
        label="Phone"
        inputRef={phoneRef}
        size="small"
        sx={{ width: "100%" }}
        InputLabelProps={{
          sx: LabelStyle,
        }}
        inputProps={{
          sx: {
            ...LabelStyle,
          },
        }}
      />
      <TextField
        label="Email"
        inputRef={emailRef}
        size="small"
        sx={{ width: "100%" }}
        InputLabelProps={{
          sx: LabelStyle,
        }}
        inputProps={{
          sx: {
            ...LabelStyle,
          },
        }}
      />
      <TextField
        label="Password"
        inputRef={passRef}
        size="small"
        sx={{ width: "100%" }}
        InputLabelProps={{
          sx: LabelStyle,
        }}
        inputProps={{
          sx: {
            ...LabelStyle,
          },
        }}
      />
      <Button
        variant="contained"
        sx={{ ...LabelStyle, marginTop: "auto" }}
        size="small"
        onClick={() => regisSeq()}
      >
        Register
      </Button>
    </div>
  );
};

export default RegisterForm;
