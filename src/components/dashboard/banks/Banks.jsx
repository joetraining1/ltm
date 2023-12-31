import React, { useState } from "react";
import { AccountItem, BankItem, H5style } from "../../../utils/constants";
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
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BankCard from "./BankCard";
import BankGridDisplayer from "./BankGridDisplayer";
import AccountForm from "./form/AccountForm";
import BankForm from "./form/BankForm";
import ApiClient from "../../../services/ApiClient";
import Loading from "../../../pages/Loading";
import NoData from "../../global/NoData";
import { useEffect } from "react";

const Banks = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState("");
  const [datas, setDatas] = useState([]);
  const [bas, setBas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getType = async () => {
    setIsLoading(true);

    const reqBa = await ApiClient.get("account").then((res) => {
      return res.data;
    });
    setBas(reqBa.result);
    setIsLoading(false);
    return;
  };
  const getBank = async () => {
    setIsLoading(true);
    const reqType = await ApiClient.get("bank").then((res) => {
      return res.data;
    });

    setDatas(reqType.result);
    setIsLoading(false);
    return;
  };

  useEffect(() => {
    if (bas.length === 0) {
      getType();
    }
    if (datas.length === 0) {
      getBank();
    }
    return;
  }, []);

  const handleClose = () => {
    setMode("");
    setModalOpen(false);
    return;
  };
  const handleOpen = (edit) => {
    setMode(edit);
    setModalOpen(true);
    return;
  };

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
        Kelola Bank
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: "1vw",
          height: "50px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "20%",
            height: "50px",
            fontFamily: "Signika Negative, sans-serif",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "auto",
          }}
          onClick={() => handleOpen("account")}
        >
          <PlusOneRoundedIcon />
          Tambah Akun Bank
        </Button>
        <Button
          variant="contained"
          sx={{
            width: "17%",
            height: "50px",
            fontFamily: "Signika Negative, sans-serif",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
          onClick={() => handleOpen("bank")}
        >
          <PlusOneRoundedIcon />
          Tambah Bank
        </Button>
      </div>

      {bas.length === 0 ? (
        <NoData prop="akun bank manapun." />
      ) : (
        <BankGridDisplayer
          judul="Daftar Akun Bank"
          accounts={bas}
          refresh={() => getType()}
          bankList={datas}
        />
      )}
      {datas.length === 0 ? (
        <NoData prop="data bank manapun." />
      ) : (
        <BankGridDisplayer
          judul="Daftar Bank"
          datasets={datas}
          refresh={() => getBank()}
        />
      )}

      <Modal
        open={modalOpen}
        onClose={() => handleClose()}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Paper
          sx={{
            width: "450px",
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
          {mode === "account" ? (
            <AccountForm
              title="Tambah Akun Bank"
              bankList={datas}
              onClose={() => handleClose()}
              refresh={() => getType()}
            />
          ) : null}
          {mode === "bank" ? (
            <BankForm
              title="Tambah Data Bank"
              onClose={() => handleClose()}
              refresh={() => getBank()}
            />
          ) : null}
        </Paper>
      </Modal>
    </div>
  );
};

export default Banks;
