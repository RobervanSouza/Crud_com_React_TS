
import * as S from "./style";
import { ProductResponse } from "types/Product";
import { CardActions, IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { favoritoContext } from "pages/Favoritos/contexts/FavoritoContext";
import { useContext } from "react";
import { products } from "mocks/products";
import { useNavigate } from "react-router-dom";
import React from "react-router";
import { useEffect, useState } from "react";




type ProductItemProps = {
  product: ProductResponse;
  onSelect: (data: ProductResponse) => void;
};
export const ProductItem = ({ product, onSelect }: ProductItemProps) => {
  const { favorites, setFavorites } = useContext(favoritoContext);
  const navigate = useNavigate();

  function handleclick() {
    navigate(`${product.name}`);
  }

  const addFavoritos = () => {
    setFavorites([...favorites, product]);
  };

  const removeFavorites = () => {
    setFavorites(favorites.filter((prod) => prod.name !== product.name));
  };

  const isFavorite = favorites.some((prod) => prod.name === product.name);

  // test


  
  return (
    
    <div>
      <S.ProductItem role="listitem">
        <S.ProductItemImage src={product.image} alt={`Convite de ${product.name}`} />
        <IconButton
          onClick={() => (isFavorite ? removeFavorites() : addFavoritos())}
          aria-label="add to favorites"
        >
          
          <Favorite color={isFavorite ? `error` : `disabled`} />
        </IconButton>
        <div>
          <S.ProductItemName>{product.name}</S.ProductItemName>
          <S.ProductItemPrice>{product.price}</S.ProductItemPrice>
          <S.ProductItemDescription>
            {product.description}
          </S.ProductItemDescription>
          <CardActions disableSpacing></CardActions>
        </div>
      </S.ProductItem>
    </div>
  );
};

export default ProductItem;


/*<pre> {JSON.stringify(favorites.map((product) =>product.name ), undefined, 2)}</pre>*/

/* const category = () =>
 { const [ data, setData,] = useState(products); 
  const filterresultado = (catItem: string) =>{
     const resultado = products.filter((curData) => {
       return curData.name === catItem; }) } } */
