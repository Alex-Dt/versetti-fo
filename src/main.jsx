import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme";

import App from "./App.jsx";

import { CssBaseline } from "@mui/material";
import "./index.css";
import "./assets/fonts/fonts.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
