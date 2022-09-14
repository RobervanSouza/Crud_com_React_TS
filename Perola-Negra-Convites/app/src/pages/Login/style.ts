import styled, { css } from "styled-components";
import pattern from "assets/images/c1.jpg";

export const Login = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg2};
    background-image: url(${pattern});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
  `}
`;

export const LoginContent = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    ${theme.mixins.overlay()};
    display: flex;
    justify-content: center;
    align-items: center; ;
  `}
`;

/* ate aqio ok 
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #f0f2f5;
    font-family: Arial, Helvetica, sans-serif
  }
`;

export default GlobalStyle;
*/