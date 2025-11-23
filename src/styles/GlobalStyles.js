import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: hsl(var(--background));
    color: hsl(var(--foreground));
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    transition: background .2s, color .2s;
  }
`;
