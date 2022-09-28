import { favoritoContext } from "pages/Favoritos/contexts/FavoritoContext";
import { useContext } from "react";
import * as S from "./style";


interface ProductItemListProps {
  children: React.ReactNode;

}



const ProductItemList = ({children} : ProductItemListProps) => {
  
  const { favorites } = useContext(favoritoContext);
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
       
          Todos os Convites
        </S.ProductItemListHeaderTitle>
        <S.ProductItemListHeaderSelect>
          <option value="default">Selecione o tipo de festa</option>
          <option value="">Infantil</option>
          <option value="">15 Anos</option>
          <option value="">Casamento</option>
          <option value="">60 anos</option>
        </S.ProductItemListHeaderSelect>
      </S.ProductItemListHeader>
      <S.ProductItemList>{children}</S.ProductItemList>
    </section>
  );
};

export default ProductItemList;

    