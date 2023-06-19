import { Button } from "@mui/material";
import React from "react";

const Login = ({ setMode }) => {
  return (
    <div>
      belum memiliki akun?{" "}
      <Button variant="text" onClick={() => setMode()}>
        Register
      </Button>
    </div>
  );
};

export default Login;
