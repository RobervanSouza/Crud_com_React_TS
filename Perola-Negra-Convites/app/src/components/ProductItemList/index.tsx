import { imageListItemClasses } from "@mui/material";
import { products } from "mocks/products";
import { favoritoContext } from "pages/Favoritos/contexts/FavoritoContext";
import { useContext, useState } from "react";
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

  function filtrarPorCategoria(name: any) {
    const resultadoDoFiltro = products.filter(
      (product) => product.name === name );

    definirProdutos(resultadoDoFiltro);
  }

  return (
    <section className="">
      <S.ProductItemListHeader>
        <pre>
          {"Convites Favoritos "}
          {JSON.stringify(
            favorites.map((product) => product.name),
            undefined,
            2
          )}
        </pre>
        <S.ProductItemListHeaderTitle>
          <div className="teste">
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
          {produtos.map((products) => (
            <div>
              <h1 key={products.name}>{products.name}</h1>
              <img src={products.image} alt="" />
              
            </div>
          ))}
        </S.ProductItemListHeaderTitle>
      </S.ProductItemListHeader>
      <S.ProductItemList>{children}</S.ProductItemList>
    </section>
  );
};

export default ProductItemList;
