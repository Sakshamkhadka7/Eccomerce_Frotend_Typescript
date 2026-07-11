import { Link } from "react-router-dom";
import type { IProduct } from "../types/productType";

interface ICard {
  product: IProduct;
}

const Card: React.FC<ICard> = ({ product }) => {
  return (
    <Link to={`/products/${product.productId}`} className="group block">
      <div className="overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={`http://localhost:3000/${product.productImage}`}
            alt={product.productName}
            className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Discount Badge */}
          {product.productDiscount > 0 && (
            <span className="absolute top-4 left-4 rounded-full bg-pink-600 px-3 py-1 text-xs font-semibold text-white shadow">
              {product.productDiscount}% OFF
            </span>
          )}

          {/* Category */}
          <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
            {product.Category?.categoryName || "Accessories"}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="truncate text-lg font-bold text-gray-900">
              {product.productName}
            </h3>

            <span className="text-yellow-500 text-sm">⭐ 4.9</span>
          </div>

          <p className="mt-3 line-clamp-2 text-sm text-gray-500">
            {product.productDescriptions}
          </p>

          {/* Price */}
          <div className="mt-5 flex items-end gap-3">
            <span className="text-2xl font-bold text-pink-600">
              Rs. {product.productPrice}
            </span>

            {product.productDiscount > 0 && (
              <>
                <span className="text-sm text-gray-400 line-through">
                  Rs. {product.productPrice}
                </span>

                <span className="rounded-full bg-pink-100 px-2 py-1 text-xs font-semibold text-pink-600">
                  {product.productDiscount}% OFF
                </span>
              </>
            )}
          </div>

          {/* Button */}
          <button className="mt-6 w-full rounded-xl bg-pink-600 py-3 font-semibold text-white transition hover:bg-pink-700">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
