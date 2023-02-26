import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  body: {
    darkColor: "rgba(32,33,36,1)",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider  theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
