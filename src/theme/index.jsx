import React from 'react'
import { 
  createTheme,
  CssBaseline,
  ThemeProvider as MUIThemeProvider
} from '@mui/material'
import componentsOverrides from './overrides'
import typography from './typography'

export default function ThemeProvider({children}) {
  const themeOptions = {
    palette: {
      tlab: {
        main: '#00DE9C',
        contrastText: '#fff',
      },
      background: {
        default: '#fff'
      },
      text: {
        primary: '#5A5A5A',
      }
    },
    typography
  }

  const theme = createTheme(themeOptions)

  theme.components = componentsOverrides(theme)

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}
