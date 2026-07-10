import { Navigate } from "react-router-dom";
import { useAppSelector } from "./store/hook";
import { Status } from "./globals/types/type";

const AdminRoute = ({ children }: any) => {
  const { token,role } = useAppSelector((store) => store.auth.user);
  const status = useAppSelector((store) => store.auth.status);

  console.log("Redux token:", token);
console.log("Redux role:", role);
console.log("Local token:", localStorage.getItem("token"));


  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;
