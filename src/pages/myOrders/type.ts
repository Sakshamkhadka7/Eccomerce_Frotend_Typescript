export enum OrderStaus {
  Prepration = "prepration",
  OntheWay = "ontheway",
  Delivered = "delivered",
  Pending = "pending",
  Cancelled = "cancelled",
}

export interface IOrderDetails {
  id: string;
  quantity: number;
  createdAt: string;
  orderId: string;
  productId: string;
  Order: {
    totalAmount: number;
    addressLine: string;
    orderStaus: OrderStaus;
    phoneNumber: 1234567890;
    state: string;
    Table: {
      paymentMethod: string;
      paymentStatus: string;
    };
  };
  Product: {
    productName: string;
    productPrice: 999;
    productImage: string;
    Category: {
      categoryId: string;
      categoryName: string;
      createdAt: string;
    };
  };
}
