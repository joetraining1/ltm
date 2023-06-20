import { Card, Pagination, PaginationItem } from "@mui/material";
import React from "react";
import { LabelStyle } from "../../../utils/constants";
import PaymentItem from "./PaymentItem";

const PaymentData = () => {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          gap: '1vw'
        }}
      >
        <PaymentItem />
        <PaymentItem />
        <PaymentItem />
      </div>
      <Pagination
        count={10}
        renderItem={(item) => <PaginationItem sx={LabelStyle} {...item} />}
      />
    </React.Fragment>
  );
};

export default PaymentData;
