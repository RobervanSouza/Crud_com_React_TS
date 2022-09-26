import { Favorite } from "@mui/icons-material";
import { Badge, Button, IconButton } from "@mui/material";
import { ReactComponent as Logout } from "assets/icons/logout.svg";
import logo from "assets/logo/logo.jpg";
import FavoriteScreen from "pages/Favoritos/contexts/FavoriteScreen";
import { favoritoContext } from "pages/Favoritos/contexts/FavoritoContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import * as S from "./style";
import { NavItem } from "./types";

interface MenuProps {
  active: RoutePath;
  navItems: NavItem[];
  onNavigate: (data: RoutePath) => void;
  onLogout: () => void;
  
}

const Menu = ({ active, navItems, onNavigate, onLogout }: MenuProps) => {
  const { favorites } = useContext(favoritoContext);

  const favoritescont = favorites.length;

  const navigate = useNavigate();
  function handleclick() {
    navigate(`/favoritos`);
  }

  return (
    <header>
      <div>
        <S.Menu>
          <S.MenuLogo>
            <img src={logo} alt=" Logo" />
          </S.MenuLogo>
          {navItems.map((item, index) => (
            <S.MenuItem key={`MenuItem-${index}`} active={item.path === active}>
              <S.MenuItemButton
                active={item.path === active}
                onClick={() => navigate(item.path)}
              >
                {item.icon}
              </S.MenuItemButton>
            </S.MenuItem>
          ))}
          <S.MenuItemLogout onClick={onLogout}>
            {" "}
            <Logout></Logout>
          </S.MenuItemLogout>
          
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            onClick={() =>  navigate(`/favoritos`)}
            color="inherit"
            >
            <Badge badgeContent={favoritescont} color="primary">
              <Favorite />
            </Badge>
          </IconButton>
        </S.Menu>
      </div>
    </header>
  );
};

export default Menu;


/*<Link to="/favoritos">

            </Link>*/