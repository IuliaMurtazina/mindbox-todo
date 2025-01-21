import { ThemeOptions } from "@mui/material";

const ThemedCssBaseline: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: {
      "body > *": {
        fontWeight: 400,
      },
      "*": {
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
      },
    },
  },
};

export default ThemedCssBaseline;
