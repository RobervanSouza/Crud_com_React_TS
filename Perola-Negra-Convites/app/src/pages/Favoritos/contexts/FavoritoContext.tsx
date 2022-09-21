import { ProductItem } from "../../../components/ProductItem";
import React, {Children, useState} from 'react';
import { ProductResponse } from "types/Product";
import FavoriteScreen from "./FavoriteScreen";

interface favoritoContextProps {
  favorites: ProductResponse[];
  setFavorites:  React.Dispatch<React.SetStateAction<ProductResponse[]>>
}

const INITIAL_FAVORITES_VALUE: ProductResponse[] = [];

export const favoritoContext = React.createContext<favoritoContextProps>({
  favorites: INITIAL_FAVORITES_VALUE,
  setFavorites: () => console.warn("FavoritoProvider"),
});

type Props= {
  children?: JSX.Element | JSX.Element[];
}

export const FavoritoProvider: React.FC  <Props>= ({children}) => {
  const [favorites, setFavorites] = useState<ProductResponse[]>(
    INITIAL_FAVORITES_VALUE
  );
  return (
    <favoritoContext.Provider
      value={{
        favorites,
        setFavorites,
      }}

      >
{children}
      
    </favoritoContext.Provider>
  );
};

