export default function AppBar(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 100,
          boxShadow: 'none',
          padding: '9.5px 24px'
        }
      }
    },
  };
}
