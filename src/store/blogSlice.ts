import { createSlice } from "@reduxjs/toolkit";
import type { User } from "./type";

const userInfo: User = {
  name: "Saksham Khadka",
};

createSlice({
  name: "user",
  initialState: userInfo,
  reducers: {
    setName(state, action) {
      state.name = "hahahaha";
    },
  },
});
