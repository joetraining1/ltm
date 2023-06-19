import React from "react";
import Testi from '../assets/testi.jpg'

const Testimonials = () => {
  return (
    <section
      id="home-testimonials"
      style={{
        width: "100%",
        height: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${Testi})`,
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
        Testimonial
      </div>
    </section>
  );
};

export default Testimonials;
