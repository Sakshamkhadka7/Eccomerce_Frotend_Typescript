import React, { useEffect } from "react";
import IndexAdmin from "../IndexAdmin";
import AdminOrderTable from "./components/AdminOrderTable";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { fetchAllOrders } from "../../../store/adminOrderSlice";

const AdminOrder = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((store) => store.adminOrders);
  useEffect(() => {
    dispatch(fetchAllOrders());
  }, []);

  return (
    <IndexAdmin>
      <AdminOrderTable orders={items} />
    </IndexAdmin>
  );
};

export default AdminOrder;
