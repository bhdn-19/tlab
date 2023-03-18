import { Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import Service from '../components/Service'

export default function Portofolio() {
  const isSm = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Stack direction={isSm ? "column" : "row"} spacing="35px" alignItems="end">
      <Stack flex={3} spacing="35px" sx={{ width: "100%" }}>
        <Header
          title="Rangkaian Proyek Menarik TLab"
          desc="Integritas dan kreativitas menjadi kunci dalam membangun produk digital terbaik untuk bisnis Anda"
          btnText="Lihat Semua Layanan TLab"
          link="#"
        />

        <Service 
          title="kesan.id - Kedaulatan Santri dan Kepribadian Muslim"
          category="IT Managed Services"
          coverSrc="assets/images/cover/card_cover_1.png"
        />
      </Stack>

      <Stack flex={2} spacing="35px" sx={{ width: "100%" }}>
        <Service 
          title="Anterin.id Ridesharing company"
          category="Application Development"
          coverSrc="assets/images/cover/card_cover_2.png"
        /> 

        <Service 
          title="Juru.id Smart Parking"
          category="Artificial intelligence"
          coverSrc="assets/images/cover/card_cover_3.png"
        />
      </Stack>
    </Stack>
  )
}
