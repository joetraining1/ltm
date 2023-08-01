import { Pagination, PaginationItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { H5style, LabelStyle } from "../../../../utils/constants";
import PaymentItem from "../../completion/PaymentItem";
import InvoiceItemDetail from "./InvoicesItemDetail";

const InvoicesItem = ({ dataset }) => {
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

  const Hero = MultiArray(dataset, 3);
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
        alignItems: "center",
        gap: "1em",
        height: "65%",
      }}
    >
      <Typography
        variant="h5"
        sx={{ ...H5style, width: "100%", textAlign: "center" }}
      >
        Detail Pesanan
      </Typography>
      <div
        style={{
          height: "7px",
          width: "150px",
          background: "#F3DE2C",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "10px",
          height: "100%",
        }}
      >
        {activeDataset?.map((item, index) => {
          console.log(item);
          return (
            <InvoiceItemDetail
              key={index}
              ind={index}
              amount={item.amount}
              kategori={item.kategori}
              price={item.price}
              produk={item.produk}
              qty={item.qty}
              url={item.url}
            />
          );
        })}
      </div>
      {dataset?.length < 4 ? null : (
        <Pagination
          count={Hero.length}
          page={pageActive + 1}
          onChange={handleChangePage}
          renderItem={(item) => <PaginationItem sx={LabelStyle} {...item} />}
          sx={{
            marginTop: "auto",
          }}
        />
      )}
    </div>
  );
};

export default InvoicesItem;
