import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./Assets/Theme/index";
import { TodoProvider } from "./Context/TodoContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <TodoProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </TodoProvider>
  </BrowserRouter>
);
