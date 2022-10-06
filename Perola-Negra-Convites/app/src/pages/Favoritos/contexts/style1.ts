import styled, { css } from "styled-components";
import { Theme } from "types/styled-components";

export const Favoritos = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.baseBg2};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
    align-items: center;
    max-width: 200px;
    width: 100%;
    cursor: pointer;
    min-height: 225px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 10px;
    }
  `}
`;











export const Logo = styled.div`
  ${() => css`
    margin-left: 2rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 20px 0;
    img {
      height: 80px;
    }
  `}
`;