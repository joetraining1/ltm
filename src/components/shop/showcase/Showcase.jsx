import {
  Button,
  Divider,
  InputBase,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import {
  FilterProduk,
  H4style,
  H5style,
  MetaStyle,
} from "../../../utils/constants";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Cart from "../cart/Cart";
import ShowcaseCard from "./ShowcaseCard";
import { useState } from "react";
import ApiClient from "../../../services/ApiClient";
import useNotif from "../../../hooks/useNotif";
import NoData from "../../global/NoData";
import ShowCaseDisplayer from "./ShowCaseDisplayer";

const Showcase = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [keywords, setKeywords] = useState("");
  const [datas, setDatas] = useState([]);
  const [queryBox, setQueryBox] = useState(false);
  const [filBox, setFilBox] = useState(false);
  const [qRes, setQres] = useState([]);
  const [filter, setFilters] = useState([
    {
      ctg_id: 0,
      title: "All Item"
    },
  ]);
  const [activeF, setActiveF] = useState({
    ctg_id: 0,
    title: "All Item",
  });
  const [actCid, setActCid] = useState(1);

  const { infoToast, updateToast } = useNotif();

  const sendQ = async () => {
    setQueryBox(true);
    setIsLoading(true);
    setFilBox(false);
    infoToast("mencari produk..");
    try {
      const payload = {
        keyword: keywords,
      };
      const product = await ApiClient.post("search", payload).then((res) => {
        return res.data;
      });
      setQres(product.result);
      setIsLoading(false);
      updateToast("Berhasil", "success");
      return;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      updateToast("Gagal.", "error");
      return;
    }
  };

  const filterCtg = async (id) => {
    setQueryBox(false);
    setIsLoading(true);
    if(id === 0){
      const reqType = await ApiClient.get("showcase").then((res) => {
        return res.data;
      });
      setDatas(reqType.dataset);
      setIsLoading(false);
      return
    }
    const product = await ApiClient.get(`showcase/${id}`).then((res) => {
      return res.data;
    });
    setDatas([
      {
        dataValues: {
          ctg_id: product.ctg.id,
          title: product.ctg.title
        },
        result: product.result
      }
    ]);
    setIsLoading(false);
    return;
  };

  const setterF = async(ctg_id, title) => {
    filterCtg(ctg_id)
    setActiveF({
      ctg_id: ctg_id,
      title: title
    })
    return
  }


  const getType = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get("showcase").then((res) => {
      return res.data;
    });
    if(filter.length === 1){
      setFilters([
        ...filter,
        ...reqType.ctgs
      ])
    }
    setDatas(reqType.dataset);
    setIsLoading(false);
    return;
  };

  useEffect(() => {
    if (datas?.length === 0) {
      getType();
      return;
    }
    return;
  }, [datas]);

  useEffect(() => {
    if(keywords === ""){
      setQueryBox(false)
      getType()
      return
    }
    return
  }, [keywords])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "fit-content",
        width: "100%",
        gap: "1vw",
      }}
    >
      <Typography variant="h4" sx={H4style}>
        All items
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-evenly",
          gap: "1vw",
          height: "50px",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            width: "100%",
            padding: "10px 1vw",
            height: "100%",
            justifyContent: "space-evenly",
            gap: "15px",
          }}
          elevation={1}
        >
          <InputBase
            sx={{
              width: "100%",
              height: "100%",
            }}
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            inputProps={{
              sx: {
                fontFamily: "Signika Negative, sans-serif",
                fontWeight: "600",
                color: "#262626",
              },
            }}
            placeholder="Temukan produk.."
          />
          <Divider orientation="vertical" />
          <Button variant="text" disabled={isLoading} onClick={() => sendQ()}>
            <SearchRoundedIcon />
          </Button>
        </Paper>
        <Paper
          sx={{
            width: "30%",
            height: "53px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            label="filter"
            select
            sx={{ width: "100%" }}
            InputProps={{
              sx: {
                height: "100%",
                fontFamily: "Signika Negative, sans-serif",
                fontWeight: "600",
                minHeight: "10px",
                "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  border: "none",
                  outline: "none",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                fontFamily: "Signika Negative, sans-serif",
                fontWeight: "600",
                top: "18%",
                fontSize: "1.1em",
              },
            }}
            value={activeF.title}
            defaultValue={activeF.title}
          >
            {filter?.map((item, index) => {
              return (
                <MenuItem
                  key={item.ctg_id}
                  value={item.title}
                  sx={H5style}
                  onClick={() => setterF(item.ctg_id, item.title)}
                >
                  {item.title}
                </MenuItem>
              );
            })}
          </TextField>
        </Paper>
        <Cart mode="two" />
      </div>
      {queryBox ? (
        qRes.length === 0 ? (
          <NoData />
        ) : (
          <React.Fragment>
            <Typography variant="h6" sx={{ ...H5style }}>
              menampilkan {qRes.length} produk
            </Typography>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 300px))",
                width: "100%",
                gap: "1vw",
              }}
            >
              {qRes.map((item) => {
                return (
                  <ShowcaseCard
                    key={item.id}
                    price={item.price}
                    url={item.url}
                    id={item.id}
                    stock={item.stock}
                    title={item.title}
                  />
                );
              })}
            </div>
          </React.Fragment>
        )
      ) : datas?.length === 0 ? (
        <NoData />
      ) : (
        datas?.map((item, index) => {
          return (
            <ShowCaseDisplayer
              key={index}
              ctgId={item.dataValues.ctg_id}
              category={item.dataValues.title}
              dataset={item.result}
            />
          );
        })
      )}
    </div>
  );
};

export default Showcase;
