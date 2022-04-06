import { createGlobalStyle } from "styled-components";

export const GlobalTheme = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    font-size: 14px;
    color: ${(props) => props.theme.colors.text.primary};
    line-height: 1.5;
    
    background-color: ${(props) => props.theme.colors.background};
  }
`;
