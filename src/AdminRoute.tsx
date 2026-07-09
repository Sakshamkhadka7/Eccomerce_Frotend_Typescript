import { Navigate } from "react-router-dom";
import { useAppSelector } from "./store/hook";

const AdminRoute = ({ children }: any) => {
  const { token, role } = useAppSelector((store) => store.auth.user);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;
