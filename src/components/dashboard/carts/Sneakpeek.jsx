import {
  Avatar,
  Button,
  Card,
  Divider,
  Grow,
  Pagination,
  PaginationItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  AvaSize,
  H5style,
  LabelStyle2,
  SideNoteStyle,
} from "../../../utils/constants";
import Paganini from "../../../assets/pagani.jpg";
import PeekItem from "./PeekItem";
import useNotif from "../../../hooks/useNotif";
import ApiClient from "../../../services/ApiClient";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Sneakpeek = () => {
  const [mode, setMode] = useState(false);
  const [pageActive, setPageActive] = useState(0);
  const [datas, setDatas] = useState([]);
  const [metas, setMetas] = useState({});
  const { id } = useParams();
  const [states, setStates] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeId, setActiveId] = useState(id);

  const user = useSelector((state) => state.auth.authState);
  console.log(metas)

  const navigate = useNavigate();
  const { infoToast, updateToast, toastInfo } = useNotif();

  const getType = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get(`cart/quick/${id}`).then((res) => {
      return res.data;
    });
    setMetas(reqType.result.metadata);
    setDatas(reqType.result.dataset);
    setIsLoading(false);
    return;
  };

  const falseApi = async () => {
    setActiveId(id);
    setStates(false);
    return;
  };

  id === activeId ? null : falseApi();
  useEffect(() => {
    if (user?.type !== "") {
      if (!states) {
        getType();
        setStates(true);
        return;
      }
      return;
    }
    return;
  }, [states]);


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
    <Grow in={true} unmountOnExit mountOnEnter timeout={200}>
      <Card
        sx={{
          width: "100%",
          height: "85%",
          padding: "1vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: 'flex-start',
          gap: "1vw",
        }}
        elevation={3}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "1vw",
            alignItems: "center",
            height: "15%",
            paddingLeft: "1vw",
          }}
        >
          <Avatar
            sx={{ height: AvaSize.profile2, width: AvaSize.profile2 }}
            src={Paganini}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography variant="h5" sx={H5style}>
              Paganini
            </Typography>
            <Typography variant="body" sx={SideNoteStyle}>
              pagani@gmail.com
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              marginLeft: "auto",
              width: "40%",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body" sx={LabelStyle2}>
                Jumlah variant
              </Typography>
              <Typography variant="body" sx={{ ...H5style }}>
                2 variant
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body" sx={LabelStyle2}>
                Jumlah item
              </Typography>
              <Typography variant="body" sx={{ marginLeft: "2%", ...H5style }}>
                53 botol
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body" sx={LabelStyle2}>
                Total
              </Typography>
              <Typography variant="body" sx={{ marginLeft: "2%", ...H5style }}>
                Rp. 53,000
              </Typography>
            </div>
          </div>
        </div>
        <Divider sx={{ width: "100%" }} />
        <Typography sx={{ ...H5style, textAlign: "center" }} variant="h6">
          Detail Keranjang
        </Typography>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            height: "60%",
            gap: '1vw',
          }}
        >
          {activeDataset?.map((item, index) => {
            return <PeekItem key={index} ind={index} />;
          })}
        </div>
        <Pagination
          count={Hero.length}
          page={pageActive + 1}
          renderItem={(item) => <PaginationItem sx={H5style} {...item} />}
          onChange={handleChangePage}
          sx={{ marginTop: 'auto' }}
        />
      </Card>
    </Grow>
  );
};

export default Sneakpeek;
