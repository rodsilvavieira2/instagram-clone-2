import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { App } from "./app";
import { store } from "./redux/store";
import { theme, GlobalTheme } from "./styles";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>

      <GlobalTheme />
    </ThemeProvider>
  </StrictMode>
);
