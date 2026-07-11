import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globals/types/type";
import type { AppDispatch, RootState } from "./store";
import { APIWITHTOKEN } from "../http";
import type { IAdminProducts } from "../pages/admin/products/components/ProductModal";

export interface IProducts {
  productId: string;
  productName: string;
  productDescriptions: string;
  productPrice: number;
  productTotalStock: number;
  productDiscount: number;
  productImage: string;
  Category?:{
    categoryName:string
  }
}

interface InitialStateProducts {
  products: IProducts[];
  status: Status;
  product:null | IProducts
}

const initialState: InitialStateProducts = {
  products: [],
  status: Status.LOADING,
  product:null
};

const adminProductSlice = createSlice({
  name: "adminproduct",
  initialState,
  reducers: {
    setProducts(
      state: InitialStateProducts,
      action: PayloadAction<IProducts[]>,
    ) {
      state.products = action.payload;
    },
    setStatus(state: InitialStateProducts, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  setResetStatusProduct(state: InitialStateProducts) {
      state.status = Status.LOADING
    },

    setAdminProducts(
      state: InitialStateProducts,
      action: PayloadAction<IProducts>,
    ) {
      state.products.push(action.payload);
    },

    setSingleProduct(state:InitialStateProducts,action:PayloadAction<IProducts>){
      state.product=action.payload
    },
    updateProduct(state, action: PayloadAction<IProducts>) {
  const index = state.products.findIndex(
    (item) => item.productId === action.payload.productId
  );

  if (index !== -1) {
    state.products[index] = action.payload;
  }
}
  },
});

export const { setProducts, setStatus , setAdminProducts ,setResetStatusProduct , setSingleProduct, updateProduct } = adminProductSlice.actions;

export default adminProductSlice.reducer;

export function fetchProducts() {
  return async function fetchProductsThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.get("/product/getProduct");
      if (response.status === 200) {
        // dispatch(setStatus(Status.SUCCESS));
        dispatch(setProducts(response.data.data));
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR));
      console.log("error occured at fetch Products", error);
    }
  };
}

const buildProductFormData = (data: IAdminProducts | FormData) => {
  if (data instanceof FormData) {
    return data;
  }

  const formData = new FormData();
  formData.append("productName", data.productName);
  formData.append("productDescriptions", data.productDescriptions);
  formData.append("productPrice", String(data.productPrice));
  formData.append("productTotalStock", String(data.productTotalStock));
  formData.append("productDiscount", String(data.productDiscount));
  formData.append("categoryId", data.categoryId);

  if (data.productImage instanceof File) {
    formData.append("productImage", data.productImage);
  }

  return formData;
};

export function addAdminProducts(data: IAdminProducts | FormData) {
  return async function addAdminProductsThunk(dispatch: AppDispatch) {
    try {
      const formData = buildProductFormData(data);
      const response = await APIWITHTOKEN.post("/product/addProduct/", formData, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setAdminProducts(response.data.data));
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR));
      console.log("error occured at fetch Products", error);
    }
  };
}


export function adminSingleFetchProduct(id: string) {
  return async function adminSingleFetchProductThunk(
    dispatch: AppDispatch,
    getState: () => RootState,
  ) {
    const store = getState();
    const productExists = store.adminProducts.products.find((product:IProducts)=>
    product.productId ===id
    )
    if (productExists) {
      dispatch(setSingleProduct(productExists));
      dispatch(setStatus(Status.SUCCESS));
    } else {
      try {
        const response = await APIWITHTOKEN.get(
          `http://localhost:3000/api/product/getSingleProduct/${id}`,
        );
        console.log(response);
        console.log("Response", response.data.data[0]);

        if (response.status === 200) {
          dispatch(setStatus(Status.SUCCESS));
          dispatch(setProducts(response.data.data[0]));
        } else {
          dispatch(setStatus(Status.ERROR));
        }
      } catch (error) {
        console.log("Error occured at fetchedAdminProducts", error);
        setStatus(Status.ERROR);
      }
    }
  };
}


export function editAdminProduct(id: string, data: IAdminProducts | FormData) {
  return async function (dispatch: AppDispatch) {
    try {
      const formData = buildProductFormData(data);
      const response = await APIWITHTOKEN.put(
        `/product/updateProduct/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        dispatch(updateProduct(response.data.data));
        dispatch(setStatus(Status.SUCCESS));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}