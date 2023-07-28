import { Pagination, PaginationItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { H5style } from "../../../utils/constants";
import BankCard from "./BankCard";
import AccountCard from "./AccountCard";

const BankGridDisplayer = ({ judul, datasets, accounts }) => {
  const [pageActive, setPageActive] = useState(0);

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

  const Hero = MultiArray(datasets || accounts, 9);
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
        width: "100%",
        height: "fit-content",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", width: "100%" }}>
        <Typography variant="h5" sx={H5style}>
          {judul}
        </Typography>
        {Hero.length < 2 ? null : (
          <Pagination
            sx={{ marginLeft: "auto" }}
            page={pageActive + 1}
            onChange={handleChangePage}
            count={Hero.length}
            renderItem={(item) => <PaginationItem sx={H5style} {...item} />}
          />
        )}
      </div>
      <div
        style={{
          display: "grid",
          width: "100%",
          gridTemplateColumns:
            activeDataset.length < 3
              ? "repeat(auto-fit, minmax(250px, 300px))"
              : "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1vw",
          overflow: "auto",
          alignContent: "start",
          transition: "width 0.4s ease, height 0.4s ease",
          padding: "1vw",
          height:
            activeDataset.length < 4
              ? "34svh"
              : activeDataset.length < 7
              ? "64svh"
              : "92svh",
        }}
      >
        {activeDataset?.map((item, index) => {
          if (accounts) {
            return (
              <AccountCard
                key={item.id}
                akun={item.norek}
                user={item.user}
                bank={item.bank}
                id={item.id}
                pic={item.picurl}
                dibuat={item.createdAt}
                ind={index}
              />
            );
          }
          return (
            <BankCard
              key={item.id}
              pic={item.fotourl}
              dibuat={item.createdAt}
              acronim={item.acronim}
              nama={item.nama}
              ind={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BankGridDisplayer;
