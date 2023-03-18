export default function AppBar(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.default,
          padding: 23,
          boxShadow: 'none'
        }
      }
    },
  };
}
