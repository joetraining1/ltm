import {
  Button,
  Card,
  Divider,
  Modal,
  Pagination,
  PaginationItem,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { H5style, LabelStyle, MetaStyle } from "../../../utils/constants";
import ProductCard from "./ProductCard";
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";

const ProductContainer = ({ title, data }) => {
  const [pageActive, setPageActive] = useState(0);
  const [datas, setDatas] = useState([...Array(14)]);

  const [modalOpen, setModalOpen] = useState(false);

  const handleChangePage = (event, value) => {
    setPageActive(value - 1);
  };

  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);

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

  const Hero = MultiArray(datas, 4);
  const HeroItem = Hero.map((item, index) => {
    if (pageActive === index) {
      return (activeDataset = item.dataset);
    }
    return null;
  });

  return (
    <Card
      sx={{
        width: "95%",
        height: activeDataset?.length < 5 ? "62svh" : "105svh",
        padding: "2vw",
        gap: "1vw",
        display: "flex",
        flexDirection: "column",
        transition: "height 0.4s ease",
        margin: '0 1vw'
      }}
      elevation={3}
    >
      <div style={MetaStyle}>
        <Typography variant="h5" sx={H5style}>
          Category produk : {title}
        </Typography>
        <Button
          variant="contained"
          startIcon={<PlusOneRoundedIcon />}
          sx={LabelStyle}
          onClick={() => handleOpen()}
        >
          Tambah Produk
        </Button>
      </div>
      <Divider />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 210px))",
          width: "100%",
          height: activeDataset?.length < 5 ? "45svh" : "85svh",
          transition: "height 0.4s ease",
          gap: "10px",
        }}
      >
        {activeDataset.map((item, index) => {
          return <ProductCard key={index} ind={index} />;
        })}
      </div>
      {datas?.length > 8 ? (
        <Pagination
          count={Hero.length}
          sx={{ marginTop: "2%", margin: "0 auto" }}
          page={pageActive + 1}
          renderItem={(item) => <PaginationItem sx={H5style} {...item} />}
          onChange={handleChangePage}
        />
      ) : null}
      <Modal
        open={modalOpen}
        onClose={() => handleClose()}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Paper
          sx={{
            width: "450px",
            height: "500px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            backgroundColor: "#fff",
          }}
        ></Paper>
      </Modal>
    </Card>
  );
};

export default ProductContainer;
