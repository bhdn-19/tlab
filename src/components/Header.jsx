import { Box, Link, Stack, styled, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { pxToRem } from '../utils';
import HeaderTitle from './HeaderTitle';

const TLabLink = styled(Link)(() => ({
  fontFamily: 'Quicksand',
  fontSize: pxToRem(16),
  fontWeight: 700,
  lineHeight: pxToRem(28),
  color: '#5449D6'
}));

export default function Header({title, desc, link, btnText, direction = 'column'}) {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Stack spacing={2} direction={isXs ? "column" : direction} justifyContent="space-between">
      <HeaderTitle title={title} />

      <Stack spacing={2}>
        <Typography variant='subtitle1' sx={{ maxWidth: 607 }}>
          {desc}
        </Typography>

        <Stack direction="row" spacing={2}>
          <TLabLink href={link}>{btnText}</TLabLink>
          <Box component="img" src="assets/images/arrow_link.svg" />
        </Stack>
      </Stack>
    </Stack>
  )
}
