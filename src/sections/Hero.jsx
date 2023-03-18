import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Hero() {
  return (
    <Stack
      spacing={4}
      alignItems="center" 
      sx={{ 
        textAlign: 'center'
      }}
    >
      <Typography variant='h1' sx={{ maxWidth: 841 }}>
        Dapatkan solusi digital terbaik untuk mengembangkan bisnis Anda
      </Typography>

      <Typography variant='h4' sx={{ maxWidth: 780 }}>
        Jadikan bisnis semakin berkembang dengan pemilihan teknologi yang tepat dan andal
      </Typography>
      
      <Box component="img" src="assets/images/section_1.svg" sx={{ width: '100%' }} />
    </Stack>
  )
}
