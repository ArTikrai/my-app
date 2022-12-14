import { createTheme } from '@mui/material';

const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 780,
      lg: 992,
      xl: 1200,
      xxl: 1536,
    },
  },

  shape: {
    borderRadius: 4,
  },

  zIndex: {
    appBar: 300,
  },

  transitions: {
    duration: {
      loadingScreen: 200,
    },
  },
});

const mixinTheme = createTheme(baseTheme, {
  mixins: {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '54px',
      padding: baseTheme.spacing(0, 2),
    },
  },
});

const createColor = (color) => mixinTheme.palette.augmentColor({ color: { main: color } });

const lightTheme = createTheme(mixinTheme, {
  palette: {
    background: {
      default: '#fafafa',
    },
    primary: {
      ...createColor('#4682B4'),
      contrastText: baseTheme.palette.common.white,
    },
    secondary: createColor('#434343'),
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default lightTheme;
