import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { fetchMyOrders } from "../../store/checkoutSlice";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const { items } = useAppSelector((store) => store.orders);
  const dispatch = useAppDispatch();
  const [search,setSearch]=useState<string>("");

  const filterItem=items.filter((item)=>{
   
    return item.Table.paymentStatus.toLowerCase().includes(search) || item.orderStaus?.toLowerCase().includes(search) || item.Table.paymentMethod.toLowerCase().includes(search)

  })

  useEffect(() => {
    dispatch(fetchMyOrders());
  }, []);

  return (
    <div>
      <div className="w-full flex justify-between items-center mb-3 mt-1 pl-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Shopping Cart
          </h3>
          <p className="text-slate-500">Review your selected items.</p>
        </div>
        <div className="mx-3">
          <div className="w-full max-w-sm min-w-[200px] relative">
            <div className="relative">
              <input
               onChange={(e)=> setSearch(e.target.value)}
                className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                placeholder="Search for product..."
              />
              <button
                className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded "
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-8 h-8 text-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr className="border-b border-slate-300 bg-slate-50">
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                OrderId
              </th>
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Order Status
              </th>
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Total Amount
              </th>
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Payment Method
              </th>
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Payment Status
              </th>
              <th className="p-4 text-sm font-normal leading-none text-slate-500" />
            </tr>
          </thead>
          <tbody>
            {filterItem.length > 0 &&
              filterItem.map((item) => {
                return (
                  <tr className="hover:bg-slate-50" key={item.orderId}>
                    <td className="p-4 border-b border-slate-200 py-5">
                        <Link to={`/my-orders/${item.orderId}`}>
                         <p className="block font-semibold text-sm text-slate-800">
                        {item.orderId}
                      </p>
                        </Link>
                     
                    </td>
                    <td className="p-4 border-b border-slate-200 py-5">
                      <p className="block font-semibold text-sm text-slate-800">
                        {item.orderStaus}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200 py-5">
                      <p className="text-sm text-slate-500">
                        {item.totalAmount}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200 py-5">
                      <p className="text-sm text-slate-500">
                        {item.Table.paymentMethod}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200 py-5">
                      <p className="text-sm text-slate-500">
                        {item.Table.paymentStatus}
                      </p>
                    </td>
                  
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
