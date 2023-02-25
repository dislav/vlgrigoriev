import { Manrope } from '@next/font/google';
import { createGlobalStyle } from 'styled-components';

const manrope = Manrope({ subsets: ['cyrillic', 'latin'] });

export default createGlobalStyle`
  html {
    font-family: ${manrope.style.fontFamily};
  }
  
  body {
    background: ${({ theme }) => theme.colors.background};
    margin: 0;
    padding: 0;
  }
  
  * {
    box-sizing: border-box;
  }
  
  h1, h2, h3, h4, h5 {
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
  }
  
  a {
    text-decoration: none;
  }
  
  p {
    margin: 0;
  }
`;
