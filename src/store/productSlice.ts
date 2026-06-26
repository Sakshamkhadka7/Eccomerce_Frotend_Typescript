import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct, IProducts } from "../pages/product/types/productType";
import { Status } from "../globals/types/type";
import type { AppDispatch } from "./store";

const initialState: IProducts = {
  products: [],
  status: Status.LOADING,
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
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;


function fetchProduct(data){
    return async function fetchProductThunk(dispatch:AppDispatch)
    try {
         
            const response=await axu

    } catch (error) {
        console.log("Error occured at fetchdProducts",error);
        setStatus(Status.ERROR)
    }
}
