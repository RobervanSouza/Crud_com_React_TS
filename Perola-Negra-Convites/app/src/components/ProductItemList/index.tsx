import { Children } from "react";
import * as S from "./style";


interface ProductItemListProps {
  children: React.ReactNode;
}
const ProductItemList = ({children} : ProductItemListProps) => {
  return (
    <section className="">
      <S.ProductItemListHeader>
        <S.ProductItemListHeaderTitle> Todos Os Convites </S.ProductItemListHeaderTitle>
        <S.ProductItemListHeaderSelect>
            <option value="default">Selecione o tipo de festa</option>
            <option value="">Infantil</option>
            <option value="">15 Anos</option>
            <option value="">Casamento</option>
            <option value="">60 anos</option>
        </S.ProductItemListHeaderSelect>
      </S.ProductItemListHeader>
      <S.ProductItemList>
        {children}
      </S.ProductItemList>
    </section>
  );
};

export default ProductItemList;
