import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { singleFetchProduct } from "../../store/productSlice";
import { useParams } from "react-router-dom";
import { addToCart } from "../../store/cartSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const product = useAppSelector((store) => store.products.product);

  console.log("Product", product);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(singleFetchProduct(id));
    }
  }, []);

  const handleAddToCart = () => {
    if (id) {
      dispatch(addToCart(id));
    }
  };

return (
  <div className="bg-gradient-to-b from-pink-50 to-white py-16">
    <div className="container mx-auto px-6 lg:px-10">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT */}
        <div>

          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl border">

            {product?.productDiscount > 0 && (
              <span className="absolute top-5 left-5 z-10 rounded-full bg-pink-600 px-4 py-2 text-sm font-semibold text-white">
                {product.productDiscount}% OFF
              </span>
            )}

            <img
              src={`http://localhost:3000/${product?.productImage}`}
              alt={product?.productName}
              className="w-full h-[650px] object-cover transition duration-500 hover:scale-105"
            />

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center">

          <span className="w-fit rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
            {product?.Category?.categoryName}
          </span>

          <h1 className="mt-5 text-4xl lg:text-5xl font-bold text-gray-900">
            {product?.productName}
          </h1>

          <div className="mt-5 flex items-center gap-3">

            <span className="text-yellow-500 text-lg">
              ⭐⭐⭐⭐⭐
            </span>

            <span className="text-gray-500">
              (4.9 Reviews)
            </span>

          </div>

          {/* Price */}
          <div className="mt-8 flex items-center gap-4">

            <h2 className="text-4xl font-bold text-pink-600">
              Rs. {product?.productPrice}
            </h2>

            {product?.productDiscount! > 0 && (
              <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-600">
                {product?.productDiscount}% OFF
              </span>
            )}

          </div>

          {/* Stock */}
          <div className="mt-6">

            {product?.productTotalStock! > 0 ? (
              <span className="rounded-full bg-green-100 px-4 py-2 text-green-700 font-semibold">
                In Stock ({product?.productTotalStock} Available)
              </span>
            ) : (
              <span className="rounded-full bg-red-100 px-4 py-2 text-red-600 font-semibold">
                Out of Stock
              </span>
            )}

          </div>

          {/* Description */}
          <div className="mt-10">

            <h3 className="text-xl font-semibold text-gray-900">
              Product Description
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              {product?.productDescriptions}
            </p>

          </div>

          {/* Features */}

          <div className="mt-10 grid grid-cols-2 gap-5">

            <div className="rounded-xl border p-5">
              <h4 className="font-semibold">
                🚚 Fast Delivery
              </h4>

              <p className="mt-2 text-sm text-gray-500">
                Delivery within 2–5 business days.
              </p>
            </div>

            <div className="rounded-xl border p-5">
              <h4 className="font-semibold">
                🔄 Easy Returns
              </h4>

              <p className="mt-2 text-sm text-gray-500">
                Hassle-free 7-day return policy.
              </p>
            </div>

            <div className="rounded-xl border p-5">
              <h4 className="font-semibold">
                💎 Premium Quality
              </h4>

              <p className="mt-2 text-sm text-gray-500">
                Carefully selected quality accessories.
              </p>
            </div>

            <div className="rounded-xl border p-5">
              <h4 className="font-semibold">
                🔒 Secure Shopping
              </h4>

              <p className="mt-2 text-sm text-gray-500">
                Safe and secure checkout experience.
              </p>
            </div>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-col sm:flex-row gap-5">

            <button
              onClick={handleAddToCart}
              className="flex-1 rounded-xl bg-pink-600 py-4 text-lg font-semibold text-white hover:bg-pink-700 transition"
            >
              Add To Cart
            </button>

            <button
              className="flex-1 rounded-xl border-2 border-pink-600 py-4 text-lg font-semibold text-pink-600 hover:bg-pink-600 hover:text-white transition"
            >
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </div>
  </div>
);
};

export default SingleProduct;
