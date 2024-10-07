import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Category {
    _id: string;
    name: string;
}

interface InitialState {
    categories: Category[];
    isLoading: boolean;
}

const initialState: InitialState = {
    categories: [],
    isLoading: true,
};

export const fetchAllCategories = createAsyncThunk(
    "categories/fetchAllCategories",
    async (category?: string) => {
        const response = await axios.get(`http://localhost:3001/category`);
        return response.data;
    }
);

export const categorySlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllCategories.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories = action.payload;
        });
        builder.addCase(fetchAllCategories.rejected, (state) => {
            state.isLoading = false;
        });
    },
});
export const {} = categorySlice.actions;
export default categorySlice.reducer;
