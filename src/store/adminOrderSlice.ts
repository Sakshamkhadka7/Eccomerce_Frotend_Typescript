import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globals/types/type";
import type { AppDispatch } from "./store";
import { APIWITHTOKEN } from "../http";
import type { IOrderDetails } from "../pages/myOrders/type";


export interface IAdminOrder {
  orderId: string;
  quantity: string;
  orderStaus?: string;
  totalAmount: number;
  Table: {
    paymentMethod: string;
    paymentStatus: string;
  };
}

interface IInitialState {
  items: IAdminOrder[];
  status: Status;
  orderDetails:IOrderDetails [];
}

const initialState: IInitialState = {
  items: [],
  status: Status.LOADING,
  orderDetails: [],
};

const adminOrderSlice = createSlice({
  name: "adminorders",
  initialState,
  reducers: {
    setItems(state: IInitialState, action: PayloadAction<IAdminOrder[]>) {
      state.items = action.payload;
    },
    setStatus(state: IInitialState, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setOrderDetails(state:IInitialState,action:PayloadAction<IOrderDetails[]>){
        state.orderDetails=action.payload
    }
//      updateOrderStatusToCancel(
//        state: IOrder,
//        action: PayloadAction<{ orderId: string }>,
//      ) {
//        const data = state.items.find(
//          (item) => item.orderId === action.payload.orderId,
//    );
//        if (data) {
//          data.Order.orderStaus = OrderStaus.Cancelled;
//        }
//      },
  },
});

export default adminOrderSlice.reducer;
export const {
  setItems,
  setStatus,
  setOrderDetails
} = adminOrderSlice.actions;

// export function orderItem(data: IData) {
//   return async function orderItemThunk(dispatch: AppDispatch) {
//     try {
//       const response = await APIWITHTOKEN.post("/order/createorder", {
//         data,
//       });
//       if (response.status === 200) {
//         dispatch(setItems(response.data.data));
//         dispatch(setStatus(Status.SUCCESS));
//         console.log("Response url : ", response.data.url);
//         if (response.data.url) {
//           dispatch(setKhalitUrl(response.data.url));
//         }
//       } else {
//         dispatch(setStatus(Status.ERROR));
//       }
//     } catch (error) {
//       console.log("Error occured at orderItem", error);
//       dispatch(setStatus(Status.ERROR));
//     }
//   };
// }

export function fetchAllOrders() {
  return async function fetchAllOrdersThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.get("/order/fetchallorders");
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

export function fetchAllOrdersDetails(id: string) {
  return async function fetchAllOrdersDetailsThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.get(`/order/getmyorderdetails/${id}`);
      if (response.status === 200) {
        console.log("Response data :", response.data.data);
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

// export function cancelOrder(id: string) {
//   return async function cancelOrderThunk(dispatch: AppDispatch) {
//     try {
//       const response = await APIWITHTOKEN.patch(`/order/cancel-order/${id}`);
//       if (response.status === 200) {
//         console.log("Response Cancel data :", response.data.data);
//         dispatch(setStatus(Status.SUCCESS));
//         dispatch(updateOrderStatusToCancel({ orderId: id }));
//       } else {
//         dispatch(setStatus(Status.ERROR));
//       }
//     } catch (error) {
//       console.log("Error occured at fetchMyOrder", error);
//       dispatch(setStatus(Status.ERROR));
//     }
//   };
// }
