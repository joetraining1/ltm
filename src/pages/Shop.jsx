import React from 'react'
import { Outlet } from 'react-router-dom'

const Shop = () => {
  return (
    <div style={{
      height: 'fit-content',
      minHeight: '54svh',
      marginTop: '6svh',
      display: 'flex',
      background: '#fff',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      Shop
      <Outlet />
    </div>
  )
}

export default Shop
