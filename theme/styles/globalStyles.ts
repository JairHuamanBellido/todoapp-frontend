import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Nunito Sans", sans-serif;
  list-style: none;
  text-decoration: none;
}


h1,h2,h3,h4,h5,h6,p{
    line-height: 1.5;
}
`;
