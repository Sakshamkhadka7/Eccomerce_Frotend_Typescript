import { useEffect } from "react";
import IndexAdmin from "../IndexAdmin";
import UserTable from "./components/UserTable";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { fetchUsers } from "../../../store/adminUserSlice";

const User = () => {
  const dispatch = useAppDispatch();

  const { users } = useAppSelector((store) => store.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <IndexAdmin>
      <UserTable users={users} />
    </IndexAdmin>
  );
};

export default User;
