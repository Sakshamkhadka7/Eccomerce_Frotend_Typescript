import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globals/types/type";
import type { AppDispatch } from "./store";
import { APIWITHTOKEN } from "../http";

interface IUser {
  userId: string;
  username: string;
  email: string;
}

interface InitialState {
  users: IUser[];
  status: Status;
}

const initialState: InitialState = {
  users: [],
  status: Status.LOADING,
};

const userSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setStatus(state: InitialState, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setUsers(state: InitialState, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
  },
});

export const { setStatus, setUsers } = userSlice.actions;

export default userSlice.reducer;

export function fetchUsers() {
  return async function fetchUsersThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.get("/auth/getusers");
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setUsers(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR));

      console.log("Error occured at fetchUsers : ", error);
    }
  };
}
