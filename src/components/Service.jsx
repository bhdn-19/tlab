import { Box, Stack, styled, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const CoverCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'coverSrc',
})(({ coverSrc }) => ({
  borderRadius: 8,
  aspectRatio: '3/2',
  ...(coverSrc && {
    background: `url(${coverSrc})`,
    backgroundSize: 'cover',
  }),
}));

const ContentCard = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'isXs',
})(({ isXs, theme }) => ({
  position: isXs ? 'inherit' : 'absolute',
  bottom: 0,
  left: 0,
  padding: isXs ? '16px 0' : '38.4px 24px',
  backgroundColor: theme.palette.background.default,
  borderRadius: '0 8px',
  width: isXs ? '100%' : '65%'
}));



export default function Service({title, category, coverSrc}) {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box position="relative">
      <ContentCard isXs={isXs}>
        <Typography variant='subtitle2'>
          {category}
        </Typography>

        <Typography variant='h4' sx={{ 
          fontFamily: 'Quicksand',
          fontWeight: 700,
          maxWidth: isXs ? undefined : 322
        }}>
          {title}
        </Typography>
      </ContentCard>
      <CoverCard coverSrc={coverSrc} />
    </Box>
  )
}
