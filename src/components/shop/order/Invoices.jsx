import React from 'react'
import { useParams } from 'react-router-dom'

const Invoices = () => {
    const { id } = useParams();
  return (
    <div>
      order no: {id}
    </div>
  )
}

export default Invoices
