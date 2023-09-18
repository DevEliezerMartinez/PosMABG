import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/assets/styles/App.css";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import { SnackbarProvider, useSnackbar } from "notistack";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Login from "./pages/Login.jsx";
import AddUser from "./pages/AddUser.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider maxSnack={3} autoHideDuration={4000}>
        <CssBaseline />
        <AddUser />
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
