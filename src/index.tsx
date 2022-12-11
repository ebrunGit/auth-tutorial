import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import ReactDOM from "react-dom";
import App from "App";
import theme from "config/Theme";

const GlobalStyles = createGlobalStyle`
body {
  font-family: ${({ theme }) => theme.typography.fontFamily};
}
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
