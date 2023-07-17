import {
  Button,
  Fade,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import { H5style, LabelStyle, LabelStyle2 } from "../../utils/constants";
import LoginForm from "./LoginForm";

const Login = ({ setMode }) => {
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
          Sign In
        </Typography>
        <div
          style={{
            height: "7px",
            width: "150px",
            background: "#F3DE2C",
          }}
        />
        <LoginForm />
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
            belum memiliki akun ?
          </Typography>
          <Button
            variant="text"
            sx={{ ...LabelStyle, paddingBottom: "3px" }}
            onClick={() => setMode()}
          >
            Register
          </Button>
        </div>
      </React.Fragment>
  );
};

export default Login;
