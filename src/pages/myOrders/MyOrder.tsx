import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { socket } from "../../App";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  fetchMyOrders,
  updateOrderStatusInSlice,
} from "../../store/checkoutSlice";
import { Status } from "../../globals/types/type";
import { OrderStaus } from "./type";

const MyOrder = () => {
  const { items, status } = useAppSelector((store) => store.orders);

  const dispatch = useAppDispatch();

  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleStatusUpdate = (data: any) => {
      dispatch(updateOrderStatusInSlice(data));
    };

    socket.on("statusUpdate", handleStatusUpdate);

    return () => {
      socket.off("statusUpdate", handleStatusUpdate);
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMyOrders());
  }, [dispatch]);

  const filterItem = Array.isArray(items)
    ? items.filter((item) => {
        return (
          item?.Table?.paymentStatus
            ?.toLowerCase()
            .includes(search.toLowerCase()) ||
          item?.Table?.paymentMethod
            ?.toLowerCase()
            .includes(search.toLowerCase()) ||
          item?.orderStaus?.toLowerCase().includes(search.toLowerCase())
        );
      })
    : [];

  const getStatusClass = (status: string | undefined) => {
    switch (status) {
      case OrderStaus.Delivered:
        return "bg-green-120 text-green-700";

      case OrderStaus.Prepration:
        return "bg-blue-100 text-blue-700";

      case OrderStaus.OntheWay:
        return "bg-purple-100 text-purple-700";

      case OrderStaus.Cancelled:
        return "bg-red-100 text-red-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}

        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">My Orders</h1>

              <p className="text-slate-500 mt-2">
                View and track all your placed orders.
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>
        </div>

        {/* Summary */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-slate-500">Total Orders</p>

            <h2 className="text-3xl font-bold mt-2">{items.length}</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-slate-500">Delivered</p>

            <h2 className="text-3xl font-bold text-green-600 mt-2">
              {
                items.filter((item) => item.orderStaus === OrderStaus.Delivered)
                  .length
              }
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-slate-500">Pending</p>

            <h2 className="text-3xl font-bold text-yellow-600 mt-2">
              {
                items.filter((item) => item.orderStaus === OrderStaus.Pending)
                  .length
              }
            </h2>
          </div>
        </div>

        {/* Loading */}

        {status === Status.LOADING ? (
          <div className="bg-white rounded-xl p-10 text-center">
            Loading orders...
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-6 py-4">Order ID</th>

                  <th className="text-left px-6 py-4">Status</th>

                  <th className="text-left px-6 py-4">Total</th>

                  <th className="text-left px-6 py-4">Payment</th>

                  <th className="text-left px-6 py-4">Payment Status</th>
                </tr>
              </thead>

              <tbody>
                {filterItem.length > 0 ? (
                  filterItem.map((item) => (
                    <tr
                      key={item.orderId}
                      className="border-b hover:bg-slate-50"
                    >
                      <td className="px-6 py-4">
                        <Link
                          to={`/my-orders/${item.orderId}`}
                          className="text-pink-600 font-semibold hover:underline"
                        >
                          {item.orderId}
                        </Link>
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(
                            item.orderStaus,
                          )}`}
                        >
                          {item.orderStaus}
                        </span>
                      </td>

                      <td className="px-6 py-4 font-medium text-slate-700">
                        Rs. {Number(item.totalAmount).toLocaleString()}
                      </td>

                      <td className="px-6 py-4">
                        <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">
                          {item.Table?.paymentMethod}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            item.Table?.paymentStatus?.toLowerCase() === "paid"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {item.Table?.paymentStatus}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="text-center py-16 text-slate-500"
                    >
                      No orders found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
