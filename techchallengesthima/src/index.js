import React from "react";
import ReactDOM from "react-dom";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
