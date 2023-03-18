import { Box, Container, Grid, useMediaQuery } from '@mui/material'
import React from 'react'

const clients = [
  "google",
  "jaya",
  "suhu",
  "anterin",
  "kesan",
  "1",
  "2",
  "3",
  "star",
  "gojek",
  "grab",
  "uber"
]

export default function Client() {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg">
      <Grid container spacing={5} sx={{ 
        textAlign: 'center',
        p: isXs ? '32px 0 50px' : '78px 0 100px',
      }}>
        {clients.map((client, i) => <Grid item lg={2} md={3} sm={4} xs={12} key={i}>
            <Box component="img" src={`assets/images/logo/${client}.png`} />
          </Grid>
        )}
      </Grid>
    </Container>
  )
}
