import type { Status } from "../../globals/types/type";

export interface IProduct {
  productId: string;
  quantity: string;
}

export interface IOrderItems extends IProduct {
  orderId: string;
  
}

export interface IOrder {
  status: Status;
  items: IOrderItems[];
  khaltiUrl:string | null
}

export interface IData {
  phoneNumber: number;
  addressLine: string;
  totalAmount: number;
  paymentMethod: PaymentMethod;
  firstName: string;
  lastName: string;
  email: string;
  state: string;
  zipcode: string;
  products: IProduct[];
}

export enum PaymentMethod {
  Esewa = "esewa",
  Khalti = "khalti",
  Cod = "cod",
}
