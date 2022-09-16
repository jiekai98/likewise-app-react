import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#ffad01',
        contrastText: 'rgba(255,255,255,0.87)',
        dark: '#f57f17',
      },
    },
  });

export default theme;