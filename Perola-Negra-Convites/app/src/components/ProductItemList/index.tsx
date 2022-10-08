import { imageListItemClasses } from "@mui/material";
import ProductItem from "components/ProductItem";
import { products } from "mocks/products";
import { favoritoContext } from "pages/Favoritos/contexts/FavoritoContext";
import { useContext, useState } from "react";
import { ProductResponse } from "types/Product";
import * as S from "./style";

interface ProductItemListProps {
  children: React.ReactNode;
}

const ProductItemList = ({ children }: ProductItemListProps) => {
  const { favorites } = useContext(favoritoContext);
  // const convites = products.filter((products) => products.startsWith(ProductItemList));

  // teste
  // 3. Utilizo o filter para atualizar a lista filtrada

  const [produtos, definirProdutos] = useState(products);
const handleSelection = (product: ProductResponse) => {};
  function filtrarPorCategoria(name: any) {
    const resultadoDoFiltro = products.filter(
      (product) => product.name === name );

    definirProdutos(resultadoDoFiltro);
  }

  return (
    <section className="">
      <S.ProductItemListHeader>
        <S.ProductItemListHeaderTitle>
          <S.titulo>
            <div>
              <button
                onClick={() => {
                  definirProdutos(products);
                }}
              >
                Todos
              </button>
              <button
                onClick={() => {
                  filtrarPorCategoria("Infantil");
                }}
              >
                {" "}
                Infantil{" "}
              </button>
              <button
                onClick={() => {
                  filtrarPorCategoria("15 anos");
                }}
              >
                {" "}
                15 anos{" "}
              </button>
              <button
                onClick={() => {
                  filtrarPorCategoria("60 anos");
                }}
              >
                {" "}
                60 anos{" "}
              </button>
              <button
                onClick={() => {
                  filtrarPorCategoria("Casamento");
                }}
              >
                {" "}
                Casamento{" "}
              </button>
            </div>
          </S.titulo>
       
            <div>
              <S.card>
              {produtos.map((products) => (
                  <div>
                    <ProductItem
                      product={products}
                      onSelect={handleSelection}
                    />
                  </div>
              ))}
              </S.card>
            </div>
          
        </S.ProductItemListHeaderTitle>
      </S.ProductItemListHeader>
      <S.ProductItemList>{children}</S.ProductItemList>
    </section>
  );
};

export default ProductItemList;
