import type { ICategory } from "../Categories";
import { APIWITHTOKEN } from "../../../../http";

const CategoryTable = ({ categories }: { categories: ICategory[] }) => {
 
    const deleteCategory = async (id: string) => {
    try {
      const response = await APIWITHTOKEN.delete(
        "http://localhost:3000/api/category/deleteCategory/" + id,
      );
      if (response.status === 200) {
        alert("Id deleted successfully");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log("Error occured at delete category", error);
    }
  };


  return (
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
        {categories.length > 0 &&
          categories.map((item) => {
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
                  <button onClick={()=> deleteCategory(item?.categoryId)} className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })} 
      </tbody>
    </table>
  );
};

export default CategoryTable;
