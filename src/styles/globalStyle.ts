import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-grey-1: #3D3D3D;
    --color-grey-2: #171717;
    --color-yellow: #FFBB38;

    --font-primary: "Poppins", sans-serif;
    --font-secundary: "Inter", sans-serif;

    --font-size-1: 2.75rem;
    --font-size-2: 2rem;
    --font-size-3: 1.625rem;
    --font-size-4: 1.3125rem;
    --font-size-5: 1.125rem;
    --font-size-6: 1.0625rem; 
  }
`