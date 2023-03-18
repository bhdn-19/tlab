import { Box, Link, Stack, styled, Typography, useMediaQuery } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import { pxToRem } from '../utils';
import HeaderTitle from './HeaderTitle';

const socials = [
  "facebook",
  "instagram",
  "youtube"
]

const companies = [
  {
    text: "About",
    url: "#"
  }, {
    text: "Career",
    url: "#"
  }, {
    text: "Clients",
    url: "#"
  }, {
    text: "Logo",
    url: "#"
  }, {
    text: "Brand Identity",
    url: "#"
  }, {
    text: "Article",
    url: "#"
  }, {
    text: "Studi Kasus",
    url: "#"
  }, {
    text: "Kontak",
    url: "#"
  },
]

const services = [
  {
    text: "IT Managed Services",
    url: "#"
  }, {
    text: "IT Consultant",
    url: "#"
  }, {
    text: "IT Training",
    url: "#"
  }, {
    text: "Big Data",
    url: "#"
  }, {
    text: "Artificial Intelligent",
    url: "#"
  }, {
    text: "Cloud Computing",
    url: "#"
  }, {
    text: "Internet of Things",
    url: "#"
  }, {
    text: "Web Development",
    url: "#"
  }, {
    text: "Mobile App Development",
    url: "#"
  }, {
    text: "System Integration",
    url: "#"
  }, {
    text: "System Information",
    url: "#"
  },
]

const FooterBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isXs',
})(({isXs}) => ({
  background: 'url(assets/images/rectangle/rectangle_footer.png) left bottom no-repeat',
  backgroundColor: 'rgba(4, 156, 251, 0.03)',
  padding: isXs ? '50px 0' : '100px 0'
}));

export default function Footer() {
  const isMd = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const isXs = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <FooterBox isXs={isXs}>
      <Container maxWidth="lg">
        <Stack
          direction={isMd ? "column" : "row"} 
          alignItems={isMd && 'center'} 
          spacing={isMd ? 6 : undefined}
        >
          <Box textAlign={isMd && 'center'}>
            <HeaderTitle title="TLab Amazing Delivering Innovation" />

            <Stack
              direction="row"
              justifyContent={isMd && 'center'}
              spacing={2.5}
              sx={{ 
                mt: 3, 
                mb: 5
              }}>
              {socials.map((soc, i) => <Box component="img" key={i} src={`assets/images/social/${soc}.svg`} />)}
            </Stack>

            <Typography variant='caption'>
              2010 - 2021 © TLab. All rights reserved.
            </Typography>
          </Box>

          <Stack 
            direction={isXs ? 'column' : 'row'} 
            mt={2} 
            justifyContent={isMd ? "space-evenly" : "space-between"} 
            flexGrow={1} width="100%"
            spacing={isXs ? 6 : undefined}
            textAlign={isXs && 'center'}
          >
            <NavMenu title="Company" items={companies} />

            <NavMenu title="Layanan" items={services} />

            <Stack spacing={6}>
              <Stack spacing={2.5}>
                <Typography variant='subtitle2'>
                  Kontak
                </Typography>

                <Stack spacing={1}>
                  <Typography variant='button' sx={{ textTransform: 'none' }}>
                    PT. Teknologi Kode Indonesia
                  </Typography>

                  <Typography variant='button' sx={{ textTransform: 'none' }}>
                    contact@tlab.co.id
                  </Typography>
                </Stack>
              </Stack>

              <Contact alignItems={isXs && 'center'} />
            </Stack>
          </Stack>
        </Stack> 
      </Container>
    </FooterBox>
  )
}


const NavMenu = ({title, items}) => {
  return(
    <Stack spacing={2.5}>
      <Typography variant='subtitle2'>
        {title}
      </Typography>

      <Stack spacing={1}>
        {items.map((item, i) => <Link variant='body2' key={i} href={item.url}>
          {item.text}
        </Link>)}
      </Stack>
    </Stack>
  )
}

const Contact = ({alignItems}) => {
  return(<>
    <Stack spacing={2} alignItems={alignItems}>
      <Typography variant='body2' sx={{ maxWidth: 244, lineHeight: pxToRem(29) }}>
        Head Office<br />
        Jl Tanjung No.126, Sorosutan,
        Umbulharjo,
        Yogyakarta - 55162
      </Typography>   

      <Stack direction="row" spacing={1}>
        <Box component="img" src="assets/images/icon/phone.svg" />
        
        <Typography variant='body2'>
          {"(0274) - 2870394"}
        </Typography>
      </Stack>
    </Stack>

    <Stack spacing={2} alignItems={alignItems}>
      <Typography variant='body2' sx={{ maxWidth: 244, lineHeight: pxToRem(29) }}>
        Jakarta Office<br />
        SOHO Pancoran Unit S-1210
        Jl. Let. Jend. MT. Haryono Kav 2-3
        Pancoran,
        Jakarta Selatan 12810
      </Typography>   

      <Stack direction="row" spacing={1}>
        <Box component="img" src="assets/images/icon/phone.svg" />
        
        <Typography variant='body2'>
          {"(0274) - 2870394"}
        </Typography>
      </Stack>
    </Stack>
  </>)
}