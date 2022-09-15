import styled, { css } from "styled-components";

export const Home = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    min-width: 100vw;
    min-height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;

  `}
`;
export const HomeContent = styled.main`
  ${() => css`
    
    width: calc(100% - 50px);
    padding: 20px;
    overflow: auto;
    
    box-sizing: border-box;
  `}
`;
export const HomeHeaderDetails = styled.div`
  ${() => css`
    display: flex;
    
    
  
  `}
`;
export const HomeHeaderDetailsLogo = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.logoStyle};
    text-transform: uppercase;
    margin: 0;
    color: gold;
    margin-left: 32rem;
  `}
`;

export const HomeHeaderDetailsDate = styled.p`
  ${() => css`
    text-transform: uppercase;
    margin-left: 1rem;
    margin-top: -1.8rem;
  `}
`;
export const HomeHeaderDetailsSearch = styled.div`
  ${({ theme }) => css`
  margin-left: 15rem;
    display: flex;
    align-items: center;
    gap: 10px;
    ${theme.mixins.input()};
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
    input {
      background: transparent;
      border: none;
      height: 100%;
      color: ${theme.colors.textColor};
    }
  `}
`;
export const HomeProductTitle = styled.h2`
  ${({ theme }) => css`
    margin: 0;
    border-bottom: 1px solid ${theme.colors.baseLine};
    ${theme.mixins.bodyStyle()};
    color: ${theme.colors.primaryColor};
    padding-bottom: 10px;
    b {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -13px;
        width: 100%;
        height: 4px;
        background-color: ${theme.colors.primaryColor};
        border-radius: 5rem;
      }
    }
  `}
`;

export const HomeProductList = styled.div`
  ${() => css`
    margin-top: 25px;
    padding-bottom: 25px;
  `}
`;

export const HomeProductListGap = styled.div`
  ${({ theme }) => css`
    width: 200px;
  `}
`;
