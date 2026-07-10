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
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="relative py-3 sm:max-w-xs sm:mx-auto">
        <form
          onSubmit={handleSubmit}
          className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900  rounded-xl shadow-lg"
        >
          <div className="flex flex-col justify-center items-center h-full select-none">
            <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <h1>Sign in {user?.username}</h1>

              <p className="m-0 text-[16px] font-semibold dark:text-white">
                Login to your Account
              </p>
              <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
                Get started with our app, just start section and enjoy
                experience.
              </span>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-gray-400 ">
                Email :{" "}
              </label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="font-semibold text-xs text-gray-400 ">
              Password
            </label>
            <input
              type="password"
              onChange={handleChange}
              name="password"
              className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
              placeholder="••••••••"
            />
          </div>
          <div className="mt-5">
            <button className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">
              Login
            </button>
          </div>
          <p className="text-blue-500">
            Wanna Login ? <Link to="/register">Go to Register</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
