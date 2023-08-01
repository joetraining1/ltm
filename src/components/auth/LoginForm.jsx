import { Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { LabelStyle } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import ApiClient from "../../services/ApiClient";
import useNotif from "../../hooks/useNotif";
import Cookies from "js-cookie";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { infoToast, updateToast } = useNotif();

  const emailRef = useRef();
  const passRef = useRef();

  const dispatch = useDispatch();

  const loginSeq = async () => {
    setIsLoading(true);
    infoToast("Mencoba login..");
    try {
      const AuthPayload = {
        email: emailRef.current.value,
        password: passRef.current.value,
      };
      const loginApi = await ApiClient.post("login", AuthPayload).then(
        (response) => {
          return response.data;
        }
      );
      dispatch(login(loginApi?.result));
      Cookies.set("accessToken", loginApi?.access_token);
      Cookies.set("refreshToken", loginApi?.refresh_token);
      setIsLoading(false);
      updateToast("Selamat Datang!", "success");
      return;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      updateToast("terjadi kesalahan.", "error");
      return;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        gap: "10px",
        marginTop: "10%",
        height: "50%",
      }}
    >
      <TextField
        label="Email"
        size="small"
        inputRef={emailRef}
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
        type="password"
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
        onClick={() => loginSeq()}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginForm;
