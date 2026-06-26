import type { Status } from "../../../globals/types/type";

interface ICategory {
  categoryId: string;
  categoryName: string;
}

export interface IProduct {
  productId: string;
  productName: string;
  productDescriptions: string;
  productPrice: number;
  productTotalStock: number;
  productDiscount: number;
  productImage: string;
  createdAt: string;
  updatedAt: string;
  categoryId: string;
  Category: ICategory;
}

export interface IProducts {
  products: IProduct[];
  status: Status;
}
