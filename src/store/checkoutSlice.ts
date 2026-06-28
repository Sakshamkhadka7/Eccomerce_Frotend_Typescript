import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IData, IOrder, IOrderItems } from "../pages/checkout/type";
import { Status } from "../globals/types/type";
import type { AppDispatch } from "./store";
import { APIWITHTOKEN } from "../http";

const initialState: IOrder = {
  items: [],
  status: Status.LOADING,
  khaltiUrl:null
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setItems(state: IOrder, action: PayloadAction<IOrderItems[]>) {
      state.items = action.payload;
    },
    setStatus(state: IOrder, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setKhalitUrl(state:IOrder,action:PayloadAction<string>){
        state.khaltiUrl=action.payload
    }
  },
});

export default orderSlice.reducer;
export const { setItems, setStatus ,setKhalitUrl } = orderSlice.actions;

export function orderItem(data: IData) {
  return async function orderItemThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.post("/order/createorder", {
        data,
      });
      if (response.status === 200) {
        dispatch(setItems(response.data.data));
        dispatch(setStatus(Status.SUCCESS))
        if(response.data.url){
            dispatch(setKhalitUrl(response.data.url))
        }
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log("Error occured at orderItem", error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
