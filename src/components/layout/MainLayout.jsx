import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
