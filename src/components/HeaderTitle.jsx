import { Typography, useMediaQuery } from '@mui/material'
import React from 'react'

export default function HeaderTitle({title}) {
  const isLg = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <Typography variant='h3' sx={{
      maxWidth: 414,
      minWidth: isLg && 380
    }}>
      {title}
    </Typography>
  )
}
