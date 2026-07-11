import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { Status } from "../../../../globals/types/type";
import { fetchCategories } from "../../../../store/adminCategoriesSlice";
import {
  addAdminProducts,
  editAdminProduct,
  setResetStatusProduct,
  type IProducts,
} from "../../../../store/adminProductSlice";

interface ModalProps {
  closeModal: () => void;
  mode?: "add" | "edit";
  product?: IProducts | null;
}

export interface IAdminProducts {
  productId?: string;
  productName: string;
  productDescriptions: string;
  productPrice: number;
  productTotalStock: number;
  productDiscount: number;
  categoryId: string;
  productImage: string | File;
}

const getInitialProductState = (product?: IProducts | null): IAdminProducts => ({
  productId: product?.productId,
  productName: product?.productName ?? "",
  productDescriptions: product?.productDescriptions ?? "",
  productPrice: product?.productPrice ?? 0,
  productTotalStock: product?.productTotalStock ?? 0,
  productDiscount: product?.productDiscount ?? 0,
  categoryId: "",
  productImage: "",
});

const ProductModal: React.FC<ModalProps> = ({ closeModal, mode = "add", product }: ModalProps) => {
  const [data, setData] = useState<IAdminProducts>(getInitialProductState(product));
  const { status } = useAppSelector((store) => store.adminProducts);
  const { items } = useAppSelector((store) => store.categories);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const isEditing = mode === "edit";

  useEffect(() => {
    setData(getInitialProductState(product));
  }, [product, mode]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const numericFields = ["productPrice", "productTotalStock", "productDiscount"];
    const nextValue = name === "productImage"
      ? (e.target as HTMLInputElement).files?.[0] ?? ""
      : numericFields.includes(name)
        ? Number(value)
        : value;

    setData((prev) => ({ ...prev, [name]: nextValue }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("productName", data.productName);
      formData.append("productDescriptions", data.productDescriptions);
      formData.append("productPrice", String(data.productPrice));
      formData.append("productTotalStock", String(data.productTotalStock));
      formData.append("productDiscount", String(data.productDiscount));
      formData.append("categoryId", data.categoryId);

      if (data.productImage instanceof File) {
        formData.append("productImage", data.productImage);
      }

      if (isEditing && product?.productId) {
        dispatch(editAdminProduct(product.productId, formData));
      } else {
        dispatch(addAdminProducts(formData));
      }
    } catch (error) {
      console.log("Error occurred at handle submit", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === Status.SUCCESS) {
      setLoading(false);
      closeModal();
      dispatch(setResetStatusProduct());
    }
  }, [closeModal, dispatch, status]);

  return (
    <div
      id="modal"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="fixed inset-0 bg-black/50" />
      <div className="relative w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {isEditing ? "Edit Product" : "Add Product"}
          </h3>
          <button
            onClick={closeModal}
            id="closeModalButton"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg
              className="h-4 w-4 inline-block ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="product-name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Product Name
              </label>
              <input
                name="productName"
                onChange={handleChange}
                type="text"
                id="product-name"
                value={data.productName}
                className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Clothes ..."
                required
              />
            </div>

            <div>
              <label
                htmlFor="product-price"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Product Price
              </label>
              <input
                name="productPrice"
                onChange={handleChange}
                type="number"
                id="product-price"
                value={data.productPrice}
                className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="12000"
                required
              />
            </div>

            <div>
              <label
                htmlFor="product-stock"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Product Stock
              </label>
              <input
                name="productTotalStock"
                onChange={handleChange}
                type="number"
                id="product-stock"
                value={data.productTotalStock}
                className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="29"
                required
              />
            </div>

            <div>
              <label
                htmlFor="product-description"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Product Descriptions
              </label>
              <textarea
                name="productDescriptions"
                onChange={handleChange}
                id="product-description"
                value={data.productDescriptions}
                className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Details descriptions ..."
                required
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="product-discount"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Product Discount
              </label>
              <input
                name="productDiscount"
                onChange={handleChange}
                type="number"
                id="product-discount"
                value={data.productDiscount}
                className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="999"
                required
              />
            </div>

            <div>
              <label
                htmlFor="product-image"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Product Image
              </label>
              <input
                name="productImage"
                onChange={handleChange}
                type="file"
                id="product-image"
                className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                required={!isEditing}
              />
            </div>
            <div>
              <label
                htmlFor="product-category"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Category
              </label>
              <select
                onChange={handleChange}
                name="categoryId"
                id="product-category"
                value={data.categoryId}
                className="w-[200px]"
              >
                <option value="">Select a category</option>
                {items.length > 0 &&
                  items.map((item) => (
                    <option value={item.categoryId} key={item.categoryId}>
                      {item.categoryName}
                    </option>
                  ))}
              </select>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={closeModal}
                id="cancelButton"
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                id="submitUrlButton"
                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 dark:from-indigo-500 dark:to-violet-500 dark:hover:from-indigo-600 dark:hover:to-violet-600"
                disabled={loading}
              >
                {loading ? (isEditing ? "Saving......" : "Adding......") : isEditing ? "Save" : "Add"}
                <svg
                  className="h-4 w-4 inline-block ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
