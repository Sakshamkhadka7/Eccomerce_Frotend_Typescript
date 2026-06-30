import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IData, IOrder, IOrderItems } from "../pages/checkout/type";
import { Status } from "../globals/types/type";
import type { AppDispatch } from "./store";
import { APIWITHTOKEN } from "../http";
import { OrderStaus, type IOrderDetails } from "../pages/myOrders/type";

const initialState: IOrder = {
  items: [],
  status: Status.LOADING,
  khaltiUrl: null,
  orderDetails: [],
};

const checkoutSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setItems(state: IOrder, action: PayloadAction<IOrderItems[]>) {
      state.items = action.payload;
    },
    setOrderDetails(state: IOrder, action: PayloadAction<IOrderDetails[]>) {
      console.log("action payload",action.payload);
      state.orderDetails = action.payload;
    },
    setStatus(state: IOrder, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setKhalitUrl(state: IOrder, action: PayloadAction<string>) {
      state.khaltiUrl = action.payload;
    },
    updateOrderStatusToCancel(state:IOrder,action:PayloadAction<{orderId:string}>){
      const data=state.items.find((item)=> item.orderId === action.payload.orderId)
      if(data){
        data.orderStaus=OrderStaus.Cancelled
      }
    }
  },
});

export default checkoutSlice.reducer;
export const { setItems, setStatus, setKhalitUrl , setOrderDetails ,updateOrderStatusToCancel} = checkoutSlice.actions;

export function orderItem(data: IData) {
  return async function orderItemThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.post("/order/createorder", {
        data,
      });
      if (response.status === 200) {
        dispatch(setItems(response.data.data));
        dispatch(setStatus(Status.SUCCESS));
        console.log("Response url : ", response.data.url);
        if (response.data.url) {
          dispatch(setKhalitUrl(response.data.url));
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

export function fetchMyOrders() {
  return async function fetchMyOrdersThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.get("/order/getmyorder");
      if (response.status === 200) {
        dispatch(setItems(response.data.data));
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log("Error occured at fetchMyOrder", error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function fetchMyOrdersDetails(id: string) {  
  return async function fetchMyOrdersDetailsThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.get(`/order/getmyorderdetails/${id}`);
      if (response.status === 200) {
        console.log("Response data :" ,response.data.data);
         dispatch(setStatus(Status.SUCCESS));
        dispatch(setOrderDetails(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log("Error occured at fetchMyOrder", error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function cancelOrder(id: string) {  
  return async function cancelOrderThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.patch(`/order/cancel-order/${id}`);
      if (response.status === 200) {
        console.log("Response data :" ,response.data.data);
         dispatch(setStatus(Status.SUCCESS));
        dispatch(updateOrderStatusToCancel({orderId:id}))
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log("Error occured at fetchMyOrder", error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}


