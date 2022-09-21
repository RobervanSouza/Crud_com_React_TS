import * as S from "./style";
import { ProductResponse } from "types/Product";
import { CardActions, IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { favoritoContext } from "pages/Favoritos/contexts/FavoritoContext";
import { useContext } from "react";
import { products } from "mocks/products";
import { useNavigate } from "react-router-dom";
import React from "react-router";


type ProductItemProps = {
  product: ProductResponse
  onSelect: (data: ProductResponse) => void
  
}
 export const ProductItem = ( {product, onSelect, }: ProductItemProps) => {
 


const {favorites, setFavorites}= useContext(favoritoContext);
  const navigate = useNavigate();
  
    function handleclick() {
      navigate(`/favorites/${product.name}`);
    
    }
    
const addFavoritos = () => {
  setFavorites([...favorites, product] );
  console.log(product)
}


return (
  <div>
    <S.ProductItem role="listitem">
      <S.ProductItemImage
        src={product.image}
        onClick={handleclick}
        alt={`Convite de ${product.name}
        `}
      />
      <div>
        <S.ProductItemName>{product.name}</S.ProductItemName>
        <S.ProductItemPrice>{product.price}</S.ProductItemPrice>
        <S.ProductItemDescription>
          {product.description}
        </S.ProductItemDescription>
        <CardActions disableSpacing>
          <IconButton onClick={addFavoritos} aria-label="add to favorites">
            <Favorite />
          </IconButton>
        </CardActions>
      </div>
    </S.ProductItem>
  </div>
);
};

export default ProductItem;

/*<pre> {JSON.stringify(favorites.map((product) =>product.name ), undefined, 2)}</pre>*/


