import styled, { css } from "styled-components";

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



import { Theme } from "types/styled-components";

const activeBox = (theme: Theme) => css`
  content: "";
  position: absolute;
  background-color: transparent;
  height: 50px;
  right: 0;
  bottom: -50px;
  border-top-right-radius: 85px;
  border-bottom-right-radius: 25px;
  box-shadow: 0 -25px 0 0 ${theme.colors.baseHome};
  z-index: 0;
`;

export const Menu = styled.menu`
  ${({ theme }) => css`
    margin-top: 1rem;
    width: 96rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background: ${theme.colors.baseMenu};
    border-radius: 165px 165px 165px 165px;
    box-sizing: border-box;
    nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
    }
  `}
`;

export const MenuLogo = styled.div`
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

const MenuItemModifiers = {
  active: (theme: Theme) => css`
    &::before {
      ${activeBox(theme)};
    }
    &::after {
      ${activeBox(theme)};
    }
  `,
};

type MenuItemStyled = { active: boolean };

export const MenuItem = styled.div<MenuItemStyled>`
  ${({ theme, active }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    ${active && MenuItemModifiers.active(theme)}
  `}
`;
// botão favorito
export const MenuItemButton = styled.button<MenuItemStyled>`
  ${({ theme, active }) => css`
    display: flex;
    align-items: center;

    ${active && MenuItemModifiers.active(theme)}
    ${theme.mixins.buttonIcon()};

    ${active && theme.mixins.buttonIcon(true)};
  `}
`;

// botão para logar
export const MenuItemLogout = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.buttonIcon()};
    z-index: 1;
  `}
`;


export const ProductItemListHeader = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  `}
`;

export const ProductItemListHeaderTitle = styled.h1`
  ${() => css`
    margin: 0;
  `}
`;

export const ProductItemListHeaderSelect = styled.select`
  ${({ theme }) => css`
    ${theme.mixins.select()};
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
