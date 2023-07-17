import { Button, TextField } from "@mui/material";
import React, { useRef } from "react";
import { LabelStyle } from "../../utils/constants";

const LoginForm = () => {
  const emailRef = useRef();
  const passRef = useRef();

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
      >
        Login
      </Button>
    </div>
  );
};

export default LoginForm;
