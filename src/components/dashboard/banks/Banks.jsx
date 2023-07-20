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
import AccountForm from './form/AccountForm'
import BankForm from './form/BankForm'

const Banks = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState("");

  const handleClose = () => {
    setMode("")
    setModalOpen(false)
    return
  };
  const handleOpen = (edit) => {
    setMode(edit)
    setModalOpen(true)
    return
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
            inputProps={{
              sx: {
                fontFamily: "Signika Negative, sans-serif",
                fontWeight: "600",
                color: "#262626",
              },
            }}
            placeholder="Temukan bank.."
          />
          <Divider orientation="vertical" />
          <Button variant="text">
            <SearchRoundedIcon />
          </Button>
        </Paper>
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
      <BankGridDisplayer judul="Daftar Akun Bank" accounts={AccountItem} />
      <BankGridDisplayer judul="Daftar Bank" datasets={BankItem} />
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
            height: 'fit-content',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            backgroundColor: "#fff",
            display: 'flex',
            flexDirection: 'column',
            padding: '2vw',
            alignItems: 'center',
            borderRadius: '5px',
            gap: '0.5vw'
          }}
        >
          {mode === "account" ? <AccountForm title="Tambah Akun Bank" onClose={() => handleClose()}/> : null}
          {mode === "bank" ? <BankForm title="Tambah Data Bank" onClose={() => handleClose()} /> : null}
        </Paper>
      </Modal>
    </div>
  );
};

export default Banks;
