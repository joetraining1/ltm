import { Button, Typography } from "@mui/material";
import React from "react";
import { H5style, LabelStyle, LabelStyle2 } from "../../utils/constants";
import RegisterForm from "./RegisterForm";

const Register = ({ setMode }) => {
  return (
    <React.Fragment>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Signika Negative, sans-serif",
          fontWeight: "700",
          margin: "5% 0",
        }}
      >
        Register
      </Typography>
      <div
        style={{
          height: "7px",
          width: "150px",
          background: "#F3DE2C",
        }}
      />
      <RegisterForm />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "auto",
        }}
      >
        <Typography variant="body" sx={LabelStyle2}>
          sudah memiliki akun ?
        </Typography>
        <Button
          variant="text"
          sx={{ ...LabelStyle, paddingBottom: "3px" }}
          onClick={() => setMode()}
        >
          Login
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Register;
