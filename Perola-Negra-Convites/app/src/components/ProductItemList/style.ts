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














export const ProductItem = styled.div`
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

export const ProductItemImage = styled.img`
  ${() => css`
    width: 150px;
    margin-top: -50px;
  `}
`;

export const ProductItemName = styled.h3`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    text-align: center;
    max-width: 90%;
    margin: 0;
  `}
`;

export const ProductItemPrice = styled.strong`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    text-align: center;
    max-width: 90%;
    margin: 0;
    color: ${theme.colors.primaryColor};
  `}
`;

export const ProductItemDescription = styled.small`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    text-align: center;
    max-width: 90%;
    margin: 0;
    font-size: 12px;
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

export const card= styled.div`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    margin-left: 16rem;
    justify-content: space-between;
    color: red;
  `}
`;

