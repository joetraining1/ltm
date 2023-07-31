import React, { useEffect } from "react";
import { H5style } from "../../../utils/constants";
import { useState } from "react";
import { Typography } from "@mui/material";
import ShowcaseCard from "./ShowcaseCard";
import ApiClient from "../../../services/ApiClient";

const ShowCaseDisplayer = ({ category, ctgId, dataset }) => {
  const [datas, setDatas] = useState(dataset ? dataset : []);
  const [ctitle, setCtitle] = useState(category ? category : "")
  const [cId, setCid] = useState(ctgId ? ctgId : 1)
  const [pageActive, setPageActive] = useState(0);


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


  const Hero = MultiArray(dataset, 9);
  const HeroItem = Hero.map((item, index) => {
    if (pageActive === index) {
      return (activeDataset = item.dataset);
    }
    return null;
  });


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "fit-content",
        gap: "1vw",
      }}
    >
      <Typography variant="h5" sx={H5style}>
        {category}
      </Typography>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 300px))",
          width: "100%",
          gap: "1vw",
          height: 'auto'
        }}
      >
        {activeDataset?.map((item, index) => {
          return (
            <ShowcaseCard
              key={item.id}
              id={item.id}
              price={item.price}
              stock={item.stock}
              title={item.title}
              url={item.url}
              ind={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowCaseDisplayer;
