import { AppBar as MUIAppBar, Box, Button, Container, IconButton, Link, Menu, MenuItem, Stack, useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CallIcon from '@mui/icons-material/Call';
import React from 'react'

const pages = ["Company", "Layanan", "Studi Kasus", "Data Center"]

export default function AppBar() {
  const isSm = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MUIAppBar position="static">
      <Container maxWidth="lg">
        <Stack spacing={isSm ? 2 : 8} direction="row" alignItems="center">
          {isSm && (
            <>
              <IconButton
                id="icon-btn"
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <MenuIcon color="tlab" />
              </IconButton>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'icon-btn',
                }}
                disableScrollLock
              >
                {pages.map((page, i) => <Link key={i} href="#"><MenuItem >{page}</MenuItem></Link>)}
              </Menu>
            </>
          )}

          <Box component="img" src="assets/images/brand_logo.svg" sx={{ height: 40 }} />

          {!isSm &&
            <Stack spacing={5} direction="row">
              {pages.map((page, i) => <Link key={i} href="#">{page}</Link>)}
            </Stack>
          }

          <Box flexGrow={1} />
          
          {isSm ? 
            <IconButton
              size="large"
              color="tlab"
              onClick={()=> {}}
              sx={{
                pr: 0
              }}
            >
              <CallIcon />
            </IconButton> 
          : 
            <Button variant="contained" color="tlab">
              Hubungi Kami
            </Button>
          }
        </Stack>
      </Container>
    </MUIAppBar>
  )
}
