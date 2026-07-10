import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Navbar from "./globals/components/Navbar";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import MyCart from "./pages/cart/MyCart";
import Checkout from "./pages/checkout/Checkout";
import MyOrder from "./pages/myOrders/MyOrder";
import MyOrderDetail from "./pages/myOrders/MyOrderDetail";
import Categories from "./pages/admin/categories/Categories";
import AdminStats from "./pages/admin/stats/AdminStats";
import User from "./pages/admin/users/User";
import AdminProducts from "./pages/admin/products/AdminProducts";
import ProductDescription from "./pages/admin/productDescriptions/ProductDescription";
import AdminOrder from "./pages/admin/AdminOrder/AdminOrder";
import AdminOrderDetails from "./pages/admin/orderDetailsAdmin/AdminOrderDetails";

import { io } from "socket.io-client";
import ProtectedRoute from "./ProtectedRoute";
import VerifyKhaltipidx from "./pages/checkout/VerifyKhaltipidx";
import { useAppDispatch } from "./store/hook";
import { getMe, setStatus } from "./store/authSlice";
import AdminRoute from "./AdminRoute";
import { Status } from "./globals/types/type";

export const socket = io("http://localhost:3000", {
  auth: {
    token: localStorage.getItem("token"),
  },
});

const App = () => {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(getMe());  
    }else{
      dispatch(setStatus(Status.SUCCESS))
    }
  }, [dispatch]);
  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route
          path="/my-cart"
          element={
            <ProtectedRoute>
              <MyCart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-orders"
          element={
            <ProtectedRoute>
              <MyOrder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-orders/:id"
          element={
            <ProtectedRoute>
              <MyOrderDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment-success"
          element={
            <ProtectedRoute>
              <VerifyKhaltipidx />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminStats />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/categories"
          element={
            <AdminRoute>
              <Categories />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <User />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <AdminProducts />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/products/:id"
          element={
            <AdminRoute>
              <ProductDescription />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <AdminRoute>
              <AdminOrder />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/orders/:id"
          element={
            <AdminRoute>
              <AdminOrderDetails />
            </AdminRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
