import { ReactComponent as Logout } from 'assets/icons/logout.svg';
import logo from 'assets/logo/logo.jpg';
import { RoutePath } from 'types/routes';
import * as S from "./style";
import { NavItem } from './types';

interface MenuProps {
  active: RoutePath;
  navItems: NavItem[];
}

const Menu = ({active, navItems}: MenuProps) => {
  return (
    <S.Menu>
      <nav>
        <S.MenuLogo>
          <img src={logo} alt=" Logo" />
        </S.MenuLogo>
        {navItems.map((item, index) => (
          <S.MenuItem key={`MenuItem-${index}`} active={item.path === active}>
            <S.MenuItemButton active={item.path === active}>
              
              {item.icon}
            </S.MenuItemButton>
          </S.MenuItem>
        ))}
        <S.MenuItemLogout>
          <Logout> Fazer loguin </Logout>
        </S.MenuItemLogout>
      </nav>
    </S.Menu>
  );
};

export default Menu;