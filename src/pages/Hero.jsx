import React from "react";
import Milk from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section
      id="home-hero"
      style={{
        width: "100%",
        height: "100svh",
        marginTop: "6svh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${Milk})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0 10px 50px 10px rgba(0,0,0, 0.2)',
      }}
    >
    <div style={{
        display: 'flex',
        width: '1280px',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      </div>
    </section>
  );
};

export default Hero;
