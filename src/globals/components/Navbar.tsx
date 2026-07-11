import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { useEffect, useState } from "react";
import { fetchMyCarts } from "../../store/cartSlice";
import { APIWITHTOKEN } from "../../http";
import { userLogout } from "../../store/authSlice";

function Navbar() {
  const reduxToken = useAppSelector((store) => store.auth.user.token);
  const localStorageToken = localStorage.getItem("token");

  const { items } = useAppSelector((store) => store.carts);

  const dispatch = useAppDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (reduxToken || localStorageToken) {
      setIsLoggedIn(true);
      dispatch(fetchMyCarts());
    } else {
      setIsLoggedIn(false);
    }
  }, [reduxToken, localStorageToken, dispatch]);

  const logout = async () => {
    try {
      const response = await APIWITHTOKEN.post("/auth/logout");

      if (response.status === 200) {
        localStorage.removeItem("token");
        dispatch(userLogout());
        alert("Logout Successfully");
        window.location.href = "/login";
      }
    } catch (error) {
      console.log("Error occurred at logout", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-500 text-white text-xl font-bold">
              G
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Glow Girl
              </h2>

              <p className="text-xs text-gray-500 -mt-1">
                Fashion Accessories
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">

            <Link
              to="/"
              className="font-medium text-gray-700 hover:text-pink-600"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="font-medium text-gray-700 hover:text-pink-600"
            >
              Products
            </Link>

            {isLoggedIn && (
              <Link
                to="/my-orders"
                className="font-medium text-gray-700 hover:text-pink-600"
              >
                My Orders
              </Link>
            )}

          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-5">

            {isLoggedIn ? (
              <>
                <Link
                  to="/my-cart"
                  className="relative text-gray-700 font-medium"
                >
                  🛒 Cart

                  <span className="absolute -top-3 -right-5 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 text-xs text-white">
                    {items.length}
                  </span>
                </Link>

                <button
                  onClick={logout}
                  className="rounded-lg bg-pink-600 px-6 py-3 text-white font-medium hover:bg-pink-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="font-medium text-gray-700">
                    Login
                  </button>
                </Link>

                <Link to="/register">
                  <button className="rounded-lg bg-pink-600 px-6 py-3 text-white font-medium hover:bg-pink-700">
                    Register
                  </button>
                </Link>
              </>
            )}

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

        </div>

                {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-6">

            <nav className="flex flex-col gap-5">

              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium text-gray-700"
              >
                Home
              </Link>

              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium text-gray-700"
              >
                Products
              </Link>

              {isLoggedIn && (
                <Link
                  to="/my-orders"
                  onClick={() => setIsMenuOpen(false)}
                  className="font-medium text-gray-700"
                >
                  My Orders
                </Link>
              )}

              {isLoggedIn && (
                <Link
                  to="/my-cart"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3"
                >
                  <span className="font-medium">
                    🛒 My Cart
                  </span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-600 text-sm text-white">
                    {items.length}
                  </span>
                </Link>
              )}

              {isLoggedIn ? (
                <button
                  onClick={logout}
                  className="mt-2 rounded-lg bg-pink-600 py-3 text-white font-semibold"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <button className="w-full rounded-lg border border-pink-600 py-3 font-semibold text-pink-600">
                      Login
                    </button>
                  </Link>

                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <button className="w-full rounded-lg bg-pink-600 py-3 font-semibold text-white">
                      Register
                    </button>
                  </Link>
                </>
              )}

            </nav>

          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;