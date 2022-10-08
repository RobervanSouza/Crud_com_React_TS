import styled, { css } from "styled-components";

export const ProductItemListHeader = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 90px;
    
  `}
`;

export const ProductItemListHeaderTitle = styled.h1`

  ${() => css`
  margin-left: 23rem;
  margin: 0rem 29rem 0rem 3rem; 
  justify-content: space-between;
  `}

`;

export const ProductItemListHeaderSelect = styled.select`
  ${({ theme }) => css`
 
  `}
`;

export const ProductItemList = styled.div`
  ${() => css`
    justify-content: center;
    margin-top: 75px;
    display: flex;
    gap: 75px 20px;
    flex-wrap: wrap;
  `}
`;












export const teste = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    margin-left: 25rem;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
    align-items: center;
    max-width: 20px;
    width: 10%;
    
  `}
`;

export const titulo = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    margin-left: 16rem;
    justify-content: space-between;
    color: red;
  `}
`;

export const card = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    display: flex;
    margin-top: 3rem;
    flex-direction: row;
    justify-content: space-between;
    width: 55rem;
    transform: rotatey(-45px);
    cursor: pointer;
  `}
`;

