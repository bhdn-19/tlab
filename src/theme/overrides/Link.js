export default function Link(theme) {
  return {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
        }
      }
    },
  };
}
