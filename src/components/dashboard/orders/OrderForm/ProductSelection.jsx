import {
  Divider,
  MenuItem,
  Pagination,
  PaginationItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import {
  CategoryItem,
  H5style,
  LabelStyle,
  LabelStyle2,
  SideNoteStyle,
  colorHex,
} from "../../../../utils/constants";
import { useState } from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ApiClient from "../../../../services/ApiClient";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addDataset } from "../../../../redux/slices/adminOFSlice";
import ProductItem from "./ProductItem";

const ProductSelection = () => {
  const [pageActive, setPageActive] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [datas, setDatas] = useState([]);
  const [errorMsg, setErrorMsg] = useState({});
  const [active, setActive] = useState({
    id: 0,
    title: "",
  });

  // this part needs to determine the number of variant unit and amount all around
  // and the order details itself qty amount
  // divided function is selecting and then calculating

  const handleChangePage = (event, value) => {
    setPageActive(value - 1);
  };

  const user = useSelector((state) => state.auth.authState);
  const dataset = useSelector((state) => state.aof.dataset);
  console.log(dataset);
  const dispatch = useDispatch();

  const getType = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get("product/selection").then((res) => {
      return res.data;
    });
    setDatas(reqType.result);
    setIsLoading(false);
    return;
  };

  useEffect(() => {
    if (user.type !== "") {
      getType();
      return;
    }
    return;
  }, []);

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

  const Hero = MultiArray(dataset, 5);

  let activeDataset;

  const HeroItem = Hero?.map((item, index) => {
    if (pageActive === index) {
      return (activeDataset = item.dataset);
    }
    return null;
  });

  const handleClick = (id, title, price, ctg) => {
    dispatch(
      addDataset([
        ...dataset,
        {
          product_id: id,
          qty: 1,
          amount: price,
          title: title,
          price: price,
          ctg: ctg
        },
      ])
    );
    setActive({
      id: id,
      title: title,
    });
    return;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        gap: "10px",
        height: "100%",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          height: "6svh",
          display: "flex",
          alignItems: "center",
          padding: "0.75em 1vw",
        }}
      >
        <AddBoxOutlinedIcon sx={{ color: colorHex.iconColor }} />
        <Divider
          orientation="vertical"
          sx={{
            margin: "0 0.3vw 0 1vw",
          }}
        />
        <TextField
          label="Pilih product"
          sx={{
            width: "100%",
            minHeight: "5px",
            display: "flex",
            justifyContent: "center",
          }}
          size="small"
          select
          InputLabelProps={{
            sx: {
              ...LabelStyle,
              top: "10%",
              fontSize: "0.95em",
            },
          }}
          helperText={errorMsg?.msg}
          FormHelperTextProps={{
            sx: {
              color: "#ff0000",
              opacity: "0.8",
              fontSize: "0.7em",
              lineHeight: 0,
              marginTop: "1%",
              ...LabelStyle,
            },
          }}
          defaultValue={active.title}
          value={active.title}
          SelectProps={{
            MenuProps: {
              sx: {
                "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                  height: "150px",
                },
              },
            },
          }}
          InputProps={{
            sx: {
              "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                border: "none",
                outline: "none",
              },
            },
          }}
          inputProps={{
            sx: {
              ...H5style,
              paddingBottom: 0,
            },
          }}
        >
          {datas?.map((item, index) => {
            return (
              <MenuItem
                key={item.id}
                value={item.title}
                sx={{
                  ...H5style,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
                onClick={() => handleClick(item.id, item.title, item.price, item.kategori)}
              >
                {item.title}
              </MenuItem>
            );
          })}
        </TextField>
      </Paper>
      {activeDataset?.map((item, index) => {
        return (
          <ProductItem
            key={item.product_id}
            product_id={item.product_id}
            price={item.price}
            title={item.title}
            qty={item.qty}
            ctg={item.ctg}
          />
        );
      })}
      {dataset?.length < 6 ? null : (
        <Pagination
          count={Hero.length}
          sx={{
            marginTop: "auto",
          }}
          page={pageActive + 1}
          renderItem={(item) => <PaginationItem sx={H5style} {...item} />}
          onChange={handleChangePage}
        />
      )}
    </div>
  );
};

export default ProductSelection;
