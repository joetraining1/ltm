import { AppBar, Avatar, Button, Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Cart from "../shop/cart/Cart";
import Handler from "../auth/Handler";
import { Logo } from "../../utils/constants";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      style={{
        display: "flex",
        width: "100%",
        height: "6svh",
        flexDirection: "row",
        background: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "1280px",
          height: "100%",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "10px 0",
          gap: "1vw",
        }}
      >
        <HashLink
          to="/#home-hero"
          style={{ fontWeight: "700", fontSize: "1.7em", color: "#FF007F", }}
        >
          Marino's
        </HashLink>
        <Divider orientation="vertical" />
        <HashLink
          to="/#home-about"
          style={{ fontWeight: "600", fontSize: "1.3em", color: "#226CE0" }}
        >
          About
        </HashLink>
        <HashLink
          to="/#home-testimonials"
          style={{ fontWeight: "600", fontSize: "1.3em", color: "#226CE0" }}
        >
          Testimonials
        </HashLink>
        <HashLink
          to="/#home-find-us"
          style={{ fontWeight: "600", fontSize: "1.3em", color: "#226CE0", marginRight: 'auto' }}
        >
          Find Us
        </HashLink>
        <Divider
          orientation="vertical"
          sx={{ marginRight: "1%" }}
        />
        <HashLink
          to="/#home-hero"
          style={{ fontWeight: "700", fontSize: "1.7em", color: "#F72585" }}
        >
          <img
            src={Logo}
            style={{
              width: "75px",
              height: "auto",
              margin: "75px 2% 0 2%",
              filter: "drop-shadow(2px 2px 5px rgba(0,0,0,1))",
            }}
          />
        </HashLink>
        <Divider
          orientation="vertical"
          sx={{ marginLeft: "1%" }}
        />
        <Link
          to="product"
          style={{ fontWeight: "600", fontSize: "1.3em", color: "#226CE0", marginLeft: 'auto' }}
        >
          Product
        </Link>
        <Link
          to="shop"
          style={{ fontWeight: "600", fontSize: "1.3em", color: "#226CE0" }}
        >
          Shop
        </Link>
        <Link
          to="dashboard"
          style={{ fontWeight: "600", fontSize: "1.3em", color: "#226CE0" }}
        >
          Dashboard
        </Link>
        <Divider orientation="vertical" />
        <Handler />
        <Cart mode="one" />
      </div>
    </AppBar>
  );
};

export default Navbar;
