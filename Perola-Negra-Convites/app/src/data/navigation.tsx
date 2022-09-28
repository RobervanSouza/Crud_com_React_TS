import { NavItem } from "components/Menu/types";
import { ReactComponent as Home } from "assets/icons/home.svg";
import { ReactComponent as Settings } from "assets/icons/favorito.svg";
import { RoutePath } from "types/routes";
import AddIcon from "@mui/icons-material/Add";
import { Badge, Button } from "@mui/material";
import { useContext } from "react";
import { favoritoContext } from "pages/Favoritos/contexts/FavoritoContext";
import { ReactComponent as Add } from "assets/icons/add.svg";
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
    icon: <Add/>,
    path: RoutePath.SETTINGS_PRODUCTS,
  },
];
