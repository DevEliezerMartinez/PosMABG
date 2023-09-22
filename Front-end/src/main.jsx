import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/assets/styles/App.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from "notistack";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./assets/styles/App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F79009",
    },
    secondary: {
      main: "#f50057",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Cambia el color de la fuente para los botones
        },
      },
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif", // Fuente principal
    h4: {
      fontFamily: "Poppins, sans-serif", // Cambiar la fuente para un estilo específico
      fontSize: "2rem",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "Poppins, sans-serif", // Cambiar la fuente para un estilo específico
      fontSize: "1.4rem",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "Montserrat, sans-serif", // Cambiar la fuente para un estilo específico
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontFamily: "Montserrat, sans-serif", // Cambiar la fuente para un estilo específico
      fontSize: "0.75rem",
      fontWeight: 300,
    },
    body2: {
      fontFamily: "Montserrat, sans-serif", // Cambiar la fuente para un estilo específico
      fontSize: "0.75rem",
      fontWeight: 300,
    },

    // Define otros estilos de fuente según sea necesario
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider maxSnack={3} autoHideDuration={4000}>
        <CssBaseline />

        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
