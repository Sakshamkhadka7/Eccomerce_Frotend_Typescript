import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./type";

const userInfo: User = {
  name: "Saksham Khadka",
  age:22
};

const userSlice=createSlice({
  name: "user",
  initialState: userInfo,
  reducers: {
    setName(state:User, action:PayloadAction<User>) {
      state.name = "hahahaha";
    },
    setAge(state:User,action:PayloadAction<User>){
        state.age=12
    }
  },
});

export const {setName,setAge}=userSlice.actions

export default userSlice.reducer