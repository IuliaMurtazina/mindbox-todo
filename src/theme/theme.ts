import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import ThemedCssBaseline from "./overrides/ThemedCssBaseline";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    phoneBig: true;
    tablet: true;
    desktopSmall: true;
    desktopMedium: true;
    desktopBig: true;
  }

  interface Palette {
    colors: {
      greyLight: string;
      greyDark: string;
      greyDarkest: string;
      bgWhite: string;
      completeGreen: string;
      accentPink: string;
    };
  }

  interface PaletteOptions {
    colors: {
      greyLight: string;
      greyDark: string;
      greyDarkest: string;
      bgWhite: string;
      completeGreen: string;
      accentPink: string;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    extraSmall: true;
  }
}

const baseTheme = createTheme({
  breakpoints: {
    values: {
      phoneBig: 425,
      tablet: 768,
      desktopSmall: 1024,
      desktopMedium: 1536,
      desktopBig: 1920,
    },
  },
});

export const theme = createTheme({
  breakpoints: baseTheme.breakpoints,
  typography: {
    fontFamily: "HelveticaNeueCyr",
    h1: {
      [baseTheme.breakpoints.down("tablet")]: {
        fontSize: "4rem",
      },
      fontWeight: "100",
    },
  },
  palette: palette,
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: "100%",
        },
      },
    },
  },
  ...ThemedCssBaseline,
});
