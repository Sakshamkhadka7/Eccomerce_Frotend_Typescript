import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globals/types/type";
import type { AppDispatch } from "./store";
import { APIWITHTOKEN } from "../http";
import type { IAdminProducts } from "../pages/admin/products/components/ProductModal";

export interface IProducts {
  productId: string;
  productName: string;
  productDescriptions: string;
  productPrice: number;
  productTotalStock: number;
  productDiscount: number;
  productImage: string;
}

interface InitialStateProducts {
  products: IProducts[];
  status: Status;
}

const initialState: InitialStateProducts = {
  products: [],
  status: Status.LOADING,
};

const adminProductSlice = createSlice({
  name: "adminproduct",
  initialState,
  reducers: {
    setProducts(
      state: InitialStateProducts,
      action: PayloadAction<IProducts[]>,
    ) {
      state.products = action.payload;
    },
    setStatus(state: InitialStateProducts, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = adminProductSlice.actions;

export default adminProductSlice.reducer;

export function fetchProducts() {
  return async function fetchProductsThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.get("/product/getProduct");
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setProducts(response.data.data));
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR));
      console.log("error occured at fetch Products", error);
    }
  };
}

export function addAdminProducts(data: IAdminProducts) {
  return async function addAdminProductsThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.post("/product/addProduct/", data, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setProducts(response.data.data));
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR));
      console.log("error occured at fetch Products", error);
    }
  };
}
