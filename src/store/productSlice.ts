import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct, IProducts } from "../pages/product/types/productType";
import { Status } from "../globals/types/type";
import type { AppDispatch, RootState } from "./store";
import axios from "axios";

const initialState: IProducts = {
  products: [],
  status: Status.LOADING,
  product: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state: IProducts, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
    setStatus(state: IProducts, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setProduct(state: IProducts, action: PayloadAction<IProduct>) {
      state.product = action.payload;
    },
  },
});

export const { setProducts, setStatus, setProduct } = productSlice.actions;
export default productSlice.reducer;

export function fetchProduct() {
  return async function fetchProductThunk(dispatch: AppDispatch) {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/product/getProduct",
      );

      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setProducts(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log("Error occured at fetchdProducts", error);
      setStatus(Status.ERROR);
    }
  };
}

export function singleFetchProduct(id: string) {
  return async function singleFetchProductThunk(
    dispatch: AppDispatch,
    getState: () => RootState,
  ) {
    const store = getState();
    const productExists = store.products.products.find(
      (product) => product.productId === id,
    );
    if (productExists) {
      dispatch(setProduct(productExists));
      dispatch(setStatus(Status.SUCCESS));
    } else {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/product/getSingleProduct/${id}`,
        );
        console.log(response);
        console.log("Response", response.data.data[0]);

        if (response.status === 200) {
          dispatch(setStatus(Status.SUCCESS));
          dispatch(setProduct(response.data.data[0]));
        } else {
          dispatch(setStatus(Status.ERROR));
        }
      } catch (error) {
        console.log("Error occured at fetchdProducts", error);
        setStatus(Status.ERROR);
      }
    }
  };
}
