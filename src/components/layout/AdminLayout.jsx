import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.authState);

  if (user?.type === "User") {
    return navigate("/", {
        replace: true
    });
  }

  return <Outlet />;
};

export default AdminLayout;
