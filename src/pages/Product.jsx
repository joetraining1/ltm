import React from "react";
import BGmilk from "../assets/cows4.png";

const Product = () => {
  return (
    <React.Fragment>
      <div
        style={{
          height: "fit-content",
          minHeight: "54svh",
          display: "flex",
          background: "#fff",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "6svh",
        }}
      >
        Product
      </div>
      <div
        style={{
          width: "100%",
          height: "25vh",
          backgroundImage: `url(${BGmilk})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom 28% right 0",
        }}
      />
    </React.Fragment>
  );
};

export default Product;
