import { NavItem } from "components/Menu/types";
import { ReactComponent as Home } from "assets/icons/home.svg";
import { ReactComponent as Settings } from "assets/icons/favorito.svg";
import { RoutePath } from "types/routes";
import { Favorite } from "@mui/icons-material";
import { Badge, Button } from "@mui/material";
import { useContext } from "react";
import { favoritoContext } from "pages/Favoritos/contexts/FavoritoContext";
/*
const { favorites } = useContext(favoritoContext);

const favoritescont = favorites.length;
*/

export const navigationItems: NavItem[] = [
  {
    icon: <Home />,
    path: RoutePath.HOME,
  },

  {
    
    icon: (
      
      <Button variant="outlined" startIcon={<Favorite />}></Button>
      
    ),
    path: RoutePath.SETTINGS,
  },
];
