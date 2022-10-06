
import { ProductResponse } from "types/Product";
import { AppBar, CardActions, Container, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { favoritoContext } from "pages/Favoritos/contexts/FavoritoContext";
import { useContext } from "react";
import { products } from "mocks/products";
import { useNavigate } from "react-router-dom";
import React from "react-router";
import { Favoritos } from "./style1";
import { Menu as MenuIcon } from "@mui/icons-material";
import ProductItem from "components/ProductItem";
import logo from "assets/logo/logo.jpg";
import * as S from "./style1";
import ProductItemList from "components/ProductItemList";

type FavoriteScreenProps = {
  product: ProductResponse;
  onSelect: (data: ProductResponse) => void;
};
 const FavoriteScreen =  () => {
  const { favorites, setFavorites } = useContext(favoritoContext);
     const handleSelection = (product: ProductResponse) => {}
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            size="large"
          >
           
          </IconButton>
          <Typography variant="h6">Convites Favoritos</Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <div style={{ marginTop: `5rem` }}>
          <Grid container spacing={2}>
            {favorites?.map((products) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={products.name}>
                <ProductItem product={products} onSelect={handleSelection} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};
 
export default FavoriteScreen;

/*<pre> {JSON.stringify(favorites.map((product) =>product.name ), undefined, 2)}</pre>*/

/* const category = () =>
 { const [ data, setData,] = useState(products); 
  const filterresultado = (catItem: string) =>{
     const resultado = products.filter((curData) => {
       return curData.name === catItem; }) } } 
*/


