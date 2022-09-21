import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#ffad01',
        contrastText: 'rgba(255,255,255,0.87)',
        dark: '#f57f17',
      },
      secondary: {
        main: '#00acc1',
        contrastText: 'rgba(255,255,255,0.87)',
      },
    },
  });

export default theme;