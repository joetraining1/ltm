import { Button } from '@mui/material'
import React from 'react'

const Register = ({ setMode }) => {
  return (
    <div>
      sudah punya akun? <Button variant='text' onClick={() => setMode()}>Login</Button>
    </div>
  )
}

export default Register
