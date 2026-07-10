import type { ICategory } from "../Categories";
import { useAppDispatch } from "../../../../store/hook";
import {
  editCategories,
  handleCategoriesDelete,
  type IEditCategory,
} from "../../../../store/adminCategoriesSlice";
import { useCallback, useState, type FormEvent } from "react";
import Modal from "./Modal";

const CategoryTable = ({ categories }: { categories: ICategory[] }) => {
  const dispatch = useAppDispatch();

  const [searchItem, setSearchItem] = useState("");

  const [isModalOpen, setIsOpenModal] = useState(false);

  const [editModal, setEditModal] = useState(false);

  const [selectedCategory, setSelectedCategory] =
    useState<ICategory | null>(null);

  const [editCategoryName, setEditCategoryName] = useState("");

  const deleteCategory = (id: string) => {
    dispatch(handleCategoriesDelete(id));
  };

  const openModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  const openEditModal = (category: ICategory) => {
    setSelectedCategory(category);
    setEditCategoryName(category.categoryName);
    setEditModal(true);
  };

  const closeEditModal = () => {
    setEditModal(false);
    setSelectedCategory(null);
    setEditCategoryName("");
  };

  const handleEditSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!selectedCategory) return;

    const data: IEditCategory = {
      categoryName: editCategoryName,
    };

    await dispatch(editCategories(selectedCategory.categoryId, data));

    closeEditModal();
  };

  const filteredItem = categories.filter(
    (category) =>
      category.categoryName
        .toLowerCase()
        .includes(searchItem.toLowerCase()) ||
      category.categoryId
        .toLowerCase()
        .includes(searchItem.toLowerCase())
  );

  return (
    <div>
      {isModalOpen && <Modal closeModal={closeModal} />}

      {editModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/50"></div>

          <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-semibold">
                Edit Category
              </h2>

              <button onClick={closeEditModal}>
                ✕
              </button>
            </div>

            <form onSubmit={handleEditSubmit}>
              <label className="block mb-2">
                Category Name
              </label>

              <input
                value={editCategoryName}
                onChange={(e) =>
                  setEditCategoryName(e.target.value)
                }
                className="w-full border rounded-md p-2"
                required
              />

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-5 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-5">
        <input
          className="border rounded-md px-4 py-2"
          placeholder="Search"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />

        <button
          onClick={openModal}
          className="bg-blue-600 text-white rounded px-4 py-2"
        >
          + Add Category
        </button>
      </div>

      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left">
              Category ID
            </th>

            <th className="px-6 py-3 text-left">
              Category Name
            </th>

            <th className="px-6 py-3 text-left">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredItem.map((item) => (
            <tr key={item.categoryId}>
              <td className="px-6 py-4">
                {item.categoryId}
              </td>

              <td className="px-6 py-4">
                {item.categoryName}
              </td>

              <td className="px-6 py-4">
                <button
                  onClick={() => openEditModal(item)}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteCategory(item.categoryId)
                  }
                  className="bg-red-600 text-white px-4 py-2 rounded ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;