import type { Status } from "../../globals/types/type";
import type { IProduct } from "../product/types/productType";

export interface ICartItems {
  product: IProduct;
  quantity: number;
}

export interface ICartInitalState {
  items: ICartItems[],
  status:Status 
}


