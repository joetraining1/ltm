import {
  Button,
  Divider,
  InputBase,
  Modal,
  Pagination,
  PaginationItem,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { H5style } from "../../../utils/constants";
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useNavigate, useParams } from "react-router-dom";
import UserCard from "./UserCard";
import UserForm from "./UserForm";
import NoData from "../../global/NoData";
import ApiClient from "../../../services/ApiClient";
import useNotif from "../../../hooks/useNotif";

const Users = () => {
  const { id } = useParams();
  const [pageActive, setPageActive] = useState(0);
  const [datas, setDatas] = useState([]);
  const [detailOn, setDetailOn] = useState(id ? true : false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [types, setTypes] = useState([])
  const [keywords, setKeywords] = useState("");

  const { infoToast, updateToast } = useNotif();


  const getTypes = async () => {
    setIsLoading(true)
    const reqType = await ApiClient.get('type').then((res) => {
      return res.data
    })
    setTypes(reqType.result)
    setIsLoading(false)
    return
  }

  const getType = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get("user").then((res) => {
      return res.data;
    });
    setDatas(reqType.result);
    setIsLoading(false);
    return;
  };

  const sendQ = async () => {
    setIsLoading(true);
    infoToast("mencari user..");
    try {
      const payload = {
        keyword: keywords,
      };
      const product = await ApiClient.post("user/search", payload).then((res) => {
        return res.data;
      });
      setDatas(product.result);
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

  useEffect(() => {
    if(keywords === ""){
      getType()
      return
    }
    return
  }, [keywords])

  useEffect(() => {
    if (datas.length === 0) {
      getType();
    }
    getTypes()
    return;
  }, [datas]);

  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);

  const navigate = useNavigate();

  const handleChangePage = (event, value) => {
    setPageActive(value - 1);
  };

  const showQuick = (id) => {
    setDetailOn(true);
    navigate(`${id}`);
    return;
  };

  const backButton = () => {
    navigate(-1);
    return setDetailOn(false);
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

  const Hero = MultiArray(datas, 9);
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
        minHeight: "50svh",
        background: "#fff",
        width: "100%",
        gap: "1vw",
      }}
    >
      <Typography variant="h4" sx={{ ...H5style, marginBottom: "1%" }}>
        Kelola User aplikasi
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          gap: "1vw",
          height: "50px",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            width: "50%",
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
            placeholder="Temukan user.."
          />
          <Divider orientation="vertical" />
          <Button variant="text" onClick={() => sendQ()}>
            <SearchRoundedIcon />
          </Button>
        </Paper>
        <Button
          variant="contained"
          sx={{
            width: "16%",
            height: "50px",
            fontFamily: "Signika Negative, sans-serif",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
          onClick={() => handleOpen()}
        >
          <PlusOneRoundedIcon />
          Tambah user
        </Button>
      </div>
      {datas.length === 0 ? (
        <NoData />
      ) : (
        <React.Fragment>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 300px))",
              width: detailOn ? "52%" : "100%",
              height:
                activeDataset?.length < 4
                  ? "50svh"
                  : activeDataset?.length < 7
                  ? "93svh"
                  : "135svh",
              gap: "1vw",
              overflow: "auto",
              alignContent: "start",
              transition: "width 0.4s ease, height 0.4s ease",
              padding: "1vw",
            }}
          >
            {activeDataset?.map((i, ind) => {
              return (
                <UserCard
                  key={i.id}
                  name={i.name}
                  tipe={i.type}
                  picurl={i.url}
                  esurat={i.email}
                  id={i.id}
                  addr={i.alamat}
                  dibuat={i.createdAt}
                  nomer={i.phone}
                  ind={ind}
                  done={i.done}
                  active={i.active}
                  refresh={() => getType()}
                  tData={types}
                />
              );
            })}
          </div>
          <Pagination
            count={Hero.length}
            page={pageActive + 1}
            renderItem={(item) => <PaginationItem sx={H5style} {...item} />}
            onChange={handleChangePage}
          />
        </React.Fragment>
      )}
      <Modal
        open={modalOpen}
        onClose={() => handleClose()}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Paper
          sx={{
            width: "750px",
            minHeight: "350px",
            height: "fit-content",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            padding: "2vw",
            alignItems: "center",
            borderRadius: "5px",
            gap: "0.5vw",
          }}
        >
          <UserForm
            title="Tambah Data User"
            mode="add"
            onClose={() => handleClose()}
            refresh={() => getType()}
            tData={types}
          />
        </Paper>
      </Modal>
    </div>
  );
};

export default Users;
