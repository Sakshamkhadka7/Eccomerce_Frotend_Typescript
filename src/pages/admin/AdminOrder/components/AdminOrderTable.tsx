import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { fetchProducts } from "../../../../store/adminProductSlice";
import { Link } from "react-router-dom";
import type { IAdminOrder } from "../../../../store/adminOrderSlice";

const AdminOrderTable = ({orders}:{orders:IAdminOrder[]}) => {

   
    const dispatch=useAppDispatch()
//    const {products}=useAppSelector((store)=>store.adminOrders)

    useEffect(()=>{
      dispatch(fetchProducts())
    },[])

  return (
    <div>
      <div>
    
        <div className="flex justify-between items-center ">
          <div>
            <input
              className="mx-4  border rounded-md px-4 py-2"
              type="text"
              placeholder="Search"
            />
          </div>
    
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order Id
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Amount
              </th>
             
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Order Status
              </th>

               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Order Quantity
              </th>

               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Payment Method
              </th>


              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
           {orders.length > 0 && orders.map((orders)=>{
            return (
                 <tr key={orders.orderId}>
                    <Link to={`/admin/orders/${orders.orderId}`}> <td className="px-6 py-4 whitespace-nowrap">{orders.orderId}</td></Link>
              <td className="px-6 py-4 whitespace-nowrap">{orders.totalAmount}</td>
              <td className="px-6 py-4 whitespace-nowrap">{orders.orderStaus}</td>
              <td className="px-6 py-4 whitespace-nowrap">{orders.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap">{orders.Table.paymentMethod}</td>
            

              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                  Edit
                </button>
                <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                  Delete
                </button>
              </td>
            </tr>
            )
           })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrderTable;
