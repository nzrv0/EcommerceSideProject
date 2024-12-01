import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import axios from "axios";

interface InitialState {
  products: ProductInterface[];
  product: ProductInterface;
  searchResoult: ProductInterface[];
  currentColor: string;
  amount: number;
  isLoading: boolean;
}

const initialState: InitialState = {
  products: [],
  product: {
    id: "",
    name: "",
    description: "",
    price: 0,
    category: "",
    colours: [],
    quantity: 0,
  },
  searchResoult: [],
  currentColor: "",
  amount: 0,
  isLoading: true,
};
const URL = process.env.NEXT_PUBLIC_BACKEND_URL || "";

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (id: string) => {
    const response = await axios.get(`${URL}/products/product/id/${id}`);
    return response.data;
  },
);
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (size: string) => {
    const response = await axios.get(`${URL}/products?size=12`);
    return response.data;
  },
);
export const fetchByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (category?: string) => {
    const response = await axios.get(
      `${URL}/products/product/category/${category}`,
    );
    return response.data;
  },
);

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL}/` }),
  endpoints: (builder) => ({
    getProductByName: builder.query({
      query: (name) => `product?name=${name}`,
    }),
  }),
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increase: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchAllProducts.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchByCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchByCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchByCategory.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
export const { useGetProductByNameQuery } = productApi;

export const { increase } = productsSlice.actions;
export default productsSlice.reducer;
