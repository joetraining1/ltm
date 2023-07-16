import React from 'react'
import { H5style } from '../../../utils/constants'
import { Button, Divider, InputBase, Paper, Typography } from '@mui/material'
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BankCard from './BankCard';

const Banks = () => {
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
          marginLeft: 'auto'
        }}
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
      >
        <PlusOneRoundedIcon />
        Tambah Bank
      </Button>
    </div>
    <div>
    <BankCard />
    </div>
  </div>
  )
}

export default Banks
