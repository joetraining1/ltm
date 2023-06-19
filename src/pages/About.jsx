import React from "react";
import Abouts from '../assets/about.png';

const About = () => {
  return (
    <section
      id="home-about"
      style={{
        width: "100%",
        height: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%), url(${Abouts})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
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
        About
      </div>
    </section>
  );
};

export default About;
