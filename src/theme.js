import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#201E2F",
      paper: "#201E2F",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
  typography: {
    allVariants: {
      color: "#FFFFFF",
    },
    fontFamily: ["Circe Rounded", "sans-serif"].join(","),
    fontSize: 22,
    body1: {
      fontWeight: 400,
      lineHeight: 1.9,
    },
    h1: {
      fontFamily: "News706 BT",
      fontWeight: 700,
      fontSize: 86,
      lineHeight: 1,
    },
    h2: {
      fontFamily: "News706 BT",
      fontWeight: 700,
      fontSize: 55,
      lineHeight: 1.9,
    },
    h3: {
      fontFamily: "News706 BT",
      fontWeight: 700,
      fontSize: 26,
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
          fontSize: 16,
          fontFamily: "Circe Rounded",
          fontWeight: 400,
          lineHeight: 1.9,
          color: "#FFFFFF",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
});

export default theme;
