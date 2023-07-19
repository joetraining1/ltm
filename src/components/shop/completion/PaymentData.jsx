import { Card, Pagination, PaginationItem } from "@mui/material";
import React, { useState } from "react";
import { LabelStyle } from "../../../utils/constants";
import PaymentItem from "./PaymentItem";

const PaymentData = () => {
  const [pageActive, setPageActive] = useState(0);
  const [datas, setDatas] = useState([...Array(10)]);

  const handleChangePage = (event, value) => {
    setPageActive(value - 1);
  };

  const MultiArray = (arr, rows) => {
    const ArrSlice = arr.reduce((acc, val, ind) => {
      const currentRow = Math.floor(ind / rows);
      if (!acc[currentRow]) {
        acc[currentRow] = [val];
      } else {
        acc[currentRow].push(val);
      }
      return acc;
    }, []);
    const SortedArr = ArrSlice.map((item, index) => {
      return {
        pId: index,
        dataset: item,
      };
    });

    return SortedArr;
  };

  let activeDataset;

  const Hero = MultiArray(datas, 3);
  const HeroItem = Hero.map((item, index) => {
    if (pageActive === index) {
      return (activeDataset = item.dataset);
    }
    return null;
  });


  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "70svh",
          gap: "1vw",
        }}
      >
        {activeDataset.map((item, index) => {
              return <PaymentItem key={index} ind={index}/>;
          }
        )}
      </div>
      <Pagination
        count={Hero.length}
        page={pageActive + 1}
        onChange={handleChangePage}
        renderItem={(item) => <PaginationItem sx={LabelStyle} {...item} />}
      />
    </React.Fragment>
  );
};

export default PaymentData;
