import type { Status } from "../../globals/types/type";

export interface IProductCart{
   productId:string,
  productImage:string,
  productName:string,
  productPrice:number
}


export interface ICartItems {
 cartId:string,
 productId:string,
 quantity:string,
 Product:IProductCart
}

export interface ICartInitalState {
  items: ICartItems[],
  status:Status 
}


