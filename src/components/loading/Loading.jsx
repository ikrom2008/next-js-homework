import { CircularProgress } from '@mui/material'
import React from 'react'
import '../footer/Footer.css'
function Loading() {
  return (
    <div className='loading'>
      <CircularProgress disableShrink />
    </div>
  )
}

export default Loading
