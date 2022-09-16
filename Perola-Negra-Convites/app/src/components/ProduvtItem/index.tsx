import * as S from "./style";

const ProductItem = () => {
  return (
    <S.ProductItem>
        
      <S.ProductItemImage src="" />
      <div>
        <S.ProductItemName>Nome do Convite </S.ProductItemName>
        <S.ProductItemPrice>R$100</S.ProductItemPrice>
        <S.ProductItemDescription>Descrição do convite</S.ProductItemDescription>
      </div>
    </S.ProductItem>
  );
};

export default ProductItem;
