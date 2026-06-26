import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "./type";

const productInfo: Product = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: productInfo,
  reducers: {
    setProduct(state: Product, action: PayloadAction) {
      state.products = [
        {
          productName: "wai wai chau chau",
          quantity: 12,
        },
      ];
    },
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
