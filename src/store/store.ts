import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice"
import checkoutSlice from "./checkoutSlice"
import categoriesSlice from "./adminCategoriesSlice"
import userSlice from "./adminUserSlice"
import adminProductSlice from "./adminProductSlice"

const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
    carts:cartSlice,
    orders:checkoutSlice,
    categories:categoriesSlice,
    users:userSlice,
    adminProducts:adminProductSlice
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
