import React from "react";
import Findus from "../assets/findus.jpg";

const FindUs = () => {
  return (
    <section
      id="home-find-us"
      style={{
        width: "100%",
        height: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${Findus})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "1280px",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Find Us
      </div>
    </section>
  );
};

export default FindUs;
