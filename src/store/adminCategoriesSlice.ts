import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globals/types/type";
import { API, APIWITHTOKEN } from "../http";
import type { AppDispatch } from "./store";

interface ICategory {
  categoryId: string;
  categoryName: string;
}

interface ICategorries {
  items: ICategory[];
  status: Status;
}

const initialState: ICategorries = {
  items: [],
  status: Status.LOADING,
};

export interface IEditCategory {
  categoryId?: string;
  categoryName: string;
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setItems(state: ICategorries, action: PayloadAction<ICategory[]>) {
      state.items = action.payload;
    },
    addCategoryToItem(state: ICategorries, action: PayloadAction<ICategory>) {
      state.items.push(action.payload);
    },
    setStatus(state: ICategorries, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setResetStatus(state: ICategorries) {
      state.status = Status.LOADING;
    },
    setDeleteCategories(state: ICategorries, action: PayloadAction<string>) {
      const index = state.items.findIndex(
        (item) => item.categoryId === action.payload,
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    setUpdateCategory(state, action: PayloadAction<ICategory>) {
      const index = state.items.findIndex(
        (item) => item.categoryId === action.payload.categoryId,
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const {
  setItems,
  setStatus,
  setDeleteCategories,
  addCategoryToItem,
  setResetStatus,
  setUpdateCategory,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;

export function addCategories(categoryName: string) {
  return async function addCategoriesThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.post("/category/addCategory", {
        categoryName,
      });

      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(addCategoryToItem(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log("error occured at add categories", error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function fetchCategories() {
  return async function fetchCategoriesThunk(dispatch: AppDispatch) {
    try {
      const response = await API.get(
        "http://localhost:3000/api/category/getCategory",
        {
          method: "GET",
        },
      );
      if (response.status === 200) {
        dispatch(setItems(response.data.data));
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log("Error occured at fetchCategories", error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function handleCategoriesDelete(productId: string) {
  return async function handleCategoriesThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.delete(
        `/category/deleteCategory/${productId}`,
      );

      if (response.status === 200) {
        dispatch(setDeleteCategories(productId));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log("error occured at handleCartUpdate", error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function editCategories(id: string, data: IEditCategory) {
  return async function (dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.put(
        `/category/updateCategory/${id}`,
        data,
      );

      if (response.status === 200) {
        dispatch(setUpdateCategory(response.data.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
}
