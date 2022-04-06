import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { App } from "./app";
import { store } from "./redux/store";
import { theme, GlobalTheme } from "./styles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>

      <GlobalTheme />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
