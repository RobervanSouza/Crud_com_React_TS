import { Routes, Route,  } from "react-router-dom";
import { RoutePath } from "types/routes";
import Home from "pages/Home/index";
import Login  from "pages/Login";
import FavoriteScreen from "pages/Favoritos/contexts/FavoriteScreen";





const Router = () => {
  return (
    
        <Routes>
          <Route path={RoutePath.LOGIN} element={<Login />} />
          <Route path={RoutePath.HOME} element={<Home />} />

          <Route path={RoutePath.FAVORITOS}element={<FavoriteScreen/>} />
        </Routes>
     
  );
};

export default Router;
