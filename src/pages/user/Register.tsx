import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { registerUser } from "../../store/authSlice";
import { Status } from "../../globals/types/type";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
 
  const {status}=useAppSelector((store)=> store.auth);
  const navigate=useNavigate();


  const dispatch = useAppDispatch();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser(data));
  };

  useEffect(()=>{
    if(status===Status.SUCCESS){
          navigate("/login")
    }else if (status === Status.ERROR){
      alert("Something went wrong")
    }
  },[status])

  return (
  <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 flex items-center justify-center py-12 px-6">

    <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

      {/* Left Section */}

      <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-pink-500 to-rose-500 text-white p-16 relative overflow-hidden">

        <div className="absolute -top-16 -right-16 h-60 w-60 rounded-full bg-white/10"></div>
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5"></div>

        <div className="relative z-10">

          <span className="inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
            ✨ Join Glow Girl
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight">
            Create Your
            <br />
            Fashion Journey
          </h1>

          <p className="mt-8 text-lg leading-8 text-pink-100">
            Join thousands of happy customers and discover premium girls'
            accessories crafted to enhance your beauty and confidence.
            Create your account today and enjoy an amazing shopping
            experience with Glow Girl.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6">

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

              <h2 className="text-3xl font-bold">
                500+
              </h2>

              <p className="mt-2 text-pink-100">
                Accessories
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

              <h2 className="text-3xl font-bold">
                10K+
              </h2>

              <p className="mt-2 text-pink-100">
                Happy Customers
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

              <h2 className="text-3xl font-bold">
                4.9★
              </h2>

              <p className="mt-2 text-pink-100">
                Customer Rating
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

              <h2 className="text-3xl font-bold">
                Secure
              </h2>

              <p className="mt-2 text-pink-100">
                Shopping
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Right Section */}

      <div className="flex items-center p-8 md:p-14">

        <div className="w-full">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900">
              Create Account
            </h2>

            <p className="mt-4 text-gray-500">
              Register now and start shopping your favourite accessories.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >

            {/* Username */}

            <div>

              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Username
              </label>

              <input
                type="text"
                name="username"
                value={data.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
              />

            </div>

            {/* Email */}

            <div>

              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
              />

            </div>

            {/* Password */}

            <div>

              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
              />

            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-pink-600 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-pink-700"
            >
              Create Account
            </button>

            <p className="text-center text-gray-500">

              Already have an account?

              <Link
                to="/login"
                className="ml-2 font-semibold text-pink-600 hover:text-pink-700"
              >
                Login
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>

  </div>
);
};

export default Register;
