import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { getMe, loginUser } from "../../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { Status } from "../../globals/types/type";

const Login = () => {
  const dispatch = useAppDispatch();
  const { status, user } = useAppSelector((store) => store.auth);
  const navigate = useNavigate();

  const [users, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit =async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(users);
  const result=await  dispatch(loginUser(users));
   await dispatch(getMe())
  
  }
useEffect(() => {
    if (status === Status.SUCCESS && user.token) {

        if(user.role==="admin"){
            navigate("/admin");
        }else{
            navigate("/products");
        }

    }

},[status,user])

 return (
  <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 flex items-center justify-center py-12 px-6">

    <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

      {/* Left Section */}
      <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-pink-500 to-rose-500 text-white p-16 relative overflow-hidden">

        <div className="absolute -top-16 -right-16 h-60 w-60 rounded-full bg-white/10"></div>
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5"></div>

        <div className="relative z-10">

          <span className="inline-block bg-white/20 px-5 py-2 rounded-full text-sm font-semibold">
            ✨ Welcome to Glow Girl
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight">
            Fashion That
            <br />
            Makes You Shine
          </h1>

          <p className="mt-8 text-lg leading-8 text-pink-100">
            Discover elegant earrings, necklaces, bracelets, handbags,
            rings and premium accessories designed to complement your
            unique personality. Shop confidently with high-quality
            products and exceptional customer service.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6">

            <div className="bg-white/10 rounded-2xl p-5 backdrop-blur">

              <h2 className="text-3xl font-bold">
                500+
              </h2>

              <p className="mt-2 text-pink-100">
                Premium Accessories
              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-5 backdrop-blur">

              <h2 className="text-3xl font-bold">
                10K+
              </h2>

              <p className="mt-2 text-pink-100">
                Happy Customers
              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-5 backdrop-blur">

              <h2 className="text-3xl font-bold">
                4.9★
              </h2>

              <p className="mt-2 text-pink-100">
                Customer Rating
              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-5 backdrop-blur">

              <h2 className="text-3xl font-bold">
                24/7
              </h2>

              <p className="mt-2 text-pink-100">
                Customer Support
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Right Section */}

      <div className="p-8 md:p-14 flex items-center">

        <div className="w-full">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900">
              Welcome Back 👋
            </h2>

            <p className="mt-4 text-gray-500">
              Login to continue shopping your favourite accessories.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >

            {/* Email */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={users.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
              />

            </div>

            {/* Password */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={users.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
              />

            </div>

            <div className="flex justify-end">

              <button
                type="button"
                className="text-sm text-pink-600 hover:text-pink-700"
              >
                Forgot Password?
              </button>

            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-pink-600 py-4 text-lg font-semibold text-white transition hover:bg-pink-700"
            >
              Login
            </button>

            <p className="text-center text-gray-500">

              Don't have an account?

              <Link
                to="/register"
                className="ml-2 font-semibold text-pink-600 hover:text-pink-700"
              >
                Register
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>

  </div>
);
};

export default Login;
