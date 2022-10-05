

import { ProductResponse } from "types/Product";
import { CardActions, IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { favoritoContext } from "pages/Favoritos/contexts/FavoritoContext";
import { useContext } from "react";
import { products } from "mocks/products";
import { useNavigate } from "react-router-dom";
import React from "react-router";
import { Favoritos } from "./style1";

type FavoriteScreenProps = {
  product: ProductResponse;
  onSelect: (data: ProductResponse) => void;
};
 const FavoriteScreen =  () => {
  const { favorites, setFavorites } = useContext(favoritoContext);
  return (
    <div>
      <Favoritos>
      {JSON.stringify(favorites)}

      </Favoritos>
    </div>
  )
};
 
export default FavoriteScreen;

/*<pre> {JSON.stringify(favorites.map((product) =>product.name ), undefined, 2)}</pre>*/

/* const category = () =>
 { const [ data, setData,] = useState(products); 
  const filterresultado = (catItem: string) =>{
     const resultado = products.filter((curData) => {
       return curData.name === catItem; }) } } 
*/


