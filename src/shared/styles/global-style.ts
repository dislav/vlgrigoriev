import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
