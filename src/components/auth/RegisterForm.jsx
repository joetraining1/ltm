import React from 'react'
import { LabelStyle } from '../../utils/constants'
import { Button, TextField } from '@mui/material'

const RegisterForm = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        gap: "10px",
        marginTop: "10%",
        height: '60%'
      }}
    >
      <TextField
        label="Nama"
        size="small"
        sx={{ width: "100%" }}
        InputLabelProps={{
          sx: LabelStyle,
        }}
        inputProps={{
          sx: {
            ...LabelStyle,
          },
        }}
      />
      <TextField
        label="Phone"
        size="small"
        sx={{ width: "100%" }}
        InputLabelProps={{
          sx: LabelStyle,
        }}
        inputProps={{
          sx: {
            ...LabelStyle,
          },
        }}
      />
      <TextField
        label="Email"
        size="small"
        sx={{ width: "100%" }}
        InputLabelProps={{
          sx: LabelStyle,
        }}
        inputProps={{
          sx: {
            ...LabelStyle,
          },
        }}
      />
      <TextField
        label="Password"
        size="small"
        sx={{ width: "100%" }}
        InputLabelProps={{
          sx: LabelStyle,
        }}
        inputProps={{
          sx: {
            ...LabelStyle,
          },
        }}
      />
      <Button
        variant="contained"
        sx={{ ...LabelStyle, marginTop: "auto" }}
        size="small"
      >
        Register
      </Button>
    </div>
  )
}

export default RegisterForm
