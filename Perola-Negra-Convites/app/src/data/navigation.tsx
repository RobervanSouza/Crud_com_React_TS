import { NavItem } from "components/Menu/types";
import { ReactComponent as Home } from "assets/icons/home.svg";
import { ReactComponent as Settings } from "assets/icons/favorito.svg";
import { RoutePath } from "types/routes";
import { Favorite } from "@mui/icons-material";
import { Button } from "@mui/material";


export const navigationItems: NavItem[] = [
  {
    icon: <Home />,
    path: RoutePath.HOME,
  },
  
  {
    icon:   <Button variant="outlined" startIcon={<Favorite/>}>
      
          </Button>,
    
    path: RoutePath.SETTINGS,
  },
  
];