import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1E1D2E",
      paper: "#1E1D2E",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
  typography: {
    allVariants: {
      color: "#FFFFFF",
    },
    fontFamily: ["Raleway", "sans-serif"].join(","),
    fontSize: 19,
    body1: {
      fontWeight: 500,
      lineHeight: 1.41,
    },
    h1: {
      fontFamily: "News706 BT",
      fontWeight: 700,
      // fontSize: {
      //   xs: "37px",
      //   sm: "86px",
      // },
      // [`@media (max-width:600px)`]: {
      //   fontSize: "37px",
      // },
      // [`@media (min-width:600px)`]: {
      //   fontSize: "77px",
      // },
      lineHeight: 1,
    },
    h2: {
      fontFamily: "News706 BT",
      fontWeight: 700,
      fontSize: "55px",
      [`@media (max-width:600px)`]: {
        fontSize: "26px",
        textAlign: "center",
      },
      [`@media (min-width:600px)`]: {
        fontSize: "55px",
      },
      lineHeight: 1.9,
    },
    h3: {
      fontFamily: "News706 BT",
      fontWeight: 700,
      fontSize: "26px",
      [`@media (max-width:600px)`]: {
        fontSize: "23px",
      },
      lineHeight: 1.9,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
  },
  breakpoints: {
    values: {
      xs: 0,

      sm: 600,

      md: 900,

      lg: 1277,

      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          // fontSize: "16px",
          fontFamily: "Raleway",
          fontWeight: 500,
          lineHeight: 1.41,
          color: "#FFFFFF",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: "#1C1A2A!important",
          borderRadius: "30px!important",
        },
      },
    },
  },
});

export default theme;
