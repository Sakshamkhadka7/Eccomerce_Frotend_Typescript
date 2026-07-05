import type { ICategory } from "../Categories";
import { useAppDispatch } from "../../../../store/hook";
import { handleCategoriesDelete } from "../../../../store/adminCategoriesSlice";
import { useState } from "react";
import Modal from "./Modal";

const CategoryTable = ({ categories }: { categories: ICategory[] }) => {

  const [searchItem,setSearchItem]=useState("");
  const [isModalOpen,setIsOpenModal]=useState(false)
  const dispatch = useAppDispatch();

  const deleteCategory = async (id: string) => {
    if (id) {
      dispatch(handleCategoriesDelete(id));
    }
  };

  const openModal=()=> setIsOpenModal(true);
  const closeModal=()=> setIsOpenModal(false)

  const filteredItem=categories.filter((category)=> category.categoryName.toLowerCase().includes(searchItem.toLowerCase()) || category.categoryId.includes(searchItem.toLowerCase()))

  

  return (
    <div>
      {isModalOpen && <Modal closeModal={closeModal}/>}
     <div>
       <div className="flex justify-between items-center ">
        <div>
          <input
          onChange={(e)=> setSearchItem(e.target.value)}
            className="mx-4  border rounded-md px-4 py-2"
            type="text"
            placeholder="Search"
          />
        </div>
        <div onClick={openModal} className="flex items-center pr-4">
          <button  className="bg-blue-500 rounded text-white p-2">
            + Add Categories
          </button>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category Id
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredItem.length > 0 &&
            filteredItem.map((item) => {
              return (
                <tr key={item.categoryId}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item?.categoryId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item?.categoryName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                      Edit
                    </button>
                    <button
                      onClick={() => deleteCategory(item?.categoryId)}
                      className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
                    >
                      Delete
                    </button>
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

export default CategoryTable;
