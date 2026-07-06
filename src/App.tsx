import React from "react";
import { Route, Routes } from "react-router-dom";
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
// import IndexAdmin from './pages/admin/IndexAdmin'
import Categories from "./pages/admin/categories/Categories";
import AdminStats from "./pages/admin/stats/AdminStats";
import User from "./pages/admin/users/User";
import AdminProducts from "./pages/admin/products/AdminProducts";
import ProductDescription from "./pages/admin/productDescriptions/ProductDescription";
import AdminOrder from "./pages/admin/AdminOrder/AdminOrder";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/my-orders" element={<MyOrder />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/my-orders/:id" element={<MyOrderDetail />} />
        <Route path="/admin" element={<AdminStats />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/users" element={<User />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/products/:id" element={<ProductDescription />} />
        <Route path="/admin/orders" element={<AdminOrder />} />
      </Routes>
    </>
  );
};

export default App;
