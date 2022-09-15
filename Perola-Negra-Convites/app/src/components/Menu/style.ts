import styled, { css } from "styled-components";
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
