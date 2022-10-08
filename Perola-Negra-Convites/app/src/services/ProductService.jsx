class ProductsService {
  static async getLista() {
    fetch("/jogos");
  }
  static getCreate() {}
  static getId() {}
  static getDelete() {}
  static getUpdate() {}
}

export default ProductsService;



 // fetch();
/*
import { Api } from "helpers/endpoints/Api";
import { endpoint } from "helpers/endpoints";
import { Product, ProductResponse, ProductUpdate } from "types/api/product";

export const ProductService = {
  getLista: (): Promise<ProductResponse[]> =>
    Api(endpoint.listProducts(), {
      method: "GET",
    }).then((response) => response.json()),

  create: (product: Product) =>
    Api(endpoint.createProduct(), {
      method: "POST",
      body: JSON.stringify(product),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json()),

  getById: (id: string) =>
    Api(endpoint.productById(id), {
      method: "GET",
    }).then((response) => response.json()),

  updateById: ({ product, id }: ProductUpdate) =>
    Api(endpoint.productById(id), {
      method: "PATCH",
      body: JSON.stringify(product),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json()),

  deleteById: (id: string) =>
    Api(endpoint.productById(id), {
      method: "DELETE",
    }).then((response) => response.json()),
};
*/