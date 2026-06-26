import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globals/types/type";
import axios from "axios";
import type { AppDispatch } from "./store";

interface IUser {
  username: string | null;
  email: string | null;
  password: string | null;
}

interface IAuthState {
  user: IUser;
  status: Status;
}

const initialState: IAuthState = {
  user: {
    username: "saksham",
    email: "projectmanage1212@gmail.com",
    password: "1111",
  },
  status: Status.LOADING,
};

const authSlice = createSlice({
  name: "user",
  initialState, // key value same then we can write key only in js
  reducers: {
    setUser(state: IAuthState, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    setStatus(state: IAuthState, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});

export const { setUser, setStatus } = authSlice.actions;

export default authSlice.reducer;

function registerUser(data: IUser) {
  return async function registerUserThunk(dispatch: AppDispatch) {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/register",
        data,
      );
      console.log(response);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log("Error occured at register user", error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
