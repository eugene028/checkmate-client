"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "SUIT",
    fontSize: 15,
    fontWeightMedium: 600,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          display: "flex",
          justifyContent: "center",
        },
        body: {
          maxWidth: "520px",
          minHeight: "100dvh",
          width: "520px",
          positions: "relative",
        },
        main: {
          position: "relative",

          width: "100%",
          height: "100%",
        },
      },
    },
  },
});

export default theme;
