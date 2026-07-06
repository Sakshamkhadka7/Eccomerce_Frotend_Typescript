import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { fetchProducts } from "../../../../store/adminProductSlice";
import ProductModal from "./ProductModal";

const ProductTable = () => {

   const [isModalOpen,setIsModalOpen]=useState(false)
    const dispatch=useAppDispatch()
   const {products}=useAppSelector((store)=>store.adminProducts)

    useEffect(()=>{
      dispatch(fetchProducts())
    },[])

    const openModal=useCallback(()=> setIsModalOpen(true),[])
    const closeModal=useCallback(()=> setIsModalOpen(false),[])

  return (
    <div>
      <div>
        {isModalOpen && <ProductModal closeModal={closeModal} />}
        <div className="flex justify-between items-center ">
          <div>
            <input
              className="mx-4  border rounded-md px-4 py-2"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="flex items-center pr-4">
            <button onClick={openModal} className="bg-blue-500 rounded text-white p-2">
              + Add Product
            </button>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Id
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Name
              </th>
             
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              productDescriptions
              </th>

               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
           productPrice
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
           productTotalStock
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
           productDiscount
              </th>

              
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
           productImage
              </th>
              
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
           {products.length > 0 && products.map((product)=>{
            return (
                 <tr key={product.productId}>
                     <td className="px-6 py-4 whitespace-nowrap">{product.productId}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.productName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.productDescriptions}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.productPrice}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.productTotalStock}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.productDiscount}</td>
             
              <td className="px-6 py-4 whitespace-nowrap"><img src={`http://localhost:3000/${product.productImage}`} /></td>

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

export default ProductTable;
