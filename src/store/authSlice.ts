import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globals/types/type";
import axios from "axios";
import type { AppDispatch } from "./store";

interface IUser {
  username: string | null;
  email: string | null;
  password: string | null;
  token: string | null;
}

interface ILogin {
  email: string;
  password: string;
}

interface IAuthState {
  user: IUser;
  status: Status;
}

const initialState: IAuthState = {
  user: {
    username: null,
    email: null,
    password: null,
    token: null,
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
    setToken(state: IAuthState, action: PayloadAction<string>) {
      state.user.token = action.payload;
    },
  },
});

export const { setUser, setStatus, setToken } = authSlice.actions;

export default authSlice.reducer;

export function registerUser(data: IUser) {
  return async function registerUserThunk(dispatch: AppDispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        data,
      );
      console.log(response);
      if (response.status === 201) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setUser(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log("Error occured at register user", error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function loginUser(data: ILogin) {
  return async function loginUserThunk(dispatch: AppDispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        data,
      );
      console.log(response);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));

        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          dispatch(setToken(response.data.token));
        } else {
          dispatch(setStatus(Status.ERROR));
        }
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log("Error occured at login user", error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function forgetPassword(data: { email: string }) {
  return async function forgetPasswordThunk(dispatch: AppDispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/forgot_password",
        data,
      );
      console.log(response);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log("Error occured at forgot user", error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function verifyOtp(data: { email: string; otp: number }) {
  return async function verifyOtpThunk(dispatch: AppDispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/verify_otp",
        data,
      );
      console.log(response);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log("Error occured at verify otp user", error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function resetPassword(data: {
  newPassword: string;
  confirmPassword: string;
}) {
  return async function resetPasswordThunk(dispatch: AppDispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/resetPassword",
        data,
      );
      console.log(response);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log("Error occured at reset password user", error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
