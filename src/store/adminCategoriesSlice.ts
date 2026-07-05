import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globals/types/type";



interface ICategory {
     categoryId: string; categoryName: string
}

interface ICategorries {
  items:ICategory[];
  status: Status;
}

const initialState: ICategorries = {
  items: [],
  status: Status.LOADING,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setItems(state:ICategorries,action:PayloadAction<ICategory[]>){
         state.items=action.payload
    }
  },
});


export const {setItems}=categoriesSlice.actions;

export default categoriesSlice