// import { useQuery } from "react-query";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ReactComponent as Add } from "assets/icons/add.svg";
import EditProduct from "components/EditProduct";
import { HTMLAttributes, useState, useEffect } from "react";

import { ProductResponse } from "types/Product";
import { QueryKey } from "types/QueryKey";

import * as S from "./style";

type ManageProductsType = HTMLAttributes<HTMLDivElement>;

type ManageProductsProps = {} & ManageProductsType;

const ManageProducts = ({ ...props }: ManageProductsProps) => {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const { data: productsData } = useQuery(
    [QueryKey.PRODUCTS]
    //  <ProductResponse> {products}</ProductResponse>
  );

  /*
  const add = useMutation(ProductService.create, {
    onSuccess: (data: ProductResponse & ErrorResponse) => {
      if (data.statusCode) {
        return;
      }

      const productList = [...products, data as ProductResponse];
      setProducts(productList);
    },
    onError: () => {
      console.error("Erro ao adicionar um produto");
    },
  });
  */
  const form = {
    name: "",
    price: Number(""),
    image: "",
    description: "",
  };
  const [isAdding, setIsAdding] = useState(false);
  const [productToAdd, setProductToAdd] = useState(form);

  const handleAddChange = (name: string, value: string | number) => {
    setProductToAdd({ ...productToAdd, [name]: value });
  };

  const productIsValid = () =>
    Boolean(
      productToAdd.name.length &&
        productToAdd.price.toString().length &&
        productToAdd.description.length &&
        productToAdd.image.length
    );
  /*
  const productFormatter = (toFormat: typeof form): Product => ({
    name: toFormat.name,
    price: toFormat.price,
    description: toFormat.description,
    image: toFormat.image,
  });

*/
  const [cancel, setCancel] = useState(false);

  const handleCancel = () => {
    setCancel(true);
    setIsAdding(false);
    setTimeout(() => setCancel(false));
  };
  const handleSave = () => {
    setTimeout(() => handleCancel(), 300);
  };
  /*
    const handleSave = () => {
      const canAdd = productIsValid();
      const productFormatted = productFormatter(productToAdd);

      if (canAdd) add.mutate(productFormatted);
      setTimeout(() => handleCancel(), 300);
      setProductToAdd(form);
      setIsAdding(false);
    };

    */

  useEffect(() => {
    //   setProducts ( productsData || []);
  }, [productsData]);
  return (
    <S.ManageProducts {...props}>
      <S.ManageProductsTitle>Gerenciar Produtos</S.ManageProductsTitle>
      <S.ManageProductsSub>
        <b>Convites</b>
      </S.ManageProductsSub>
      <S.ManageProductsContent>
        {!isAdding ? (
          <S.ManageProductsContentAdd onClick={() => setIsAdding(!isAdding)}>
            <Add />
            <span>Adicionar Convites</span>
          </S.ManageProductsContentAdd>
        ) : (
          <S.AddCard>
            <S.EditForm
              type="text"
              placeholder="Título"
              success={Boolean(productToAdd.name.length)}
              value={productToAdd.name}
              onChange={({ target }) => handleAddChange("name", target.value)}
            />
            <S.EditForm
              type="number"
              placeholder="Preço"
              success={Boolean(productToAdd.price)}
              value={productToAdd.price || ""}
              onChange={({ target }) => handleAddChange("price", +target.value)}
            />
            <S.EditForm
              type="text"
              placeholder="Descrição"
              success={Boolean(productToAdd.description.length)}
              value={productToAdd.description}
              onChange={({ target }) =>
                handleAddChange("description", target.value)
              }
            />
            <S.EditForm
              type="url"
              placeholder="Imagem"
              success={Boolean(productToAdd.image.length)}
              value={productToAdd.image}
              onChange={({ target }) => handleAddChange("image", target.value)}
            />
          </S.AddCard>
        )}
        {products.map((product, index) => (
          <EditProduct product={product} key={index} />
        ))}
      </S.ManageProductsContent>
      <S.ManageProductsActions>
        <S.ManageProductsActionsCancel onClick={handleCancel}>
          Cancelar
        </S.ManageProductsActionsCancel>
        <S.ManageProductsActionsSave onClick={handleSave}>
          Salvar Mudanças
        </S.ManageProductsActionsSave>
      </S.ManageProductsActions>
    </S.ManageProducts>
  );
};

export default ManageProducts;
