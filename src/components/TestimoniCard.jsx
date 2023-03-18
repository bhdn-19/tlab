import { Avatar, Box, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { pxToRem } from '../utils';

const colors = {
  blue: '#049CFB',
  purple: '#5449D6',
  green: '#00DE9C'
}

const Card = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'cardColor',
})(({ cardColor }) => ({
  height: 568.5,
  borderRadius: 8,
  background: `url(assets/images/assets_${cardColor}.svg) bottom no-repeat`,
  backgroundSize: 'contain',
  backgroundColor: colors[cardColor],
  padding: '32px 24px',
  color: '#fff'
}));

const ContentCard = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  padding: 24,
  backgroundColor: theme.palette.background.default,
  borderRadius: '0 8px',
  width: '77%'
}));

export default function Service({name, position, testi, color, avatar}) {
  return (
    <Box position="relative">
      <Card cardColor={color}> 
        <Typography variant='h4' fontWeight={700} maxWidth={300}>
          {testi}
        </Typography>
      </Card>
      <ContentCard direction="row" spacing={3}>
        <Avatar alt={name} src={avatar} />

        <Stack spacing={0.5}>
          <Typography variant='body2' lineHeight={pxToRem(28.8)}>
            {name}
          </Typography>

          <Typography variant='subtitle2' fontWeight={400} fontFamily="Nunito Sans">
            {position}
          </Typography>
        </Stack>
      </ContentCard>
    </Box>
  )
}
