import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ICartInitalState, ICartItems } from "../pages/cart/cart";
import { Status } from "../globals/types/type";
import type { AppDispatch } from "./store";
import { APIWITHTOKEN } from "../http";

const initialState: ICartInitalState = {
  items: [],
  status: Status.LOADING,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItem(state: ICartInitalState, action: PayloadAction<ICartItems[]>) {
      state.items = action.payload;
    },
    setStatus(state: ICartInitalState, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});

export const { setItem, setStatus } = cartSlice.actions;
export default cartSlice.reducer;

export function addToCart(productId: string) {
  return async function addToCartThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.post("/cart/createcart", {
        productId: productId,
        quantity: 1,
      });
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setItem(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log("Error occured at createCart", error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function fetchMyCarts(){
    return async function fetchMyCartsThunk(dispatch:AppDispatch){
        try {
            const response=await APIWITHTOKEN.get("/cart/getcart");
            if(response.status ===200){
              dispatch(setItem(response.data.data))
            }else{
                dispatch(setStatus(Status.ERROR))
            }

        } catch (error) {
            console.log("Error occured at a fetchMyCarts",error);
            dispatch(setStatus(Status.ERROR))
        }
    }
}
