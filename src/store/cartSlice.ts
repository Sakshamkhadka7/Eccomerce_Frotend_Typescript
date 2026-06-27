import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  ICartInitalState,
  ICartItems,
  IUpdateCart,
} from "../pages/cart/cart";
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
    setUpdateCartItem(
      state: ICartInitalState,
      action: PayloadAction<IUpdateCart>,
    ) {
      const index = state.items.findIndex(
        (item) => item.Product.productId == action.payload.productId,
      );
      if (index !== -1) {
        state.items[index].quantity = action.payload.quantity;
      }
    },
    setDeleteCartItem(state:ICartInitalState,action:PayloadAction<string>){
      const index=state.items.findIndex((item)=> item.Product.productId == action.payload)
      if(index !== -1){
        state.items.splice(index,1);
      }
    }


  },
});

export const { setItem, setStatus, setUpdateCartItem , setDeleteCartItem} = cartSlice.actions;
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

export function fetchMyCarts() {
  return async function fetchMyCartsThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.get("/cart/getcart");
      console.log(response);
      if (response.status === 200) {
        dispatch(setItem(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log("Error occured at a fetchMyCarts", error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function handleCartUpdate(productId: string, quantity: number) {
  return async function handleCartUpdateThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.put(`/cart/updatecart/${productId}`, {
        quantity,
      });

      if (response.status === 200) {
        dispatch(setUpdateCartItem({ productId, quantity }));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log("error occured at handleCartUpdate", error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function handleCartDelete(productId: string) {
  return async function handleCartDeleteThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.delete(`/cart/deletecart/${productId}`);

      if (response.status === 200) {
        dispatch(setDeleteCartItem(productId));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log("error occured at handleCartUpdate", error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
