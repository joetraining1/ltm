import { Card } from '@mui/material'
import React from 'react'

const ShopBar = () => {
  return (
    <Card
          sx={{
            width: "350px",
            height: "500px",
            transition: "height 0.2s ease",
          }}
          elevation={3}
        ></Card>
  )
}

export default ShopBar
