import { Box, Grid, Stack, styled, useMediaQuery } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import Header from '../components/Header';
import TestimoniCard from '../components/TestimoniCard';

const TLabBox = styled(Box)(() => ({
  background: 'url(assets/images/rectangle/rectangle_2.png) no-repeat',
  backgroundSize: '100% 613px',
  transform: 'translateY(-1px)',
  paddingTop: 42,
}));

export default function Testimonial() {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Stack>
      <Box component="img" src="assets/images/rectangle/rectangle_1.png" />
      <TLabBox>
        <Container maxWidth="lg">
          <Header
            title="Connect & Collaborate"
            desc="Pengalaman partner TLab ketika berkolaborasi untuk menghasilkan produk terbaik"
            btnText="Lihat Semua partner TLab"
            link="#"
            direction='row'
          />

          <Grid container spacing={4} mt={isXs ? 4 : 8.5} justifyContent="center">
            <Grid item md={4} sm={6} xs={12}>
              <TestimoniCard 
                name="Hamdan Hamedan"
                position="CEO of Kesan Indonesia"
                avatar="assets/images/avatar.png"
                testi="Our experience tells us it's better this way. Not only because it is more efficient – the outcome is simply much better."
                color="blue"
              />
            </Grid>

            <Grid item md={4} sm={6} xs={12}>
              <TestimoniCard 
                name="Hamdan Hamedan"
                position="CEO of Kesan Indonesia"
                avatar="assets/images/avatar.png"
                testi="Our experience tells us it's better this way. Not only because it is more efficient – the outcome is simply much better."
                color="purple"
              />
            </Grid>

            <Grid item md={4} sm={6} xs={12}>
              <TestimoniCard 
                name="Hamdan Hamedan"
                position="CEO of Kesan Indonesia"
                avatar="assets/images/avatar.png"
                testi="Our experience tells us it's better this way. Not only because it is more efficient – the outcome is simply much better."
                color="green"
              />
            </Grid>
          </Grid>
        </Container>
      </TLabBox>
    </Stack>
  )
}
