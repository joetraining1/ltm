import { Pagination, PaginationItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { H5style } from "../../../utils/constants";
import BankCard from "./BankCard";
import AccountCard from "./AccountCard";

const BankGridDisplayer = ({ judul, datasets, accounts, refresh, bankList }) => {
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
            activeDataset?.length < 3
              ? "repeat(auto-fit, minmax(250px, 300px))"
              : "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1vw",
          overflow: "auto",
          alignContent: "start",
          transition: "width 0.4s ease, height 0.4s ease",
          padding: "1vw",
          height:
            activeDataset?.length < 4
              ? "41svh"
              : activeDataset?.length < 7
              ? "75svh"
              : "100svh",
        }}
      >
        {activeDataset?.map((item, index) => {
          if (accounts) {
            return (
              <AccountCard
                key={item.id}
                akun={item.norek}
                user={item.name}
                bank={item.bank_name}
                id={item.id}
                pic={item.url}
                bId={item.bank_id}
                dibuat={item.createdAt.slice(0, 10)}
                ind={index}
                refresh={() => refresh()}
                bankList={bankList}
              />
            );
          }
          return (
            <BankCard
              key={item.id}
              pic={item.url}
              dibuat={item.createdAt.slice(0,10)}
              acronim={item.acronim}
              nama={item.title}
              ind={index}
              id={item.id}
              refresh={() => refresh()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BankGridDisplayer;
